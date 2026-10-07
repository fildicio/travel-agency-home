import Heading from "../Headings/Heading.jsx"
import Paragraph from "../Paragraph/Paragraph.jsx"
import InputField from "../InputField/InputField.jsx"
import Button from "../Buttons/Button.jsx"
import Label from "../Label/Label.jsx"
import { subscribe } from '../../content.js'

export default function SubscribeItem() {
    return (
        <div className="subgrid__wrapper">
            <Heading content={subscribe.heading} />
            <div className="footer__content">
                <Paragraph content={subscribe.text} />
                <form className="input-filed__wrapper">
                    <Label htmlFor={subscribe.input.id} content={subscribe.input.label} />
                    <InputField
                        type={subscribe.input.type}
                        id={subscribe.input.id}
                        name={subscribe.input.name}
                        placeholder={subscribe.input.placeholder}
                    />
                    <Button
                        variant="outline"
                        type={subscribe.button.type}
                        id={subscribe.button.id}
                        label={subscribe.button.label}
                    />
                </form>
            </div>
        </div>
    )
}
