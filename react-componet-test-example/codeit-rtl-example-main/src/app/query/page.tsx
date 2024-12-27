import { NextPage } from "next";
import { useState } from "react";

const Query: NextPage = () => {
  // ul: role default -> list
  return (
    <ul>
      <li>{"Read"}</li>
      <li>{"Blue"}</li>
      <li>{"Green"}</li>
    </ul>
  );
};

export default Query;

export const noEmptyString = (str: string) => {
  if (str === "") {
    throw new Error("No empty string");
  }
  return str;
};
