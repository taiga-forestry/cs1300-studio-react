import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <section className="menu">
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          // <p>Bakery Item {index}</p> // replace with BakeryItem component
          <BakeryItem item={item} key={index} index={index} cart={cart} setCart={setCart} />
        ))}
      </section>

      <section>
        <h2>Cart</h2>
          <p>
            <strong>
              Total Price: {cart.map((i) => bakeryData[i].price).reduce((x, y) => x + y, 0).toFixed(2)}
            </strong>
          </p>

          <ul>
            {cart.map((i) => (
              <li> { bakeryData[i].name } </li>
            ))}
          </ul>
      </section>
    </div>
  );
}

export default App;
