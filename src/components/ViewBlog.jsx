import { useState } from 'react'

const ViewBlog = ({ blog }) => {
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
            <p>likes 0<button onClick="">like</button></p>
            <p>{blog.user.name}</p>
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