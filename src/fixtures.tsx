import React, { useState, useEffect, useContext, createContext } from "react";
import type { VFC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Simple: VFC = () => <h1>hello</h1>;

export const Props: VFC<{ name: string; age: number }> = ({ name, age }) => (
  <span>
    {name}, {age}
  </span>
);

const List: VFC<{ item: string }> = ({ item }) => <li>{item}</li>;

export const Lists: VFC<{ items: string[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((i) => (
        <List item={i} key={i} />
      ))}
    </ul>
  );
};

export const Hooks: VFC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(10);
  }, []);

  // useLayoutEffect(() => {
  //   setCount(100);
  // }, []);

  return <span>{count}</span>;
};

const ctx = createContext<{ count: number; setCount: (v: number) => void }>(
  {} as any
);

const Child: VFC = () => {
  const { count, setCount } = useContext(ctx);
  setCount(1000);

  return <span>{count}</span>;
};

export const Context: VFC = () => {
  const [count, setCount] = useState(100);

  return (
    <ctx.Provider value={{ count, setCount }}>
      <Child />
    </ctx.Provider>
  );
};

export const helmetContext1: any = {};

export const Head: VFC = () => {
  return (
    <HelmetProvider context={helmetContext1}>
      <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1>Hello World</h1>
    </HelmetProvider>
  );
};

const ChildHead: VFC = () => {
  return (
    <div>
      <Helmet>
        <title>Child</title>
      </Helmet>
      <h2>child</h2>
    </div>
  );
};

export const helmetContext2: any = {};
export const ParentHead: VFC = () => {
  return (
    <HelmetProvider context={helmetContext2}>
      <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1>Hello World</h1>
      <ChildHead />
    </HelmetProvider>
  );
};
