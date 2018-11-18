const Products = require("./ICSProductModel");;

module.exports = {
    listall,
};

async function listall() {
	console.log('ICSProductService');
	const products = await Products.findAll();
    if (products) {
        return { products};
    }
    console.log('ICSProductsService: No Products in DB');
    return null;
}