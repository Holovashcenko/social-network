import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let state = {
  postData: [
    { id: 1, message: "Hi! How are you?", counterLikes: 23 },
    { id: 2, message: "It's my first post!", counterLikes: 0 },
  ],
  dialogsData: [
    { id: 1, name: "Vlad" },
    { id: 2, name: "Alla" },
    { id: 3, name: "Anyta" },
    { id: 4, name: "Archy" },
  ],
  messagesData: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "AnytFine. Thanks! And you?a" },
    { id: 4, message: "I'm fine, too. Thank you!" },
    { id: 5, message: "I'm fine, too. Thank you!" },
    { id: 6, message: "I'm fine, too. Thank you!" },
    { id: 7, message: "I'm fine, too. Thank you!" },
    { id: 8, message: "I'm fine, too. Thank you!" },
    { id: 9, message: "I'm fine, too. Thank you!" },
    { id: 10, message: "I'm fine, too. Thank you!" },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
