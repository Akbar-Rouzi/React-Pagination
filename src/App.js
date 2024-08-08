import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://dummyjson.com/products?limit=30');
      const data = await res.json();
      console.log('data: ', data);

      if (data && data.products) {
        setProducts(data.products);
        setTotalPage(Math.ceil(100 / pageSize));
      }

    })();
  }, []);

  return (
    <div className="App">
      {products.length > 0 &&
        <div className="content">
          <div className="products">
            {products.map(product => (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <span>{product.title}</span>
              </div>
            ))}
          </div>
          <div className="pagination">
            <span>◀</span>
            {
              Array.from({ length: totalPage }, (_, i) => (
                <span key={i + 1}>{i + 1}</span>
              ))
            }
            <span>▶</span>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
