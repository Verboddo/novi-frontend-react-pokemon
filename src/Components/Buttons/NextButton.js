import './Buttons.css'

function NextButton({children, setOffSet, offSet}) {
    function handleClick() {
        offSet += 20
        setOffSet(offSet)
    }

    return (
        <button
            className="button"
            type='click'
            onClick={handleClick}
            // Nu heb ik disabled omdat ik het eind nummer weet, hoe krijg ik dit dynamisch?
            disabled={offSet >= 1100}
        >
            {children}</button>
    )
}

export default NextButton