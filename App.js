
const parent = React.createElement("div",{id : "parent"},
   [
     React.createElement("div",{id : "child1"},[
        React.createElement("h1",{},"I am h1 tag-c1"),
        React.createElement("h2",{},"I am h2 tag-c1")
    ]),
     React.createElement("div",{id : "child2"},[
        React.createElement("h1",{},"I am h1 tag-c2"),
        React.createElement("h2",{},"I am h2 tag-c2")
    ])
   ]
)



const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, World! from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([   parent, heading]);
