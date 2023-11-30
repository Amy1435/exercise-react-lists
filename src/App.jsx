import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";

const navLinks = [
    {
        name: "Home",
        url: "/home",
    },
    {
        name: "About",
        url: "/about",
    },
    {
        name: "Foods",
        url: "/foods",
    },
    {
        name: "Lifestyle",
        url: "/lifestyle",
    },
    {
        name: "Contact",
        url: "/contact",
    },
];

function App() {
    return (
        <>
            <Navbar navLinks={navLinks} />
            <Jumbotron isBtn={true} />
        </>
    );
}

export default App;
