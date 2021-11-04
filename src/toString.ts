import React from "react";
import ReactDOMServer from "react-dom/server";
import { Simple } from "./fixtures";

const SimpleComp = React.createElement(Simple);
const html = ReactDOMServer.renderToStaticMarkup(SimpleComp);

console.log(html);
