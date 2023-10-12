import React, { useEffect, useState } from "react";
import Comment from "./Comment";

const CommentSection = ({ videoId }) => {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    getCommentsList();
  }, []);

  const getCommentsList = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&videoId=" +
        videoId +
        "&key=" +
        import.meta.env.VITE_API_KEY
    );
    const json = await data.json();
  
    setCommentsList(json?.items);
  };
  return (
    <div className="order-3 w-full flex flex-col basis-8/12 max-w-4xl flex-grow">
      <h1 className="font-bold mb-4 text-lg">Comments 20</h1>

      {commentsList.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex flex-col gap-2 px-2 sm:px-4 border py-2 sm:py-4 rounded-lg">
          {commentsList.map((item) => {
            return <Comment comment={item} key={item?.id} isReply={false} />;
          })}
        </div>
      )}
    </div>
  );
};

export default CommentSection;
