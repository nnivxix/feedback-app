import { Routes, Route, NavLink } from "react-router-dom";

function PostPage() {
  return (
    <div>
      <h1>Post</h1>
      <p>
        Detail page <code>/show</code>{" "}
        <NavLink to="/post/show">show post</NavLink>
      </p>
      <Routes>
        <Route
          path="/show"
          element={
            <h1>
              Show Post <NavLink to="/post">back to post</NavLink>{" "}
            </h1>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default PostPage;
