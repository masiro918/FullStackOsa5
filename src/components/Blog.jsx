import ViewBlog from "./ViewBlog"

const Blog = ({ blog, likeUpdater = null }) => (
  <div>
    <div>
      {blog.title} {blog.author} <ViewBlog blog={blog} likeUpdater={likeUpdater} />
    </div>
  </div>  
)

export default Blog