const { ObjectId } = require('mongodb');
const conn = require('./connection');

const getAllProducts = async () => {
  const db = await conn();
  const allPRoducts = await db.collection('lances').find({}).toArray();

  return allPRoducts;
};

const getProductBtId = async (idProduct) => {
  const db = await conn();
  const product = await db.collection('lances').findOne({ _id: ObjectId(idProduct) });
  return product;
};

const createdProduct = async (newProduct) => {
  const db = await conn();
  const { insertedId: id } = await db.collection('lances').insertOne({ ...newProduct });

  return {
    id,
    ...newProduct
  };
};

const updatedProduct = async (id, newProduct) => {
  const db = await conn();
   
  await db.collection('lances').updateOne(
    { _id: ObjectId(id) },
    { $set: { ...newProduct } }
  );

  return {
    id,
    ...newProduct
  };
};


const incrementProduct = async (id) => {
  const db = await conn();
   
  await db.collection('lances').updateOne(
    { _id: ObjectId(id) },
    { $inc: { valor: 5 } }
  );

  return id;
};



module.exports = {
  getAllProducts,
  getProductBtId,
  createdProduct,
  updatedProduct,
  incrementProduct,
}