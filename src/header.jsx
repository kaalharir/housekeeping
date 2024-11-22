export default  function Header() {
    return (
        <header className="header">
            {/* <img src="src/assets/kaal.jpg" alt="place" width={40} /> */}
            <img src="src/assets/kaal.jpg" alt="picture" className="nav-logo " />
        <nav>
            <ul className="nav-list">
                <li className="nav-list-item">Pricing</li>
                <li className="nav-list-item">About</li>
                <li className="nav-list-item">Contact</li>
            </ul>
        </nav>
        </header>
    );
}