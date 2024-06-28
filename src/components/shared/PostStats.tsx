import React, { useState, useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";
import { useDeleteSavedPost, useLikePost, useSavePost } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite"
import { checkIsLiked } from "@/lib/utils";

type PostStatsProps = {
  post: Models.Document;
  userId: string;
}

const PostStats = ({ post, userId } : PostStatsProps) => {
  const likesList = post.likes.map((user: Models.Document) => user.$id)

  const [likes, setLikes] = useState(likesList)
  const [isSaved, setIsSaved] = useState(false)

  const { mutate: likePost } = useLikePost();
  const { mutate: savePost } = useSavePost();
  const { mutate: deletePost } = useDeleteSavedPost();

  const { data: currentUser } = useUserContext();

  const handleLikePost = (e: React.MouseEvent) => {
    e.stopPropagation();

    let newLikes = [...likes];

    const hasLiked = newLikes.includes(userId)

    if(hasLiked) {
      newLikes = newLikes.filter((id) => id !== userId)
    } else {
      newLikes.push(userId);  
    }

    setLikes(newLikes);
    likePost({ postId: post.$id, likesArray: newLikes })
  }

  const handleSavePost = () => {}

  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">
        <img 
        src={checkIsLiked(likes,userId) 
          ? "/assets/icons/liked.svg"
          : "/assets/icons/like.svg"
        }
        alt="like"
        width={20}
        height={20}
        onClick={handleLikePost}
        className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">{likes.length}</p>
      </div>

      <div className="flex gap-2">
        <img 
        src={isSaved
        ? "/assets/icons/saved.svg"
        : "/assets/icons/save.svg"
        }
        alt="like"
        width={20}
        height={20}
        onClick={handleSavePost}
        className="cursor-pointer"
        />
      </div>
    </div>
  )
}

export default PostStats