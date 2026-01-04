import React from "react";
import ReactDOM from "react-dom/client";
// const parent = React.createElement("div",{id : "parent"},
//    [
//      React.createElement("div",{id : "child1"},[
//         React.createElement("h1",{},"This is REACT App -h1 tag-c1"),
//         React.createElement("h2",{},"I am h2 tag-c1")
//     ]),
//      React.createElement("div",{id : "child2"},[
//         React.createElement("h1",{},"I am h1 tag-c2"),
//         React.createElement("h2",{},"I am h2 tag-c2")
//     ])
//    ]
// )

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello, World! from React"
// );

// const jsxHeading = (
//   <>
//     <h1 id="heading" className="heading">
//       Hello from React
//     </h1>
//     <h2> Hello from React -h2 tag </h2>
//   </>
// );

const Component1 = () => (
  <h1> I am Component 1 </h1>
);

const Component2 = () => (
  <div>
    <Component1 />
    <h1> I am Component 2 </h1>
  </div>
);

const Heading = () => {
  return (
    <>
      <h1 id="heading" className="heading">
        Hello from React - arrow function
      </h1>
      <h2> Hello from React - arrow function -h2 tag </h2>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component2 />);
