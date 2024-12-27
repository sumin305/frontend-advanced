import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fakeFetch = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        userId: 1,
        id: 1,
        title: "fake title",
        body: "fake body",
      });
    }, 1000);
  });
};
export const FetchDataComponent = () => {
  const url = "https://jsonplaceholder.typicode.com/posts/";
  const [post, setPost] = useState<Post>();
  useEffect(() => {
    fakeFetch().then((response) => {
      setPost(response as Post);
    });
  });
  return (
    <div>
      {post && (
        <ul>
          <li>{`userId: ${post.userId}`}</li>
          <li>{`id: ${post.id}`}</li>
          <li>{`title: ${post.title}`}</li>
          <li>{`body: ${post.body}`}</li>
        </ul>
      )}
    </div>
  );
};
