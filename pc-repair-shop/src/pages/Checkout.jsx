import { useCart } from "../context/UseCartCombined.jsx";

function Checkout() {
  const { cart } = useCart();

  return (
    <div className="CheckoutContainer">
      <h2 className="text-center text-xl">Checkout</h2>
      <div className="kurvCheckoutContainer">
        <p className="text-center">Kurv Størrelse: {cart.length}</p>
        <div className="kurvTitle flex flex-col mx-auto w-100 p-2">
          {cart.map((product) => (
            <div key={product._id}>
              <div className="kurvItem">{product.title}</div>
              <hr></hr>
            </div>
          ))}
        </div>
        <div className="kurvTotal flex flex-row justify-center">
          <p className="mr-2 font-bold">Kurv Total:</p>
          <p className="prisCalculated"> {cart.reduce((acc, cur) => acc + cur.price, 0)} kr.</p>
        </div>
      </div>
      <form className="flex flex-col mx-auto w-100 p-2">
        <h2 className="text-center text-lg">Kontakt oplysninger</h2>
        <label htmlFor="name">Fornavn:</label>
        <input type="text" id="fornavn" name="name" />
        <label htmlFor="name">Efternavn:</label>
        <input type="text" id="efternavn" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="address">Adresse:</label>
        <input type="text" id="address" name="address" />
        <label htmlFor="city">By:</label>
        <input type="text" id="city" name="city" />
        <label htmlFor="zip">Postnummer:</label>
        <input type="text" id="zip" name="zip" />
        <button type="submit">Bestil</button>
      </form>
    </div>
  );
}

export default Checkout;
