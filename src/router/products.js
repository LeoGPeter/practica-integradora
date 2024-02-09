import { Router } from "express";
import  ProductDao  from "../dao/productDao.js";

const prodRouter = Router();
const productDao = new ProductDao();

// GET api/productos

prodRouter.get('/', async (_req, res) => {
    const products = await productDao.getAll();
    products
        ? res.status(200).json(products)
        : res.status(400).json({"error": "there was a problem when trying to get the products"})
    
})

// GET api/productos/:id

prodRouter.get('/:id', async(req, res) => {
    const { id } = req.params;
    const product = await productDao.getProductById(id);
    
    product
        ? res.status(200).json(product)
        : res.status(400).json({"error": "product not found"})
    
})


// POST api/productos
prodRouter.post('/',  async (req,res) => {
    const { body } = req;
    const newProduct = await productDao.createProduct(body);
    
    newProduct
        ? res.status(200).json({"success": "Product added with ID " + newProduct._id})
        : res.status(400).json({"error": "there was an error, please verify the body content match the schema"})
    
})

// PUT api/productos/:id
prodRouter.put('/:id',  async (req,res) => {
    const { id } = req.params;
    const { body } = req;
    const wasUpdated = await productDao.updateProductById(id, body);
    
    wasUpdated
        ? res.status(200).json({"success" : "product updated"})
        : res.status(404).json({"error": "product not found or invalid body content."}) 
})


// DELETE /api/productos/id

prodRouter.delete('/:id',  async (req,res) => {
    const { id } = req.params;
    const wasDeleted = await productDao.deleteProductById(id)

    wasDeleted 
        ? res.status(200).json({"success": "product successfully removed"})
        : res.status(404).json({"error": "product not found"})
})



export default prodRouter;