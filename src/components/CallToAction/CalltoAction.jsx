import './CalltoAction.less'
import Heading from "../Headings/Heading.jsx"
import Paragraph from "../Paragraph/Paragraph.jsx"
import Button from "../Buttons/Button.jsx"
import { cta } from '../../content.js'

export default function CalltoAction() {
    return (
        <div className="cta-content__container">
        <section className="cta__wrapper">
            <div className="cta-content__wrapper">
                <div className="cta__icon">
                    <img src={cta.icon.src} alt={cta.icon.alt} width="28" height="28" />
                </div>
                <div>
                    <Heading level={2} variant="large" content={cta.heading} />
                    <Paragraph variant="dark" content={cta.text} />
                </div>
            </div>
            <div className="body-button__wrapper">
                <Button className="normal__button" label={cta.button.text} />
                <a href={cta.link.url} className="list-body__link">
                    {cta.link.text} <span aria-hidden="true">→</span>
                </a>
            </div>
        </section>
        </div>
    )
}
