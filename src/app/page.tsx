'use client';

import { useState, useEffect } from 'react';
import './page.css';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data: Post[] = await response.json();
        setPosts(data);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="page-container">
        <div className="loading-spinner">
          Loading posts...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="error-message">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="home-title">Welcome to My Resume Page</h1>
      
      <div className="home-content">
        <p>
          Explore my professional journey, skills, and get to know me better.
        </p>
      </div>

      <div className="blog-section">
        <h2>Recent Blog Posts</h2>
        <div className="blog-posts">
          {posts.map((post) => (
            <div key={post.id} className="blog-post">
              <h3>{post.title}</h3>
              <p>{post.body.substring(0, 100)}...</p>
              <a 
                href={`https://jsonplaceholder.typicode.com/posts/${post.id}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
