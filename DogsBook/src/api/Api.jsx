import React from "react";
import "../App.css";
import UserPost from './endpoint/UserPost'
import TokenPost from './endpoint/TokenPost'
import PhotoPost from './endpoint/PhotoPost'
import PhotoGet from "./endpoint/PhotoGet";

function Api() {
  return (
    <div>
      <h2>UserPost</h2>
      <UserPost></UserPost>
      <h2>TokenPost</h2>
      <TokenPost></TokenPost>
      <h2>PhotoPost</h2>
      <PhotoPost></PhotoPost>
      <h2>PhotoGet</h2>
      <PhotoGet></PhotoGet>
    </div>
  );
}

export default Api;
