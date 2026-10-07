import './Label.less'

export default function Label(props) {
    return (
        <label className="label" htmlFor={props.htmlFor}>
            {props.content}
        </label>
    )
}
