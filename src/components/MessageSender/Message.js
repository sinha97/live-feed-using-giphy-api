import React, { useState } from "react";
import "./Message.css";
import { Avatar, Input } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import axios from "axios";

const MessageSender = ({ setCustomDB, customDB }) => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [gifValue, setGifValue] = useState();

  let APIKEY = "FH3h6b7Rrd9nOkM05QA1IH1W0kGU3pT9";
  const searchGifs = async (e) => {
    const inputValue = e.target.value;
    setImageUrl(e.target.value);
    const { data } = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=${inputValue}`
    );
    setGifValue(data.data[0].images.downsized.url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ArrayPayload = [...customDB];

    ArrayPayload.push({
      message: input,
      image: gifValue,
    });
    setCustomDB(ArrayPayload);
    setImageUrl("");
    setInput("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="" />
        <form>
          <input
            value={input}
            className="messageSender__input"
            placeholder="What's on your mind?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            value={imageUrl}
            placeholder="search for gifs"
            onChange={searchGifs}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
