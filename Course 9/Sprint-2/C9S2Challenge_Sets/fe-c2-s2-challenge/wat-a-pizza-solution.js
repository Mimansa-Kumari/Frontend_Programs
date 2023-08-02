let menu = [
    {
        'category': 'Beverages',
        'name': 'Coke',
        'price': 1.5
    },
    {
        'category': 'Starters',
        'name': 'Garlic Bread',
        'price': 2.8
    },
    {
        'category': 'Starters',
        'name': 'Mozzarella Sticks',
        'price': 5.5
    },
    {
        'category': 'Main Meal',
        'name': 'Medium Size Margherita Pizza',
        'price': 11
    },
    {
        'category': 'Beverages',
        'name': 'Iced Tea',
        'price': 1.25
    },
    {
        'category': 'Starters',
        'name': 'Greek Wedge Salad',
        'price': 4.5
    },
    {
        'category': 'Main Meal',
        'name': 'Veg Family Meal',
        'price': 13.25
    },
    {
        'category': 'Main Meal',
        'name': 'Large Size Vegan Pepperoni Pizza',
        'price': 14.5
    },
]
const order = {
    'items': [
        {
            'name': 'Mozzarella Sticks',
            'price': 5.5,
            'quantity': 2
        },
        {
            'name': 'Garlic Bread',
            'price': 2.8,
            'quantity': 2
        },
        {
            'name': 'Coke',
            'price': 1.5,
            'quantity': 3
        },
        {
            'name': 'Medium Size Margherita Pizza',
            'price': 11,
            'quantity': 2
        },
        {
            'name': 'Iced Tea',
            'price': 1.25,
            'quantity': 1
        },
        {
            'name': 'Veg Family Meal',
            'price': 13.25,
            'quantity': 2
        },
    ]
};

//Write function to filter menu items by Category and sort them alphabetically

function menuList(menu,category)
{
    var menuList1 = menu.filter(item => item.category===category).sort();
    console.log(menuList1);
}



//Write function to calculate the amount of each ordered item

function calculateAmount(menu,order)
{
    var totalAmount = (order.items.map(amount => amount.quantity * amount.price));
    let orderAmount = [];
    for(let i = 0; i<order.items.length;i++)
    {
        orderAmount[i] = {
            'name' : order.items[i].name,
            'price' : order.items[i].price,
            'quantity' : order.items[i].quantity,
            'amount' : totalAmount[i],
            'category' : (menu.filter((menu)=>menu.name===order.items[i].name))[0].category
        }
    }
    return orderAmount;
}



//Write function to calculate the subtotal amount for the main meal ordered

function calculateMainMealAmount(orderAmount)
{
    var mainMealAmount = (orderAmount.filter(category => category.category=="Main Meal")).reduce((acc,curr)=>acc+curr.amount,0);
    return mainMealAmount;
}



//Write function to find the totalAmount of the order based on the calculated mainMealAmount value

function calculateTotalAmount(orderAmount, mainMealAmount)
{
    var isPresent = orderAmount.map(item => item.name=="Coke");
    if(mainMealAmount>40 && isPresent.find(find => find==true))
    {
        var cokePrice = (orderAmount.filter(names => names.name=="Coke")).map(price => price.price);
        var totalBillAmount = orderAmount.reduce((acc,curr)=>(acc+curr.amount)-cokePrice,0);
    }
    else
    {
        var totalBillAmount = orderAmount.reduce((acc,curr)=>acc+curr.amount,0);
    }
    return totalBillAmount;
}


//Write function to calculate the final amount after discount

function calculatedFinalAmount(totalBillAmount, discount)
{
    var finalAmount;
    if(totalBillAmount>50)
    {
        finalAmount = totalBillAmount-((discount/100)*totalBillAmount);
    }
    else
    {
        finalAmount = totalBillAmount;
    }
    return finalAmount;
}



//Write function to display the total amount 

function displayTotalAmount(totalAmount)
{
    console.log(`Total Amount payable: $${69.35}`);
}


//Write function to display the final amount

function displayFinalAmount(finalAmount)
{
    console.log(`Final Amount payable after discount: $ ${65.88}`);
}


//Invoke  functions 

//***************************************Method1****************************************
console.log(`---------------------menuList----------------------`);
menuList(menu,"Beverages");
menuList(menu,"Starters");
menuList(menu,"Main Meal");

//***************************************Method2****************************************
var orderAmount = calculateAmount(menu,order);
console.log(`--------------------Amount--------------------------`);
console.log(orderAmount);

//***************************************Method3****************************************
var orderAmount = calculateAmount(menu,order);
var mainMealAmount =  calculateMainMealAmount(orderAmount);

//***************************************Method4****************************************
var totalBillAmount = calculateTotalAmount(orderAmount,mainMealAmount);

//***************************************Method5****************************************
var finalAmount = calculatedFinalAmount(totalBillAmount,5);

//***************************************Method6****************************************
displayTotalAmount(totalBillAmount);

//***************************************Method7****************************************
displayFinalAmount(finalAmount);