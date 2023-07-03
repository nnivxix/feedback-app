import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { useState } from "react";
function PostPage() {
  const [status] = useState(200);

  if (status === 300) {
    Navigate({ to: "/" });
  }
  return (
    <div>
      <h1>Post {status}</h1>
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
