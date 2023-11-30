import "./Jumbotron.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Jumbotron = ({ isBtn }) => {
    let bottone;

    console.log(isBtn);
    if (isBtn) {
        bottone = (
            <button>
                Read More <FaArrowRight />
            </button>
        );
    }
    return (
        <>
            <div id="mainContainer">
                <section id="mainImgContainer">
                    <img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                        alt="food"
                    />
                </section>
                <section id="mainContentContainer">
                    <div id="textContainer">
                        <h4>FEATURED POSTS</h4>
                        <h2>I am A Blogger & I Love Foods</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sit, doloribus.
                        </p>
                    </div>
                    {bottone}
                    <div>
                        <button>
                            <FaArrowLeft /> Forward
                        </button>
                        <button>
                            Next <FaArrowRight />
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Jumbotron;
