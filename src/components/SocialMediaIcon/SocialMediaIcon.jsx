import './SocialMediaIcon.less'

export default function SocialMediaIcon(props) {
    return<li> <a href={props.href} aria-label={props.ariaLabel}><img src={props.src} alt={props.alt}
        className="social__logo" aria-hidden="true"/></a>
        </li>
}