// import React from "react";
// import ReactDOM from "react-dom";

// // what is jsx expression
// // jsx exprewsion is the misxture of operands and operators
// // {} this is the sign of the jsx expression
// // why we use the rect module ?
// // react module is use to support the jsx
// // why we use react-dom?
// // react dom is use to deal witht he doument object model
// // what is the template literals?
// // in es6 template literals are use to join the different strings and value here is the syntax of using the literals `${}`

// var fname = "Ahmad";
// var lname = "Abdulllah";

// ReactDOM.render(
//   <>
//     <h1>My App</h1>
//     <h2>{`my full name is ${fname} ${lname}`}</h2>

//     <h3>here we use he jsx expression {Math.random()}</h3>
//     <p>Here is my first react app.</p>
//     <ol>
//       <li>Money Heist</li>
//       <li>Money Gram</li>
//       <li>Money lanundering</li>
//       <li>Money folk</li>
//       <li>Money wrap</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );

// react challenge

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// import "./App.css";
// var curDate = new Date().toLocaleDateString();
// var curTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>
//     <h1 className="head">My name is Inzamam</h1>
//     <App />
//     <p>Current date is = {curDate}</p>
//     <p>Current Time is S= {curTime}</p>
//   </>,
//   document.getElementById("root")
// );

// what is inline css or internal css
// in the jsx we use the internal css in jsx as a object

// import React from "react";
// import ReactDOM from "react-dom";
// const styl = {
//   color: "red",
//   margin: "10px",
//   fontFamily: "fantasy",
//   textAlign: "center",
// };

// ReactDOM.render(
//   <>
//     <h1 contentEditable="true" style={styl}>
//       my Name is Inzamma
//     </h1>
//     <p>Alhumdulillah i am a muslim .</p>
//   </>,
//   document.getElementById("root")
// );
// here we use the inline css which by pasiing the object as a value

// react challenge by using the component
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./App.css";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
