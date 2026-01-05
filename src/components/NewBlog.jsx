import { useState } from 'react'

const NewBlog = ({ blog }) => {
  const [url, setUrl] = useState([])
  const [author, setAuthor] = useState([])
  const [title, setTitle] = useState([])
  const [visible, setVisible] = useState(false)

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

  const handleVisible = (event) => {
    event.preventDefault()

    if (visible) {
      setVisible(false)
    } else {
      setVisible(true)

    }
  }
  try {
    return (
      <span>
      {!visible && (
        <span>
          <button onClick={handleVisible}>add new blog</button>
        </span>
      )}
      {visible && (
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
          <button onClick={handleVisible}>cancel</button>
        </div>
      )}
      </span>
    )
  } catch {
    setVisible(false)
    return (
      <span>
        <button onClick={handleVisible}>add new blog</button>
      </span>
    )
  }
}

export default NewBlog