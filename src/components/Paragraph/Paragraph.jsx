
import './Paragraph.less'
export default function Paragraph (props) {
    const variant = props.variant ?? "text-h"
return <p className={`text-p text-p--${variant}`}>{props.content}</p>
}