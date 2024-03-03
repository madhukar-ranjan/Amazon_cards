import "./Product.css";
import Price from "./Price.jsx";

function Product  ({title, idx})  {
  let oldPrice = ["11,999", "12,999", "8,999", " 6,899"];
  let newPrice = ["9,999", "10,999", "7,000", "5,999"];
  let description= ["eight656", "inuitive surface", "designed for ipad pro", "wireless"]
  return (
    <div className="Product">
       <h4>{title}</h4>
        <p>{description[idx]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
  )
}

export default Product