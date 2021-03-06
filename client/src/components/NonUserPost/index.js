import React from "react";
import "./style.css";

function NonUserPost(props) {
  const { singlePost, upload } = props;
  const {
    amount,
    description,
    location,
    title,
    worktype,
    contact,
  } = singlePost;
  return (
    <div>
      <h1 id="post-ttl">{title}</h1>
      <div id="upload-div">
        <img id="post-upload" src={upload} alt="post" />
      </div>
      <div id="post-worktype">
        <label htmlFor="worktype-text">Work Type</label>
        <p id="worktype-text">{worktype}</p>
      </div>
      <div id="description-container">
        <label htmlFor="post-description">Description</label>
        <div id="post-description">
          <p>{description}</p>
        </div>
      </div>
      <div id="post-loc-amount">
        <div>
          <label htmlFor="post-loc">Location</label>
          <div id="post-loc">
            <p>{location}</p>
          </div>
        </div>
        <div>
          <label htmlFor="post-contact">Contact Info</label>
          <div id="post-contact">
            <p>{contact}</p>
          </div>
        </div>
        <div>
          <label htmlFor="post-amnt">Amount</label>
          <div id="post-amnt">
            <p>{amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NonUserPost;
