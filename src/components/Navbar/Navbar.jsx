import { useState, useRef, useEffect } from "react"
import './Navbar.less'
import Brand from "../Brand/Brand.jsx"
import LinkList from "../LinkList/LinkList.jsx"
import Button from "../Buttons/Button.jsx"
import { navbar, navLinks, footerBrand } from '../../content.js'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        if (!isOpen) return

        function handleClickOutside(e) {
            if (!navRef.current.contains(e.target)) setIsOpen(false)
        }

        document.addEventListener("click", handleClickOutside)
        return () => document.removeEventListener("click", handleClickOutside)
    }, [isOpen])

    return (
        <header className="navbar__container">
            <div className="navbar__wrapper" ref={navRef} onKeyDown={(e)=> e.key=== "Escape"&& setIsOpen(false)}>
                <Brand src={footerBrand.imgURL} alt={footerBrand.alt} heading={navbar.heading} />
                <button
                    type="button"
                    className="navbar__toggle"
                    id={navbar.toggle.id}
                    aria-label={navbar.toggle.ariaLabel}
                    aria-controls={navbar.linksId}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(prev => !prev)}
                    
                >
                    <svg viewBox="0 0 640 640" width="24" height="24" aria-hidden="true">
                        <path fill="currentColor" d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
                    </svg>
                </button>
                <nav aria-label="Main">
                    <LinkList
                        items={navLinks}
                        variant="horizontal"
                        className={`navbar-links__wrapper ${isOpen ? "open" : ""}`}
                        id={navbar.linksId}
                        onClick={()=> setIsOpen(false)}
                    />
                </nav>
                <Button
                    variant="outline"
                    className="outlined-navbar__button"
                    type={navbar.button.type}
                    id={navbar.button.id}
                    label={navbar.button.label}
                />
            </div>
        </header>
    )
}
