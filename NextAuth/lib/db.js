import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://rutvi2500:rutvi2500@cluster0.izweg.mongodb.net/?retryWrites=true&w=majority'
  );
  return client;
}