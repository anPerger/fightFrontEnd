
export default function Navbar() {

    return (
    <nav className="nav">
        <h1>
            <a href="/">My Navbar</a>
        </h1>
        <ul className="nav-links">
            <li>
                <a href="/fighters">Fighters</a>
            </li>          
            <li>
                <a href="/events">Events</a>
            </li>
            <li>
                <a href="/model-picks">Model Picks</a>
            </li>
        </ul>
    
    </nav>
    )
}