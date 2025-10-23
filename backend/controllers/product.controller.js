import Product from '../models/product.model.js';

export const getProducts = async (req, res) => {
  try{
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: products });
  } catch(error){
    res.status(500).send({message: 'Server Error', error: error.message});
  }
};


export const createProduct = async (req, res) => {
  async (req, res) => {
  const product = req.body;
  if(!product.name || !product.price || !product.image){
    return res.status(400).send({message: 'All fields are required: name, price, image'});
  }
  const newProduct = new Product(product);

  try{
    await newProduct.save();
    res.status(201).send({message: 'Product created successfully', product: newProduct});
  } catch(error){
    res.status(500).send({message: 'Server Error', error: error.message});
  }  
}
};


export const deleteProduct = async (req, res) => {
  async (req, res) => {
  const productId = req.params.id;

  try{
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if(!deletedProduct){
      return res.status(404).send({message: 'Product not found'});
    }
    res.send({message: 'Product deleted successfully'});
  } catch(error){
    res.status(500).send({message: 'Server Error', error: error.message});
  }}
};

export const updateProduct = async (req, res) => {
   async (req, res) => {
    const productId = req.params.id;
    const updates = req.body;

    try{
      const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
      if(!updatedProduct){
        return res.status(404).send({message: 'Product not found'});
      }
      res.send({message: 'Product updated successfully', product: updatedProduct});
    } catch(error){
      res.status(500).send({message: 'Server Error', error: error.message});
    }
  }
};
