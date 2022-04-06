
export default function Navbar() {

    return (
    <nav className="nav">
        <h1>
            <a href="/">Home</a>
        </h1>
        <ul className="nav-links">
            <li>
                <a href="/#/fighters">Fighters</a>
            </li>          
            <li>
                <a href="/#/fights">Fights</a>
            </li>
            <li>
                <a href="/#/picks">Model Picks</a>
            </li>
        </ul>
    
    </nav>
    )
}