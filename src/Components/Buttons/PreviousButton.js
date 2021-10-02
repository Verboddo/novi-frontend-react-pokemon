import './Buttons.css'

function PreviousButton({children, setOffSet, offSet}) {

    function handleClick() {
        offSet -= 20
        setOffSet(offSet)
    }

    return (
        <button
            className="button"
            type='click'
            onClick={handleClick}
            disabled={!offSet}
        >
            {children}</button>
    )
}

export default PreviousButton