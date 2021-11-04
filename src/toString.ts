import React, { createElement } from "react";
import ReactDOMServer from "react-dom/server";
import { Simple, Props } from "./fixtures";

const Comps = [
  createElement(Simple),
  createElement(Props, { name: "kazu", age: 20 }),
];
const htmls = Comps.map((c) => ReactDOMServer.renderToStaticMarkup(c));

console.log(htmls);
