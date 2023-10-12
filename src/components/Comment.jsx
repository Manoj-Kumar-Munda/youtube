import React, { useState } from "react";
import { getComment } from "../utils/helperFunction";

const Comment = ({ comment, isReply }) => {
  const [showReplies, setShowReplies] = useState(false);

  const commentItem = getComment(comment, isReply);

  return (
    <div className={`flex gap-2 ${isReply && "pl-4 border-l-0"}`}>
      <div className="shrink-0">
        <img
          src={commentItem?.authorProfileImageUrl}
          className="w-8 h-8 rounded-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="pt-1 font-semibold text-sm">{commentItem?.authorDisplayName}</h1>

        <p className="line-clamp-3 text-sm">{commentItem?.textOriginal}</p>

        {comment.replies && (
          <>
            <h2
              className={`${isReply && 'hidden'}  text-sm font-semibold cursor-pointer`}
              onClick={() => setShowReplies(!showReplies)}
            >
              {showReplies?'Hide replies':'Show replies'}
            </h2>
            { showReplies && comment.replies.comments.map((item) => {
              return <Comment key={item?.id} comment={item} isReply={true} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;
