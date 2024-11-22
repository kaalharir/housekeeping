import { createRoot } from "react-dom/client";
import { Fragment } from "react"
const root = createRoot(document.getElementById("root"))
import Header from "./header"
import MainContent from "./MainContent";
import Footer from "./Footer";
// const root = createRoot(document.getElementById("root"))

/** Mini Challenge:
 * 
 * Move the 'header' element from the Page component into
 * its own component called "Header"
 * 
 * Then render an instance of the Header component inside
 * the Page component where the 'header' used to be. 
 * @returns 
 */



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