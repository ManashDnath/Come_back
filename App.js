//1st Step

// const heading = React.createElement("h1", {}, "herver");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//2nd Step

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am the youngest child")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//3rd step

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { class: "xerox" }, "I am the youngest child"),
    React.createElement("h1", { class: "xerox" }, "I am the Strongest child"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
