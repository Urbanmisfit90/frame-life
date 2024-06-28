import { Models } from "appwrite";
import { Link } from "react-router-dom";

type PostCardProps = {
  post: Models.Document;
};

const PostCard = ({ post }: PostCardProps) => {
  console.log(post);
  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap">
          <Link to={`/profile/${post.creator.$id}`}>
            <img
              src={post?.creator?.imageUrl || "/assets/icons/profile.svg"}
              alt="creator"
              className="rounded-full w-12 lg:h-12"
            />
          </Link>

          <div>
            <img
              src={post?.imageUrl || "/assets/icons/profile.svg"}
              alt="creator"
              className="rounded-full w-12 lg:h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
