import React from 'react';
import Loader from '@/components/shared/Loader';
import PostCard from '@/components/shared/PostCard';
import { useGetSavePosts } from '@/lib/react-query/queriesAndMutations';
import { Models } from 'appwrite';

const Saved = () => {
  const { data: savedPosts, isLoading, error } = useGetSavePosts();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error loading saved posts</div>;
  }

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h1 className="h3-bold md:h2-bold text-left w-full">Saved Posts</h1>
          {savedPosts && savedPosts.documents.length > 0 ? (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {savedPosts.documents.map((post: Models.Document) => (
                <PostCard key={post.$id} post={post} />
              ))}
            </ul>
          ) : (
            <div>No saved posts found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Saved;