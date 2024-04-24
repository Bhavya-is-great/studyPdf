"use client";
import { useRef } from "react";
import Link from "next/link";

export default function Navbar() {

    const checkRef = useRef(null);
    const checkRef2 = useRef(null);

    const handleChange = () => {
        if (checkRef.current.checked) {
            checkRef2.current.checked = true;
        } else {
            checkRef2.current.checked = false;
        }
    }

    const handleChange2 = () => {
        if (checkRef2.current.checked) {
            checkRef.current.checked = true;
        } else {
            checkRef.current.checked = false;
        }
    }

    return (
        <header>
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" async />
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" async />
            <input onClick={handleChange} ref={checkRef} type="checkbox" name="nav-check" className="hidden" id="nav-check" />
            <label className="nav-label size-label" htmlFor="nav-check">
                <ion-icon name="menu-outline"></ion-icon>
            </label>
            <div className="nav-logo">
                <Link href="/"><img src="/logo2.jpg" className="logo" alt="Logo" />StudyPdf</Link>
            </div>
            <ul className="nav-links">
                <input type="checkbox" ref={checkRef2} onClick={handleChange2} name="nav-check2" className="hidden" id="nav-check2" />
                <label className="size-label ml-auto" htmlFor="nav-check2">
                    <ion-icon name="close-outline"></ion-icon>
                </label>
                <li><Link href="/"><ion-icon name="home-outline"></ion-icon> Home</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Services</Link></li>
                <li><Link href="/">Contact</Link></li>
            </ul>
        </header>
    );
}
