import Brand from "../Brand/Brand.jsx"
import { footerBrand, socialLinks } from '../../content.js'
import Paragraph from "../Paragraph/Paragraph.jsx"
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon.jsx"

export default function FooterBrand() {
    return <div className="subgrid__wrapper">
        <Brand src={footerBrand.imgURL} alt={footerBrand.alt} heading={footerBrand.heading} />
        <div className="footer__content">
            <Paragraph content={footerBrand.text} />
            <ul className="social__list">
            {socialLinks.map((createdLink, index) => (
                <SocialMediaIcon
                    key={index} 
                    href={createdLink.href}
                    ariaLabel={createdLink.ariaLabel}
                    src={createdLink.src}
                    alt={createdLink.alt}
                />
            ))}
            </ul>
        </div>
    </div>
}