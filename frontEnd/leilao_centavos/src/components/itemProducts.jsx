import React, { useEffect, useState } from 'react'
import socket from '../utils/leilao'

export default function ItemProducts({
  id, nome, createAt, image, valor
}) {

  const [Valor, setValor] = useState(valor);

  useEffect(() => {
    socket.on('refreshProduct', (product) => {
      if (product._id === id) setValor(product.valor);
    })
  }, []);
  

  const handleClick = () => {
    socket.emit('lance', id);
  }

  return (
    <div>
      <p>{nome}</p>
      <p>{Valor}</p>
      <p>{createAt}</p>
      <img src={image} alt="" className='image'/>
      <button onClick={handleClick}>Dar Lance</button>
    </div>
  )
}
