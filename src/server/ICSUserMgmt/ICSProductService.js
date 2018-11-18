const products = require("./ICSproductModel");

module.exports = {
    listall,
    addproduct,
};

async function listall() {
	console.log('ICSproductService listall');
    const allproducts = await products.find();
    console.log("products is:", allproducts);
    if (allproducts) {
        return { allproducts};
    }
    console.log('ICSproductsService: No products in DB');
    return null;
}

async function addproduct() {
    console.log('ICSproductService addproduct');
    
    var userData = {
        productName: 'Mop',
        category: 'household',
        quantity: 1,
        price: 10,
        uploadDate: new Date(),
        sellerUserId: 'henry',
        buyerUserId: 'david',
        soldFlag: 'Y',
        zipcode: 94086,
        buyDate: new Date(),
        picture: 'mop.jpg'
    }

    const addedproduct = await products.create(userData);
    console.log("Added product is:", addedproduct);
    if (addedproduct) {
        console.log(addedproduct);
    }
    console.log('ICSproductsService: No products in DB');
    return null;
}