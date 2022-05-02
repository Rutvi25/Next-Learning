import React, { useState } from 'react'
import { comments } from '../../data/comments'

function CommentsPage() {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  // const [user, setUser] = useState('')
  const [users, setUsers] =  useState([])

  const fetchComments = async () => {
    const response = await fetch('/api/comments',{
      headers: {
        data: 1
      }
    })
    const data = await response.json();
    setComments(data)
  }
  const fetchUsers = async () => {
    const response = await fetch('/api/comments',{
      headers: {
        data: 12
      }
    })
    const data = await response.json();
    setUsers(data)
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
  // const submitUser = async () => {
  //   const response = await fetch('/api/comments', {
  //     method: 'POST',
  //     body: JSON.stringify({comment}),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   const data =  await response.json()
  //   console.log(data)
  // }
  const deleteComment = async commentId => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    console.log(data)
    fetchComments()
  }
  // const deleteUser = async userId => {
  //   const response = await fetch(`/api/comments/${userId}`, {
  //     method: 'DELETE',
  //   })
  //   const data = await response.json()
  //   console.log(data)
  //   fetchUsers()
  // }
  return (
    <>
      <input type={'text'} value={comment} onChange={(e) => setComment(e.target.value)}/>
      <button onClick={submitComment}>Submit Comment</button><br /><br />
      {/* <input type={'text'} value={user} onChange={(e) => setUser(e.target.value)}/>
      <button onClick={submitUser}>Submit User</button><br /><br /> */}
      <button onClick={fetchComments}>Fetch Comments</button><br /><br />
      <button onClick={fetchUsers}>Fetch Users</button><br /><br />
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
      {
        users.map((user, index) => {
          return(
            <div key={user.id}>
              {index+1} {user.name} 
            </div>
          )
        })
      }
    </>
  )
}

export default CommentsPage