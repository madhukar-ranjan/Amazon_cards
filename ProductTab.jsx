import Product from "./Product.jsx"

function ProductTab  ()  {
  let styles={
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "centre",
    alignItems: "centre",
  };
  return (
    <div style={styles}>
    <Product title= "Logitech mx-master" idx={0}/>
    <Product title="Apple pensil (2nd gen)" idx={1}/>
    <Product title="Zebronics zeb pin" idx={2}/>
    <Product title="Petronics pet ton" idx={3}/>
    </div>
  )
}

export default ProductTab