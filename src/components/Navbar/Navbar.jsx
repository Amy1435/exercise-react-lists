import "./Navbar.css";

const Navbar = ({ navLinks }) => {
    const links = navLinks.map((elemento, i) => {
        return (
            <li key={i}>
                <a href={elemento.url}>{elemento.name}</a>
            </li>
        );
    });

    return (
        <nav>
            <h1>Logo</h1>
            <menu>{links}</menu>
        </nav>
    );
};

export default Navbar;
