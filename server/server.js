const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://korennoygrgbrotea:aIVTXoNxdDABcKrR@cluster0.ywdapjm.mongodb.net/?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Schemas
const productSchema = new mongoose.Schema({
  title: String,
  picture: String,
  description: String,
  price: Number,
});

const customerSchema = new mongoose.Schema({
  name: String,
  address: String,
});

const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  }
});

const Product = mongoose.model('Product', productSchema);
const Customer = mongoose.model('Customer', customerSchema);
const Order = mongoose.model('Order', orderSchema);

app.use(cors());
app.use(express.json());

// Rewrite API Endpoints
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find().populate('product').populate('customer');
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Error fetching orders.' });
  }
});

app.post('/api/orders', async (req, res) => {
  const { title, picture, description, price, customerName, customerAddress } = req.body;

  try {
    // Create product
    const product = new Product({ title, picture, description, price });
    await product.save();

    // Create customer
    const customer = new Customer({ name: customerName, address: customerAddress });
    await customer.save();

    // Create order
    const order = new Order({ product: product._id, customer: customer._id });
    await order.save();

    res.json({ success: true });
  } catch (error) {
    console.error('Error creating new order:', error);
    res.status(500).json({ error: 'Error creating new order.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});