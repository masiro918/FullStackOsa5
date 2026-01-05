import { useState } from 'react'
import blogService from '../services/blogs'

const ViewBlog = ({ blog, likeUpdater = null }) => {
  const [visible, setVisible] = useState(false)
  const [likes, setLikes] = useState(0)

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
          <button onClick={handleVisible}>view</button>
        )}
        {visible && (
          <span>
            <button onClick={handleVisible}>hide</button>
            <p>{blog.url}</p>
            <p>likes {blog.likes}<button onClick={likeUpdater}>like</button></p>
            <p>{blog.user.name}</p>
          </span>
        )}
      </span>
    )
  } catch {
    setVisible(false)
    return (
      <span>
        <button onClick={handleVisible}>view</button>
      </span>
    )
  }

}

export default ViewBlog