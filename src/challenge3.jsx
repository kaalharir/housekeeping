import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"))

function Page () {
    return (
        <ol>
            <li>Kaal</li>
            <li>Kasmaal</li>
            <li>Fardooso</li>
            <li>Kaah</li>
            <li>Sahansaho</li>
        </ol>
    )
}
root.render (
    <Page />
)