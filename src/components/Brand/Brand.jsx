import './Brand.less'
import Heading from "../Headings/Heading.jsx"

export default function Brand (props) {
    return (<div className="brand__title">
    <img className="brand__logo" src={props.src} alt={props.alt} aria-hidden="true" level={2}/>
    <Heading content={props.heading} />
    </div>)
}