import { Button } from "@/components/shared/ReuseAble/button";
import { Heart } from "lucide-react";
import React, { useRef, useState } from "react";

interface Comment {
  id: number;
  author: string;
  content: string;
  likes: number;
  liked: boolean;
  replies?: Comment[];
}

const commentsData: Comment[] = [
  {
    id: 1,
    author: "Evanmodriv",
    content: "Sorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 100,
    liked: false,
    replies: [
      {
        id: 2,
        author: "Adebayo",
        content: "Sorem ipsum dolor sit amet, consectetur adipiscing elit.",
        likes: 100,
        liked: false,
      },
    ],
  },
  {
    id: 3,
    author: "Adekoya",
    content: "Sorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 100,
    liked: false,
  },
  {
    id: 4,
    author: "Adekoya",
    content: "Sorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 100,
    liked: false,
  },
  {
    id: 5,
    author: "Adekoya",
    content: "Sorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 100,
    liked: false,
  },

  // Add more comments as needed
];

const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState(commentsData);
  const [commentInput, setCommentInput] = useState("");
  const commentInputRef = useRef<HTMLInputElement>(null);

  const handleReplyClick = (author: string) => {
    setCommentInput(`@${author} `);
    if (commentInputRef.current) {
      commentInputRef.current.focus();
    }
  };

  const toggleLike = (id: number) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
            liked: !comment.liked,
          };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: comment.replies.map((reply) => {
              if (reply.id === id) {
                return {
                  ...reply,
                  likes: reply.liked ? reply.likes - 1 : reply.likes + 1,
                  liked: !reply.liked,
                };
              }
              return reply;
            }),
          };
        }
        return comment;
      })
    );
  };

  return (
    <div className="bg-white py-6 px-3">
      <h2 className="text-2xl font-medium mb-9 text-center">Comments</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b pb-4">
            <div className="flex items-start space-x-2 flex-wrap">
              <div className="flex gap-2 items-start flex-1">
                <img
                  src={`https://i.pravatar.cc/40?u=${comment.id}`}
                  alt={comment.author}
                  className="w-10 h-10 rounded-full"
                />
                <div className="w-full md:w-[98%]">
                  <div className="">
                    <div className=" flex gap-2">
                      <h3 className="font-semibold">{comment.author}</h3>
                      <p className="text-gray-500">3h</p>
                    </div>
                    <p>{comment.content}</p>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => handleReplyClick(comment.author)}
                      className="text-gray-500"
                    >
                      Reply
                    </button>
                  </div>
                  {comment.replies && (
                    <div className="mt-4 space-y-4">
                      {comment.replies.map((reply) => (
                        <div
                          key={reply.id}
                          className="flex items-start space-x-4"
                        >
                          <img
                            src={`https://i.pravatar.cc/40?u=${reply.id}`}
                            alt={reply.author}
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex gap-2">
                              <h3 className="font-semibold">{reply.author}</h3>
                              <p className="text-gray-500">3h</p>
                            </div>
                            <p>{reply.content}</p>
                            <div className="flex w-full justify-between items-center space-x-2 mt-2">
                              <button
                                onClick={() => handleReplyClick(reply.author)}
                                className="text-gray-500"
                              >
                                Reply
                              </button>
                              <button
                                onClick={() => toggleLike(reply.id)}
                                className="flex flex-col justify-center items-center space-x-1 text-gray-500"
                              >
                                {reply.liked ? (
                                  <Heart size={19} className="" />
                                ) : (
                                  <Heart size={19} className="text-red-600" />
                                )}
                                <span>{reply.likes}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                      <button>View more replies</button>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <button
                  onClick={() => toggleLike(comment.id)}
                  className="flex items-center flex-col justify-center space-x-1 text-gray-500"
                >
                  {comment.liked ? (
                    <Heart size={19} className="text-red-600" />
                  ) : (
                    <Heart size={19} className="" />
                  )}
                  <span>{comment.likes}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2">
        <img
          src={`https://i.pravatar.cc/40?u=2`}
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="Add a Comment"
          className="w-full py-3 px-4 rounded-full border border-[rgba(0,0,0,0.3)] outline-none"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          ref={commentInputRef}
        />
        <Button variant={"secondary"} className="rounded-xl bg-[#1D98F0]">
          Enter
        </Button>
      </div>
    </div>
  );
};

export default CommentsSection;
