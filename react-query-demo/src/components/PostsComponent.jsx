import { useQuery } from "react-query";

async function fetchPosts(url) {
  const res = await fetch(url);
  return await res.json();
}

function PostsComponent() {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts("https://jsonplaceholder.typicode.com/posts"),
    staleTime: 3000,
    gcTime: 6000,
  });

  if (isError) {
    return (
      <div className="error">
        <h1>There was an error!!</h1>
        <button onClick={() => refetch()}>Try Again</button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Data is loading...</h1>
      </div>
    );
  }

  return (
    <section>
      <button onClick={() => refetch()} className="refetch-btn">
        Refetch Posts
      </button>
      <div>
        {data.slice(0, 10).map((todo) => (
          <article key={todo.id} className="post">
            <h2>{todo.title}</h2>
            <p>{todo.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PostsComponent;
