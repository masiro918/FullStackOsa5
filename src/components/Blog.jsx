import ViewBlog from "./ViewBlog"

const Blog = ({ blog }) => (
  <div>
    <div>
      {blog.title} {blog.author} <ViewBlog blog={blog} />
    </div>
  </div>  
)

export default Blog