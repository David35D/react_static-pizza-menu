const Pizza = ({pizza}) => {
    const isSoldOut = pizza.soldOut;

    return (
        <li className={`pizza ${isSoldOut ? 'sold-out' : ''}`}>
            <img src={pizza.photoName} alt={pizza.name}/>
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{isSoldOut ? 'SOLD OUT' : '$' + pizza.price}</span>
            </div>
        </li>
    );
};

export default Pizza;