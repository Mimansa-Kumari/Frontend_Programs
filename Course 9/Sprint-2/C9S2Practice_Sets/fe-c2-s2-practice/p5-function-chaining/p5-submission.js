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

//Find the stock of each non-premium products using function chaining
//Write code here
var acc =0;
console.log(``);
 var result1 = (products.filter(product => product.productName == "Gucci Round Bucklet Belt" && product.price<=300)).reduce((acc,curr) => ++acc,0);
 console.log(`"Gucci Round Bucklet Belt :   ${result1}`);

 var result2 = (products.filter(product => product.productName == "Smiley T-Shirt" && product.price<=300)).reduce((acc,curr) => ++acc,0);
 console.log(`"Smiley T-Shirt           :   ${result2}`);

 var result3 = (products.filter(product => product.productName == "Shinie Nail Paint" && product.price<=300)).reduce((acc,curr) => ++acc,0);
 console.log(`"Shinie Nail Paint        :   ${result3}`);

 var result4 = (products.filter(product => product.productName == "Esbeda Wallet" && product.price<=300)).reduce((acc,curr) => ++acc,0);
 console.log(`"Esbeda Wallet            :   ${result4}`);

 