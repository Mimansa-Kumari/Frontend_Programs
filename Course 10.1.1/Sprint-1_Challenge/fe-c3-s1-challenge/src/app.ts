//Define Fruit Object type with required properties
class Fruit {
    private _name : string;
    private _price : string;
    private _image : string;
    private _unit : string;

    constructor(name:string , price:string , image:string , unit:string){
        this._name = name;
        this._price = price;
        this._image = image;
        this._unit = unit;
    }

    set name(name:string){
        this._name = name;
    }
    get name():string{
        return this._name;
    }

    set price(price:string){
        this._price = price;
    }
    get price():string{
        return this._price;
    }

    set image(image:string){
        this._image = image;
    }
    get image():string{
        return this._image;
    }

    set unit(unit:string){
        this._unit = unit;
    }
    get unit():string{
        return this._unit;
    }

}


// Fetch data from server using getFruits() method
let availablefruits:Fruit[] = [];

function getFruits(){
    const requestOptions = {
        method : 'GET',
        headers : { 'Content-Type' : 'application/json' },
    };
    fetch(' http://localhost:3000/fruits')
    .then(response => response.json())
    .then(data => {
        for(var fruit of data){
            availablefruits.push(fruit);
        }
      console.log(data);
      showFruit();
    })
    .catch((error)=> document.write("Error"))
}


function showFruit(){
    console.log("ShowFruit");
    for(var f of availablefruits) {

    let fruitItem = document.createElement("div");
    fruitItem.style.borderRadius = "10px";
    fruitItem.style.setProperty('background-color', 'white');
    fruitItem.style.margin="10px";
    fruitItem.style.height="190px";
    fruitItem.style.width="190px";
    fruitItem.style.backgroundColor='white';
    fruitItem.style.display= "inline-block";
    fruitItem.style.textAlign="center"

    let fruitImage = document.createElement("img");
    fruitImage.setAttribute("src",f.image);
    fruitImage.style.height="100px";
    fruitImage.style.width="100px";

    let fruitName = document.createElement("div");
    fruitName.style.fontWeight="500";
    fruitName.style.fontFamily="'Times New Roman', 'Times', 'serif' (Heading)";
    fruitName.style.fontSize="20px";
    fruitName.style.paddingTop="10px";

    let fruitPrice = document.createElement("div");
    fruitPrice.style.paddingTop="10px";
    fruitPrice.style.fontSize="17px";
    fruitPrice.style.color="grey";

    fruitName.innerHTML = f.name;
    fruitPrice.innerHTML =`Price:$${f.price} per lb`;

    fruitItem.appendChild(fruitImage);
    fruitItem.appendChild(fruitName);
    fruitItem.appendChild(fruitPrice);
    
    document.body.appendChild(fruitItem);

    }
}


