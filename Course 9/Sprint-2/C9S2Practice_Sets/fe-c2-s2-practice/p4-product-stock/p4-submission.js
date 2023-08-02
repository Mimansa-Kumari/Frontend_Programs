const products = [
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 400
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 450
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 300
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 420
    },
    {
        productName: 'Smiley T-Shirt',
        price: 350
    },
    {
        productName: 'Smiley T-Shirt',
        price: 150
    },
    {
        productName: 'Shinie Nail Paint',
        price: 100
    },
    {
        productName: 'Shinie Nail Paint',
        price: 250
    },
    {
        productName: 'Esbeda Wallet',
        price: 250
    }
];

//Find the stock of each product type

//Write code here

var acc = 0;
var filter1 = products.filter(product =>product.productName === "Gucci Round Bucklet Belt").reduce((acc,curr) => ++acc,0);
console.log(`Gucci Round Bucklet Belt    :   ${filter1}`);

var filter2 = products.filter(product =>product.productName === "Smiley T-Shirt").reduce((acc,curr) => ++acc,0);
console.log(`Smiley T-Shirt              :   ${filter2}`);

var filter3 = products.filter(product =>product.productName === "Shinie Nail Paint").reduce((acc,curr) => ++acc,0);
console.log(`Shinie Nail Paint           :   ${filter3}`);

var filter4 = products.filter(product =>product.productName === "Esbeda Wallet").reduce((acc,curr) => ++acc,0);
console.log(`Esbeda Wallet               :   ${filter4}`);