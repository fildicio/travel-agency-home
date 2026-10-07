import './LinkList.less'

export default function LinkList(props) {
    const variant = props.variant ?? "vertical"

    return (
        <ul className={`link__list link__list--${variant} ${props.className ?? ''}`} id={props.id}>
            {props.items.map((item) => (
                <li key={item.url}>
                    <a onClick={props.onClick} className="link__item" href={item.url}>{item.text}</a>
                </li>
            ))}
        </ul>
    )
}
