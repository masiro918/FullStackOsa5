import { useState } from 'react'

const NewBlog = ({ blog }) => {
  const [url, setUrl] = useState([])
  const [author, setAuthor] = useState([])
  const [title, setTitle] = useState([])

  const handleNewBlog = (event) => {
    event.preventDefault()

    blog(
      {
        author: author, url: url, title: title
      }
    )
  
    setUrl('')
    setTitle('')
    setAuthor('')
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleNewBlog}>
        <div>
          <label>
            title:
            <input
              type="text"
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            author:
            <input
              type="text"
              value={author}
              onChange={({ target }) => setAuthor(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            url:
            <input
              type="text"
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
          </label>
        </div>
        <button type="submit">add</button>
      </form>
      <button onClick={() => setVisible(false)}>cancel</button>
    </div>
  )
}

export default NewBlog