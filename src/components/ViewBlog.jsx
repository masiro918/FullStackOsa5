import { useState } from 'react'

const ViewBlog = ({ blog, likeUpdater = null, remover = null }) => {
  const [visible, setVisible] = useState(false)
  const [likes, setLikes] = useState(blog.likes)
  const [user, setUser] = useState(blog.user)
  const [url, setUrl] = useState(blog.url)

  const handleVisible = (event) => {
    event.preventDefault()

    if (visible) {
      setVisible(false)
    } else {
      setVisible(true)
      setUrl(blog.url)
      setUser(blog.user.name)
      setLikes(blog.likes)
    }
  }

  const handleLike = async (event) => {
    event.preventDefault()
    await likeUpdater()
    setLikes(likes + 1)
  }

  try {
    return (
      <span>
        {!visible && (
          <button onClick={handleVisible}>view</button>
        )}
        {visible && (
          <span>
            <button onClick={handleVisible}>hide</button>
            <p>{url}</p>
            <p>likes {likes}<button onClick={handleLike}>like</button></p>
            <p>{user}</p>
          {(remover !== null) && (
            <button onClick={() => remover()}>remove</button>
          )}
          </span>
        )}
      </span>
    )
  } catch (exception) {
    setVisible(false)
    return (
      <span>
        {!visible && (
          <button onClick={handleVisible}>view</button>
        )}
      </span>
    )
  }

}

export default ViewBlog