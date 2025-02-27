const Element = ({ data, id, handleBackToMenu }) => {

    const elementToDisplay = data.filter(element => element.id === id)[0]

    if (elementToDisplay) {

        return (
            <div>
                <h2>{elementToDisplay.name}</h2>
                <h5>Category: {elementToDisplay.category}</h5>
                <h3>Description</h3>
                <p>{elementToDisplay.description}</p>
                <h3>Price: ${elementToDisplay.price}</h3>
                <br />
                <button onClick={handleBackToMenu}>Back to full menu</button>
            </div>
        )
    } else {
        return (
            <h1>Whoops!</h1>
        )
    }
}

export default Element