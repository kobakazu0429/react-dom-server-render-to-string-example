import React, { createElement } from "react";
import ReactDOMServer from "react-dom/server";
import { Simple, Props, Lists } from "./fixtures";

const Comps = [
  createElement(Simple),
  createElement(Props, { name: "kazu", age: 20 }),
  createElement(Lists, { items: ["apple", "banana"] }),
];
const htmls = Comps.map((c) => ReactDOMServer.renderToStaticMarkup(c));

console.log(htmls);
