import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import ItemProducts from '../components/itemProducts';

export default function Home() {
  const [Products, setProducts] = useState([])

  const requestProducts = useCallback(
    async () => {
      const products = await axios.get('http://localhost:3001/leilao');

      setProducts(products.data);
    },
    [],
  )

  useEffect(() => {
    requestProducts();
  }, [requestProducts]);


  return (
    <div>
      <ul>
        {
          Products.map((product) => (
            <ItemProducts
              key={product._id}
              id={product._id}
              nome={product.nome}
              createAt={product.createAt}
              image={product.image}
              usuarioComprador={product.usuarioComprador}
              valor={product.valor}
            />
          ))
        }
      </ul>
    </div>
  )
}
