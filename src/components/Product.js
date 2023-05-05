

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div >
      <div >{product.image}</div>
      <h3>{product.name}</h3>
      <div>EGP{product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}