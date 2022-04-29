import { comments, users } from "../../../data/comments";

export default function handler(req, res) {
  if (req.method === 'POST') {
    const comment = req.body.comment
    const newComment = {
      id: Date.now(),
      title: comment
    }
    comments.push(newComment)
    res.status(201).json(newComment)
  } else if (req.method === 'GET') {
    console.log(req) 
    res.status(200).json(comments)
  }
}