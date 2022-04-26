import React from 'react';
import Link from 'next/link';
import '../../src/styles.module.css';

const Page = () => {
  const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `Note: ${i}`}))
  return (
    <div>
      <h3>Note index Path</h3>
      {notes.map(note => (
          <div>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a>
                <strong>{note.title}</strong>
              </a>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default Page;