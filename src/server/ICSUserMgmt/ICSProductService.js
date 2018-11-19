const products = require("./ICSproductModel");

module.exports = {
    listall,
    addproduct,
    buyUpdate
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

async function buyUpdate(productParam) {
    var userId = "Rucha"
	console.log('ICSProductService: buyUpdate: productname, buyerID = %s', productParam['productName'], productParam['sellerUserId'] );
	var query = { $and: [{ productName: productParam['productName'] } , {sellerUserId: productParam['sellerUserId'] }]} ;
    console.log("query",query);
	//const product_listing = await products.findOne(query);
    //console.log("Product listing",product_listing)
    const product_buy_update=await products.update(
        query, 
        {
        $set:
            {
            buyerUserId: userId,
            soldFlag:'y',
            buyDate: new Date()
            }
        },
    )
    const product_update = await products.findOne(query);
    console.log("product_buy_update: %s", product_update)
    return product_update;
}
