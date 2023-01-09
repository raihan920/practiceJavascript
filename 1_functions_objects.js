/* destructuring objects */
const productInfo = {
    productId: 102,
    productName: "Television",
    productCategory: "Electronics",
    productPrice: 25000,
    productQuantity: 5,
    productAvailable: true,
    // obj_getProductInfo: function (){        
    //     console.log(`Product Name: ${productInfo.productName} and Product Price: ${productInfo.productPrice}`);
    // }

    obj_getProductInfo: function (){        
        console.log(`Product Name: ${this.productName} and Product Price: ${this.productPrice}`);
    }
}

productInfo.obj_getProductInfo();