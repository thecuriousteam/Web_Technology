import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// 📝 Simulated Blog Database
const blogPosts = [
  {
    id: "1",
    slug: "react-hooks",
    title: "Understanding React Hooks",
    content:
      "React Hooks allow you to use state and other React features in functional components.",
  },
  {
    id: "2",
    slug: "react-router",
    title: "Mastering React Router",
    content:
      "React Router helps in navigating between pages in a React application seamlessly.",
  },
  {
    id: "3",
    slug: "useeffect-guide",
    title: "Guide to useEffect Hook",
    content:
      "The useEffect Hook allows you to perform side effects in function components.",
  },
];

// React Router Based on Slug
export const BlogList = () => {
  // listing all products and creating hyperlink
  return (
    <div className="flex gap-2">
      <ol>
        {blogPosts.map((eachBlog) => (
          <li key={eachBlog.id}>
            <Link to={`/blogs/${eachBlog.slug}`}>{eachBlog.slug}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export const BlogDetails = () => {
  // destructure blogSlug
  const { blogSlug } = useParams();
  // find blog
  const blog = blogPosts.find((bSlug) => bSlug.slug === blogSlug);
  console.log(">>> Blog Details", blog);
  if (!blog) {
    return (
      <div>
        <p>Blog Not Found</p>
        <Link to={"/"}>Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export const BlogPostApp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blogs/:blogSlug" element={<BlogDetails />} />
        </Routes>
      </Router>
    </div>
  );
};
