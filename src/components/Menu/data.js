import foccaciaImg from '../../assets/images/focaccia.jpg';
import margheritaImg from '../../assets/images/margherita.jpg';
import spinaciImg from '../../assets/images/spinaci.jpg';
import funghiImg from '../../assets/images/funghi.jpg';
import salaminoImg from '../../assets/images/salamino.jpg';
import prosciuttoImg from '../../assets/images/prosciutto.jpg';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: foccaciaImg,
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: margheritaImg,
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: spinaciImg,
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: funghiImg,
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: salaminoImg,
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: prosciuttoImg,
      soldOut: false,
    },
];

export default pizzaData;