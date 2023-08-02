//Declaring variables 

var customerName = "Gary";
var customerEmail = "gary@123.com";
var phoneNo = "14123123435";
var address = "20, Marble Drive, Eville";
var noOfPizzasOrdered = 10;
var pizzaPrice = 12.5;
var pizzaSize = "M";
var noOfGarlicBreadOrdered = 5;
var garlicBreadPrice = 5.99;
var noOfBeveragesOrdered = 10;
var beveragePrice  = 1.99;


// define function displayCustomerDetails() to display the details of customer passed as parameters.
 
    function displayCustomerDetails(name, email, phoneNo, address)
    {
        console.log(`--------------------------`);
        console.log(`Customer Name         : ${name}`);
        console.log(`Customer Email        : ${email}`);
        console.log(`Customer Phone Number : ${phoneNo}`);
        console.log(`Customer Address      : ${address}`);
    }

// define funciton displayMenu() to raise an alert that displays the menu with 
// category, item names and price
    
    function displayMenu()
    {
        console.log(`Select the items to Order`)
        console.log(`--------------------------`);
        console.log(`1) Pizza`);
        console.log(`Price of one regular pizza     : $9.99`);
        console.log(`Price of one medium pizza      : $11.99`);
        console.log(`Price of one large pizza       : $13.99`);
        console.log(`2) Garlic Bread`);
        console.log(`Price of one Garlic Bread      : $5.99`);
        console.log(`3) Beverages`);
        console.log(`Price of one Beverage          : $1.99`);
    }

// define function getPriceOfPizzaBasedOnSize() to return price of pizza for the 
// size passed as parameter.

    var priceOfPizza = 0;
    function getPriceOfPizzaBasedOnSize(size)
    {
        switch(size)
        {
        case 1: 
            priceOfPizza = 9.99;
            return priceOfPizza;
        case 2:
            priceOfPizza = 11.99;
            return priceOfPizza;
        case 3: 
            priceOfPizza = 13.99;
            return priceOfPizza;
        default:    
            alert('Invalid size, Enter 1,2 or 3');
            priceOfPizza = 0;
            return priceOfPizza;
        }
    }

// define function getPriceOfGarlicBread() to return price of garlic bread as 5.99.

    function getPriceOfGarlicBread(garlicBreadPrice)
    {
        return garlicBreadPrice;
    }

// define function getPriceOfBeverage() to return price of beverage as 1.99.
 
    function getPriceOfBeverage(beveragePrice)
    {
        return beveragePrice;
    }

// define function calculatePrice() to return cost of items ordered for the 
// no of items and price passed as parameters.
    
    function calculatePrice(noOfItems, price)
    {
        return noOfItems*price;
    }

// define function calculateTotalBill() to return total bill amount from the 
// total price of pizza, garlic bread and beverages ordered 

    function calculateTotalBill(totalPriceOfPizza, totalPriceOfGarlicBread, totalPriceOfBeverages)
    {
        var totalBill = totalPriceOfPizza + totalPriceOfGarlicBread + totalPriceOfBeverages;
        return totalBill;
    }

// define function calculateDiscountAndReturnBillAmount() to return discounted amount 
// which will be calculated only if total bill is more than 50  
 
    function calculateDiscountAndReturnBillAmount(totalBill)
    {
        var discountedAmount;
        if(totalBill>50)
        {
            discountedAmount = 0.1*totalBill;
        }
        var totalBillAmountAfterDiscount = totalBill-discountedAmount;
        return totalBillAmountAfterDiscount;
    }

// define function displayOrderDetails() to print the order details

    function displayOrderDetails(noOfPizzasOrdered, noOfGarlicBreadOrdered, noOfBeveragesOrdered, totalBill, totalBillAmountAfterDiscount)
    {
        console.log(`Order Details`);
        console.log(`--------------------`);
        console.log(`The number of pizzas ordered             : ${noOfPizzasOrdered}`);
        console.log(`The number of garlic bread ordered       : ${noOfGarlicBreadOrdered}`);
        console.log(`The number of beverages ordered          : ${noOfBeveragesOrdered}`);
        console.log(`-----------------------------------------------`);
        console.log(`The total bill amount is                 : $${totalBill}`);
        console.log(`The discounted bill amount is            : $${totalBillAmountAfterDiscount}`);
    }   

//Main Program

// call the functions to compute order amount and display order details

    displayCustomerDetails(customerName, customerEmail, phoneNo, address);

    console.log(``);

    displayMenu();

    console.log(``);
    var pizzaPriceBasedOnSizeInMain = getPriceOfPizzaBasedOnSize(1);
    var garlicBreadPriceInMain = getPriceOfGarlicBread(garlicBreadPrice);
    var beveragesPriceInMain = getPriceOfBeverage(beveragePrice);

    var totalPriceOfPizzaInMain = calculatePrice(noOfPizzasOrdered, pizzaPriceBasedOnSizeInMain);
    var totalPriceOfGarlicBreadInMain = calculatePrice(noOfGarlicBreadOrdered, garlicBreadPriceInMain);
    var totalPriceOfBeveragesInMain = calculatePrice(noOfBeveragesOrdered, beveragesPriceInMain);
    
    var totalBillInMain = calculateTotalBill(totalPriceOfPizzaInMain, totalPriceOfGarlicBreadInMain, totalPriceOfBeveragesInMain);

    var totalBillAmountAfterDiscountInMain = calculateDiscountAndReturnBillAmount(totalBillInMain);
    console.log(``);
    displayOrderDetails(noOfPizzasOrdered, noOfGarlicBreadOrdered, noOfBeveragesOrdered, totalBillInMain, totalBillAmountAfterDiscountInMain);
    console.log(``);