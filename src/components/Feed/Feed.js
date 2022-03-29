import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "../MessageSender/Message";
import Post from "../Post/Post";

const Feed = () => {
  const [postsData, setPostsData] = useState([]);
  const [customDB, setCustomDB] = useState([]);

  useEffect(() => {
    const upcomingData = [];
    customDB.map((data, index) => {
      upcomingData.push(data);
    });
    setPostsData(upcomingData);
  }, [customDB]);
  return (
    <div className="feed">
      <MessageSender setCustomDB={setCustomDB} customDB={customDB} />

      {postsData &&
        postsData.map((entry) => (
          <Post message={entry.message} image={entry.image} />
        ))}
    </div>
  );
};

export default Feed;
