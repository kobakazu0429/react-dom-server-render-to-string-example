import React from "react";
import type { VFC } from "react";

export const Simple: VFC = () => <h1>hello</h1>;

export const Props: VFC<{ name: string; age: number }> = ({ name, age }) => (
  <span>
    {name}, {age}
  </span>
);
