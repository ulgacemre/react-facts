import Image from "next/image";
import Logo from "../../public/logo.png";
import "./Navbar.css";

export default function Navbar() {
    return(
        <>
         <nav>
            <div className="logo-text">
                <Image src={Logo} alt="React Facts" />
                <h2 className="title">ReactFacts</h2>
            </div>
            <h3>React Course - Project 1</h3>
         </nav>
        </>
    )

}