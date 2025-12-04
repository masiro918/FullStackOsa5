import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState([])
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const [errorMessage, setErrorMessage] = useState([])
  const [url, setUrl] = useState([])
  const [author, setAuthor] = useState([])
  const [title, setTitle] = useState([])
  
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs ),
      setUser(null)
    )
  }, [])

  useEffect(() => {    
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')    
    if (loggedUserJSON) {      
      const user = JSON.parse(loggedUserJSON)      
      setUser(user)      
      blogService.setToken(user.token)    
    }  
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.loginRequest({ username, password })
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')

      setErrorMessage('logged in!')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)

    } catch {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = async (event) => {
    event.preventDefault()

    try {
      window.localStorage.removeItem('loggedBlogappUser')
      blogService.setToken('')
      setUser(null)

      setErrorMessage('logged out')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)

      setUsername('')
      setPassword('')
    } catch {
      setErrorMessage('error in logging out')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleNewBlog = async (event) => {
    event.preventDefault()

    try {
      const newBlog = await blogService.addNew({ title, author, url })

      const msg = 'Added ' + newBlog.title
      setErrorMessage(msg)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setVisible(false)

      setBlogs(blogs.concat(newBlog))
      setUrl('')
      setTitle('')
      setAuthor('')

    } catch {
      setErrorMessage('error in adding blog')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        <h1>Log in to application</h1>
        <p><i>{errorMessage}</i></p>
        <label>
          username
          <input
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          password
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
      </div>
      <button type="submit">login</button>
    </form>
  )

  return (
    <div>
      {!user && loginForm()}
      {user && (
        <div>
          <h2>blogs</h2>
          <form onSubmit={handleLogout}>
            <p>{user.name} logged in <button type="submit">logout</button></p>
          </form>
          <p><i>{errorMessage}</i></p>
          <div style={hideWhenVisible}>
            <button onClick={() => setVisible(true)}>add new blog</button>
          </div>
          <div style={showWhenVisible}>
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
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
          )}
        </div>
      )}
    </div>
  )
}

export default App
