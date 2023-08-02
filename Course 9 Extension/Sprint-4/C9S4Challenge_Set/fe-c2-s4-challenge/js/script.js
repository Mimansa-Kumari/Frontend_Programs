var btn=document.querySelector('button');

btn.addEventListener("click",addOrders);

var submit=document.getElementById("submit")

submit.addEventListener("click",saveOrder);
let order=[];
function saveOrder(){
    let orderObj={
        'orderId':document.getElementById("orderId").value,
        'customerName':document.getElementById("customerName").value,
        'emailId':document.getElementById("email").value,
        'contactNumeber':document.getElementById("contactNo").value,
        'orderDate':document.getElementById("orderDate").value,
        'address':document.getElementById("address").value,
        'categoryName':document.getElementById("category").value,
        'itemName':document.getElementById("itemName").value,
        'price':document.getElementById("price").value,
        'quantity':document.getElementById("quantity").value,
        'totalAmount':document.getElementById("total").value,
    }
    console.log(orderObj);
    order.push(orderObj);
    alert(`Order Placed----Total amount to be paid: $ ${document.getElementById("total").value}`)
}


var total=document.getElementById("total");
total.setAttribute("id","total");
total.value=0;

function addOrders(){
    document.getElementById("orderId").setAttribute("readonly","");
    document.getElementById("customerName").setAttribute("readonly","");
    document.getElementById("email").setAttribute("readonly","");
    document.getElementById("contactNo").setAttribute("readonly","");
    document.getElementById("orderDate").setAttribute("readonly","");
    document.getElementById("address").setAttribute("readonly","");

    var catergory=document.createElement("label");
    const node=document.createTextNode("Category Name");
    catergory.appendChild(node);
    catergory.style.margin="0px 50px"

    let catergory1=document.createElement("input");
    catergory1.setAttribute("id","category");
    catergory1.setAttribute("placeholder","Enter Category name");
    catergory1.setAttribute("required","");
    

    var item=document.createElement("label");
    const node1=document.createTextNode("Item Name");
    item.appendChild(node1);
    item.style.margin="0px 50px"

    var item1=document.createElement("input");
    item1.setAttribute("id","itemName");
    item1.setAttribute("placeholder","Enter Item name");
    item1.setAttribute("required","");
    item1.style.marginLeft="20px";

    var price=document.createElement("label");
    const node2=document.createTextNode("Price");
    price.appendChild(node2);
    price.style.margin="0px 50px"

    var price1=document.createElement("input");
    price1.setAttribute("type","number");
    price1.setAttribute("id","price");
    price1.setAttribute("placeholder","Enter Price");
    price1.setAttribute("required","");
    price1.style.marginLeft="20px";

    var quantity=document.createElement("label");
    const node3=document.createTextNode("Quantity");
    quantity.appendChild(node3);
    quantity.style.margin="0px 50px"

    var quantity1=document.createElement("input");
    quantity1.setAttribute("type","number");
    quantity1.setAttribute("id","quantity");
    quantity1.setAttribute("placeholder","Enter quantity");
    quantity1.setAttribute("required","");
    quantity1.style.marginLeft="20px";

    var order=document.getElementById("task2");
    var order1=document.getElementById("task3");
    order.style.backgroundColor="pink";
    order.textAlign='center';
    order.style.justifyContent="center";
    order1.textAlign='center';
    order1.style.justifyContent="space-evenly";

    order.appendChild(catergory);
    order1.appendChild(catergory1);
    order.appendChild(item);
    order1.appendChild(item1);
    order.appendChild(price);
    order1.appendChild(price1);
    order.appendChild(quantity);
    order1.appendChild(quantity1);

    quantity1.addEventListener("input",()=>total.value = parseFloat(price1.value)*parseFloat(quantity1.value))
    price1.addEventListener("input",()=>total.value = parseFloat(price1.value)*parseFloat(quantity1.value))
    
    btn.removeEventListener("click",addOrders);
}
