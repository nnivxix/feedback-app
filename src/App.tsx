function App() {
  const title = "Title Post";
  const body =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  const comments = [
    {
      id: 1,
      text: "Comment 1",
    },
    {
      id: 2,
      text: "Comment 2",
    },
    {
      id: 3,
      text: "Comment 3",
    },
  ];

  const showComment = false;

  return (
    <main>
      <h1>{title}</h1>
      <p>{body}</p>
      {showComment && (
        <>
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

export default App;
