import React, { useState } from 'react'
import { comments } from '../../data/comments'

function CommentsPage() {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])

  const fetchComments = async () => {
    const response = await fetch('/api/comments')
    const data = await response.json()
    setComments(data)
  }
  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({comment}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data =  await response.json()
    console.log(data)
  }
  const deleteComment = async commentId => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    console.log(data)
    fetchComments()
  }
  return (
    <>
      <input type={'text'} value={comment} onChange={(e) => setComment(e.target.value)}/>
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Fetch Comments</button>
      {
        comments.map((comment, index) => {
          return(
            <div key={comment.id}>
              {index+1} {comment.title}
              <button onClick={() => deleteComment(comment.id)}>Delete</button>
            </div>
          )
        })
      }
    </>
  )
}

export default CommentsPage