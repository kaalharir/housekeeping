// import { createElement } from "react";
// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("root"));

// root.render(
//   // <img src="/kaal.jpg" alt="react-logo" />
//   <img src="./assets/kaal.jpg" alt="picture" />
//   // <h1>This is another elment</h1>
// );
// createElement()
import { createRoot } from "react-dom/client";
import reactLogo from "./assets/kaal.jpg"; // Adjust the path as needed

const root = createRoot(document.getElementById("root"));

root.render(
  <img src={reactLogo} alt="react-logo" />
  // <img src="./assets/kaal.jpg" alt="missing" />
  // <h1>This is another element</h1>
);
