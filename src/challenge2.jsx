/*
Challenge: Starting from scratch, build and rende the HTML for our section project.
Check the Google slide for what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
access it by using src='react-logo.png' in your image element
* You can also set the 'width' attribute of the image element
just like in HTML. In the slide, I have it set to 40px
*/

import { createRoot } from "react-dom/client";
import kaalImage from "./assets/kaal.jpg"; // Importing the image

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <img src={kaalImage} alt="Trying React" width="40px" />
    <h1>Fun facts about Kaal!</h1>
    <ul>
        <li>He is hardworking</li>
        <li>He is lazy too</li>
        <li>He works his work everyday</li>
        <li>He is supportive guy</li>
        <li>He loves to have family and be father oneday</li>
        <li>Powers thousands of enterprise apps, including mobile apps and desktop apps</li>
    </ul>
  </div>
);

