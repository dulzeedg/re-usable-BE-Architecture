const Product = require('../../models/product');

module.exports = {
    products: async () => {
        try {
            const productsFetched = await Product.find();
            return productsFetched.map(product => {
                return {
                    ...product._doc,
                    _id: product.id,
                    createdAt: new Date(product._doc.createdAt).toISOString(),
                };
            });
        }
        catch (error) {
            throw error;
        }
    },
    createProduct: async args => {
        try {
            const { product_type, product_name, product_price, product_size, description } = args.product;
            const product = new Product({
                product_type,
                product_name,
                product_price,
                product_size,
                description,
            });
            const newProduct = await product.save();
            return {
                ...newProduct._doc,
                _id: newProduct.id
            };
        }
        catch (error) {
            throw error;
        }
    }
};