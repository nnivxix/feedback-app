import { useParams } from "react-router-dom";

function PostPage() {
  const { title, author } = useParams();
  return (
    <div>
      <h1>Post {title}</h1>
      <p>authot: {author}</p>
    </div>
  );
}

export default PostPage;
