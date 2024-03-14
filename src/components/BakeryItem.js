// ITEM:
// name: string;
// description: string;
// price: number;
// image: string;

export default function BakeryItem({ index, item, cart, setCart }) {
  const handleClick = () => {
    if (!cart.includes(index)) {
      setCart([...cart, index]);
    } else {
      setCart(cart.filter((i) => i !== index));
    }
  };

  return (
    <div className="bakeryItem">
      <p> { item.name } | { item.price } </p>
      {/* <p> { item.description } </p> */}
      <img src={item.image} width={250} alt={item.name} />

      <div style={{ marginTop: "8px" }}>
        <button onClick={handleClick}>
          {!cart.includes(index) ? "Add to Cart" : "Remove from Cart"}
        </button>
      </div>
    </div>
  );
}