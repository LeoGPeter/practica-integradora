import { productsModels } from "../modules/products.schemas.js";

class ProductDao {

    ID_FIELD = "_id";
    
    static async exists(id) {
        try {
            return await productsModels.findById(id);
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            return await productsModels.find();
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    async getProductById(objectId) {
        try {
            const product = await productsModels.findOne({
                [this.ID_FIELD] : objectId
            })
            console.log(product);
            return product;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    async createProduct(object) {
        try {
            return await productsModels.create(object)
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    async updateProductById(id, object) {
        try {
            await productsModels.findByIdAndUpdate(
                {
                    [this.ID_FIELD] : id
                },
                object, 
                {
                    runValidators: true
                })
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    async deleteProductById(id) {
        try {
            return await productsModels.findByIdAndDelete({[this.ID_FIELD]: id})
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
}

export default ProductDao;
