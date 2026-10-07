import './InputField.less'

export default function InputField(props) {
    return (
        <input
            type={props.type ?? "text"}
            id={props.id}
            name={props.name}
            className="input__field"
            placeholder={props.placeholder}
        />
    )
}
