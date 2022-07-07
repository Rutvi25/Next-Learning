import { MongoClient } from 'mongodb';

async function handler(req, res) {
  const eventId = req.query.eventId;
  const client = await MongoClient.connect(
    'mongodb+srv://rutvi2500:rutvi2500@cluster0.izweg.mongodb.net/?retryWrites=true&w=majority'
  )
  if(req.method === 'POST') {
    const { email, name, text } = req.body
    if(
      !email.includes('@') ||
      !name || 
      name.trim === ' ' ||
      !text ||
      text.trim === ' '
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }
    const newComment = {
      email,
      name,
      text,
      eventId
    }
    const db = client.db('events');
    const result = await db.collection('comments').insertOne(newComment);
    console.log(result);
    newComment.id = result.insertedId;
    res.status(201).json({ message: 'Comment added successfully', comment: newComment });
  }
  if(req.method === 'GET') {
    const dummyComments = [
      {id: 'c1', name: 'John', text: 'First Comment'},
      {id: 'c2', name: 'Maria', text: 'Second Comment'},      
    ];
    res.status(200).json({ comments: dummyComments });
  }
  client.close()
}

export default handler;