import { comments, users } from "../../../data/comments";

export default function handler(req, res) {
  const { commentId, userId } = req.query
  if(req.method === 'GET') {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    ) 
    res.status(200).json(comment)
  } else if (req.method === 'DELETE') {
    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    )
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    )
    comments.splice(index, 1)
    res.status(200).json(deletedComment)
  }
  // else if (req.method === 'DELETE') {
  //   const deletedUser = users.find(
  //     (user) => user.id === parseInt(userId)
  //   )
  //   const index = users.findIndex(
  //     (user) => user.id === parseInt(userId)
  //   )
  //   users.splice(index, 1)
  //   res.status(200).json(deletedUser)
  // }
}