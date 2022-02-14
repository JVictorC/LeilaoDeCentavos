const leilaoModels = require('../models/leilaoModels');

module.exports = (io) => io.on('connection', (socket) => {
  io.emit('newUser', socket.id);
  socket.on('lance', async ({ id }) => {
    await leilaoModels.incrementProduct(id);
    const product = await leilaoModels.getProductBtId(id);
    io.emit('refreshProduct', product);    
  });
}); 