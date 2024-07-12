import { useGetSavePosts } from '@/lib/react-query/queriesAndMutations'
import React from 'react'

const Saved = () => {
  const { data: posts, isLoading, error } = useGetSavePosts()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading saved posts</div>
  }

  return (
    <div>
      <h1>Saved Posts</h1>
      {posts && posts.documents.length > 0 ? (
        posts.documents.map((post) => (
          <div key={post.$id}>
            <h2>{post.caption}</h2>
            <img src={post.imageUrl} alt={post.caption} />
            <p>{post.location}</p>
            <p>{post.tags.join(', ')}</p>
          </div>
        ))
      ) : (
        <div>No saved posts found.</div>
      )}
    </div>
  )
}

export default Saved