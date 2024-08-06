import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('https://dummyjson.com/products?limit=100');
      const data = await res.json();
      console.log('data: ', data);

      if (data && data.products) {
        setProducts(data.products);
      }

    })();
  }, []);

  return (
    <div className="App">
      {products.length > 0 &&
        <div className="products">
          {products.map(product => (
            <div className="product" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <span>{product.title}</span>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default App;
