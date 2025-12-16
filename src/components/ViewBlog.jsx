import { useState } from 'react'

const ViewBlog = ({ blog, likeUpdater = null, remover = null }) => {
  const [visible, setVisible] = useState(false)

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
          {(remover !== null) && (
            <button onClick={remover}>remove</button>
          )}
          </span>
        )}
      </span>
    )
  } catch {
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