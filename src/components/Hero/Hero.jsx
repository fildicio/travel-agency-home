import './Hero.less'
import Heading from "../Headings/Heading.jsx"
import Paragraph from "../Paragraph/Paragraph.jsx"
import { hero } from '../../content.js'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__wrapper">
                <Heading level={1} variant="large" content={hero.heading} />
                <Paragraph variant="dark" content={hero.text} />
            </div>
        </section>
    )
}
