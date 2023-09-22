import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  let { id } = useParams();
  const Url = `https://fakestoreapi.com/products/${id}`;
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(Url);
        const result = await response.json();
        console.log(result);
        result.category = result.category.replace(/(?:^|<=\s)\w/g, (char) =>
          char.toUpperCase()
        );
        console.log(result);
        setProduct(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProduct();
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div>Page Loading</div>
      ) : (
        <ul>
          <h4>{product.title}</h4>
          <h4>{product.description}</h4>
          <img className="Product-Image" src={product.image} />
          <h4>{product.price}</h4>
        </ul>
      )}
    </>
  );
}
