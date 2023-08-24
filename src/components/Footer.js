import Order from "./Order";

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 19;
    const isOpen = hour >= openHour && hour <= closeHour;

    const closedMessage = <p> We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>;

    return (
        <footer className="footer">
            {isOpen ? <Order openHour={openHour} closeHour={closeHour} />
                : closedMessage
            }

        </footer>
    );
};

export default Footer;