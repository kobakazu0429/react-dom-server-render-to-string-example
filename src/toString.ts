import React, { createElement } from "react";
import ReactDOMServer from "react-dom/server";
import {
  Simple,
  Props,
  Lists,
  Hooks,
  Context,
  Head,
  ParentHead,
  helmetContext1,
  helmetContext2,
} from "./fixtures";

const Comps = [
  createElement(Simple),
  createElement(Props, { name: "kazu", age: 20 }),
  createElement(Lists, { items: ["apple", "banana"] }),
  createElement(Hooks),
  createElement(Context),
  createElement(Head),
  createElement(ParentHead),
];
const htmls = Comps.map((c) => ReactDOMServer.renderToStaticMarkup(c));

console.log(htmls);

console.log(
  Object.keys(helmetContext1.helmet)
    .map((k) => helmetContext1.helmet[k].toString())
    .filter(Boolean)
);
console.log(
  Object.keys(helmetContext2.helmet)
    .map((k) => helmetContext2.helmet[k].toString())
    .filter(Boolean)
);
