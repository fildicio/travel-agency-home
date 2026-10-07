import './Footer.less';
import FooterBrand from "./FooterBrand.jsx"
import FooterItem from "./FooterItem.jsx"
import SubscribeItem from "./SubscribeItem.jsx"
import CopyrightFooter from "./CopyrightFooter.jsx"
import { footerColumns, copyright } from '../../content.js'


export default function Footer() {
    return (
        <footer className="content__box">
            <div className="footer__container">
                <div className="footer__wrapper">
                    <FooterBrand />
                    {footerColumns.map((column) => (
                        <FooterItem
                            key={column.heading}
                            heading={column.heading}
                            links={column.links}
                        />
                    ))}
                    <SubscribeItem />
                </div>
                <CopyrightFooter content={copyright} />
            </div>
        </footer>
    )
}