const Menu = ({ data, handleSelectItem }) => {
    let categories = []
    data.forEach(element => categories.includes(element.category) ? null : categories.push(element.category))

    return (
        <div>
            {categories.map(category => (
                <ul key={category}>
                    <h2>{category}</h2>
                    {data.filter(item => item.category === category).map(item => (
                        <li key={item.id}>
                            <div onClick={() => handleSelectItem(item.id)}>
                                <h3>{item.name}</h3>
                                <h4>${item.price}</h4>
                            </div>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    )
}

export default Menu