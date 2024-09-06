import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return <section>
    <h2>Blog post for user with id {id}</h2>
  </section>;
}

export default BlogPost;
