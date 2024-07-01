import React from 'react'
import '../Static/CSS/Style.css'
import { Link } from "react-router-dom";
export default function Footer() {
    // let footer={
    //     position:"relative",
    //     top: "50vh",
    //     width:"100%",
    // }
    return (
        <>
                <footer className="expand bg-body-secondary py-3 mt-4" id="footer">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-2 text-light">
                        <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                        <li className="nav-item"><Link to="/blogs" className="nav-link px-2 text-body-secondary">Blogs</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-body-secondary">Contact</Link></li>
                    </ul>
                    <p className="text-center text-body-secondary">© 2023 CodeZilla, Inc</p>
                </footer>
        </>
    )
}
