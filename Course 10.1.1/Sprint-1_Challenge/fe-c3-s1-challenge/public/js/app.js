"use strict";
//Define Fruit Object type with required properties
var Fruit = /** @class */ (function () {
    function Fruit(name, price, image, unit) {
        this._name = name;
        this._price = price;
        this._image = image;
        this._unit = unit;
    }
    Object.defineProperty(Fruit.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fruit.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fruit.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (image) {
            this._image = image;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fruit.prototype, "unit", {
        get: function () {
            return this._unit;
        },
        set: function (unit) {
            this._unit = unit;
        },
        enumerable: false,
        configurable: true
    });
    return Fruit;
}());
// Fetch data from server using getFruits() method
var availablefruits = [];
function getFruits() {
    var requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch(' http://localhost:3000/fruits')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var fruit = data_1[_i];
            availablefruits.push(fruit);
        }
        console.log(data);
        showFruit();
    })
        .catch(function (error) { return document.write("Error"); });
}
function showFruit() {
    console.log("ShowFruit");
    for (var _i = 0, availablefruits_1 = availablefruits; _i < availablefruits_1.length; _i++) {
        var f = availablefruits_1[_i];
        var fruitItem = document.createElement("div");
        fruitItem.style.borderRadius = "10px";
        fruitItem.style.setProperty('background-color', 'white');
        fruitItem.style.margin = "10px";
        fruitItem.style.height = "190px";
        fruitItem.style.width = "190px";
        fruitItem.style.backgroundColor = 'white';
        fruitItem.style.display = "inline-block";
        fruitItem.style.textAlign = "center";
        var fruitImage = document.createElement("img");
        fruitImage.setAttribute("src", f.image);
        fruitImage.style.height = "100px";
        fruitImage.style.width = "100px";
        var fruitName = document.createElement("div");
        fruitName.style.fontWeight = "500";
        fruitName.style.fontFamily = "'Times New Roman', 'Times', 'serif' (Heading)";
        fruitName.style.fontSize = "20px";
        fruitName.style.paddingTop = "10px";
        var fruitPrice = document.createElement("div");
        fruitPrice.style.paddingTop = "10px";
        fruitPrice.style.fontSize = "17px";
        fruitPrice.style.color = "grey";
        fruitName.innerHTML = f.name;
        fruitPrice.innerHTML = "Price:$".concat(f.price, " per lb");
        fruitItem.appendChild(fruitImage);
        fruitItem.appendChild(fruitName);
        fruitItem.appendChild(fruitPrice);
        document.body.appendChild(fruitItem);
    }
}
