import { createRoot } from "react-dom/client";
import { Fragment } from "react"
const root = createRoot(document.getElementById("root"))
import Header from "./header"
import MainContent from "./MainContent";
import Footer from "./Footer";

function Page() {
    return (
        // <div>
        <Fragment>
            <Header />
            <MainContent />
            <Footer />
        </Fragment>
        
    )
}
root.render(
    <Page />
)