import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"))

root.render(
    // temporaryName()
    <TemporaryName />
)
function TemporaryName () {
    return (
    <main>
    <img src="src/assets/kaal.jpg" alt="pict" width={40}/>
    <h1>Fun facts about Kaal!</h1>
    <ul>
        <li>He is hardworking</li>
        <li>He is lazy too</li>
        <li>He works his work everyday</li>
        <li>He is supportive guy</li>
        <li>He loves to have family and be father oneday</li>
        <li>Powers thousands of enterprise apps, including mobile apps and desktop apps</li>
    </ul>
    </main>
    )
}