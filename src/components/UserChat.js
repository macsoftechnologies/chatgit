import React from "react";
import { useParams } from "react-router-dom";

function UserChat() {
  const params = useParams();
  return <div>UserChat - {params.id}</div>;
}

export default UserChat;
