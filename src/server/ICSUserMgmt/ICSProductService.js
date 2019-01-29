const products = require("./ICSproductModel");

module.exports = {
    listall,
    listallByZip,
    addproduct,
    buyUpdate,
    findById,
    findByBuyerId,
    registerProduct,
    findByProductName,
    findByProductNameandZip
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

async function listallByZip(userParam) {
    console.log('ICSProductService: listallByZip: zipcode = %s', userParam['zipcode'] );
    var query = { zipcode :userParam['zipcode'] };
    const allproducts = await products.find(query);
    if (allproducts) {
        return { allproducts};
    }
    console.log('ICSproductsService: No products in DB');
    return null;
}



async function addproduct(userParam) {
    console.log('ICSproductService addproduct');
    
    console.log(JSON.stringify(userParam));
    var userData = {
        productName: userParam['productName'],
        category: userParam['category'],
        quantity: userParam['quantity'],
        price: userParam['price'],
        uploadDate: new Date(),
        sellerUserId: userParam['sellerUserId'],
    //     buyerUserId: 'david',
    //     soldFlag: 'Y',
    //     zipcode: 94086,
    //     buyDate: new Date(),
    //     picture: 'mop.jpg'
    }

    const addedproduct = await products.create(userData);
    console.log("Added product is:", addedproduct);
    if (addedproduct) {
        console.log(addedproduct);
        return addedproduct;
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

async function findById(userParam) {
    console.log('ICSProductService:findById: sellerUserId = %s', userParam['sellerUserId'] );
    var query = { sellerUserId:userParam['sellerUserId'] };
    return await products.find(query);
}

async function findByBuyerId(userParam) {
    console.log('ICSProductService:findByBuyerId: buyerUserId = %s', userParam['buyerUserId'] );
    var query = { buyerUserId:userParam['buyerUserId'] };
    return await products.find(query);
}


async function registerProduct(userParam) {

    console.log('ICSProductService:registerProduct: sellerUserId = %s', userParam['sellerUserId'] );
    const newProduct = new products(userParam);
    // save user
    //newProduct.uploadDate: new Date();
        await newProduct.save();
       console.log('ICSProductService: registerProduct: New product created');
        return newProduct;
   
}

async function findByProductName(userParam) {
    console.log('ICSProductService:findByProductName: productName = %s', userParam['productName'] );
    var query = { productName:userParam['productName'] };
    return await products.find(query);
}

async function findByProductNameandZip(userParam) {
    console.log('ICSProductService:findByProductNameandZip: productName = %s, zipcode = %s', (userParam['productName'], userParam['userAddress']) );
    var query = { $and: [{ productName: userParam['productName'] } , {zipcode: userParam['userAddress'] }]} ;
    console.log("query",query);
    //var query = { productName:userParam['productName'] };
    return await products.find(query);
}
