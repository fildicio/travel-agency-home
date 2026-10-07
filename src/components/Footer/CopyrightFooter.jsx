import Paragraph from "../Paragraph/Paragraph.jsx"

export default function CopyrightFooter(props) {

    var date = new Date;
    date = date.getFullYear()
    return (
        <>
            <hr />
            <div className="footer-copyright__wrapper">
              <Paragraph content={`© ${date} ${props.content}`} />
            </div>
        </>
    )
}
