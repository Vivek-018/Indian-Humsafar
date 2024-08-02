import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <section className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to Our Blog! <b>Indian-Humsafar</b>
              </h1>
              <p className="text-lg text-gray-700">
                Explore interesting articles, share your thoughts, and connect
                with others.
              </p>
            </section>
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Our Blog! <b>Indian-Humsafar</b>
          </h1>
          <p className="text-lg text-gray-700">
            Explore interesting articles, share your thoughts, and connect with
            others.
          </p>
        </section>
        {/* <section className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Explore Nearby Places to Visit
          </h2>
          <p className="text-lg text-gray-700">
            Discover amazing places near you to visit and enjoy with family and
            friends.
          </p>
        </section> */}
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
