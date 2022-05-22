const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
})


app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');

})

app.get('/products', (req, res) => {
  const productos = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let index=0; index < limit; index ++)
    productos.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  res.json(productos)
})



app.get('/products/:id', (req, res) => {
  const {id }= req.params;
  res.json(
    {
      id,
      name: 'Producto 2',
      price: 2000
    }
  )
})

app.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset,
    })
  }  else{
      res.send('No hay parametros')
  }
})


app.get('/categories/:categoryid/products/:productsid', (req, res) => {
  const {categoryid, productsid} = req.params;
})

app.get('/categories/:categoryId',(req,res)=>{
  const {categoryId}= req.params
  res.json([
    {
      categoryId,
      category: 'Food',
      products: []
    }
  ])
})

app.get('/categories',(req,res)=>{
  const {categoryId}= req.params
  res.json([
    {
      categoryId,
      category: 'Food',
      products: []
    },
    {
      categoryId,
      category: 'Games',
      products: []
    },
    {
      categoryId,
      category: 'clothes',
      products: []
    },
  ])
})

app.listen(port, () => {
  console.log('Mi port' + port)
})


//prueba