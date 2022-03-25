import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import DirectChat from "./DirectChat";

export default function Chat() {
  return (
    <>
    <HeaderAdmin activePage="Chat" />
      <DirectChat/>
    </>
  );
}