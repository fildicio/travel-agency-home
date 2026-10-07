import './Heading.less'

export default function Heading (props) {

    const level = props.level ?? 2
    const Tag = `h${level}`
    const variant = props.variant ?? "default"

    return <Tag className={`text-h text-h--${variant}`}>{props.content}</Tag>
}

