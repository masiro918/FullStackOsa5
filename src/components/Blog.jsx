import ViewBlog from "./ViewBlog"

const Blog = ({ blog, likeUpdater = null, remover = null, myUser = null }) => (
  <div>
    {blog.user !== undefined && blog.user !== null && (blog.user.username == myUser) && (
    <div>
      {blog.title} {blog.author} <ViewBlog blog={blog} likeUpdater={likeUpdater} remover={remover} />
    </div>
    )}
    {blog.user !== undefined && blog.user !== null && (blog.user.username !== myUser) && (
    <div>
      {blog.title} {blog.author} <ViewBlog blog={blog} likeUpdater={likeUpdater} remover={null} />
    </div>
    )}
  </div>
)

export default Blog