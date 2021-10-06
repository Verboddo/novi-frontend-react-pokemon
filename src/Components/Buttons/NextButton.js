import './Buttons.css'

function NextButton({name, onClick, disabled}) {

    return (
            <button
                className="button"
                type='button'
                onClick={onClick}
                disabled={disabled}
            >
                {name}</button>
    )
}

export default NextButton