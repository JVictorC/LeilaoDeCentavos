const { Router } = require('express');
const leilaoModels = require('../models/leilaoModels');
const leilaoRouter = Router();

leilaoRouter.get('/', async (req, res) => {
  const allProducts = await leilaoModels.getAllProducts();
  return res.status(200).json(allProducts);
});

leilaoRouter.post('/createProduct', async (req, res) => {
  const { nome, usuarioComprador } = req.body;
  const newProducts = {
    nome, 
    usuarioComprador,
    createAt: new Date().toUTCString()
  }
  console.log(newProducts);
  const allProducts = await leilaoModels.createdProduct(newProducts);
  return res.status(200).json(allProducts);
});

module.exports = leilaoRouter;