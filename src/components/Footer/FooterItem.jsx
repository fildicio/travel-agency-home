import './Footer.less';
import Heading from "../Headings/Heading.jsx"
import LinkList from "../LinkList/LinkList.jsx"

export default function FooterItem(props) {
    return (
        <div className="subgrid__wrapper">
            <Heading level={4} variant="small" content={props.heading} />
            <div className="footer__content">
                <LinkList items={props.links} />
            </div>
        </div>
    )
}
