import './Button.less'

export default function Button(props) {
    const variant = props.variant ?? "filled"

    return (
        <button
            className={`button button--${variant} ${props.className ?? ''}`}
            type={props.type ?? "button"}
            id={props.id}
        >
            {props.label}
        </button>
    )
}
