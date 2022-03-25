import React from "react";
import DirectChat from "./DirectChat";
import HeaderRelative from "./HeaderRelative";

export default function Chat() {
  return (
    <>
      <HeaderRelative activePage="Relativechat" />
      <DirectChat/>
    </>
  );
}