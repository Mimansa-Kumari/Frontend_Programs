// Task – 1: Define Function drawBox() to Draw Box
/*
    The function should accept DOM element as the parameter.
    Using DOM methods and properties, the function should create div and 
    provide it with style properties: width, height, border idth and border style
    The div element should be appended to the element passed as parameter
    The function should then return the styled div element.
*/
function drawBox() {
    let id = document.getElementById("animated-header");
    let headerBox = document.createElement("div").setAttribute("id","headerBox");
    headerBox.style.width="100vw";
    headerBox.style.height="100px";
    headerBox.style.border="5px solid";
    id.appendChild(headerBox);
}
// Task 2 – Define Function changeBorderColor() to Change Color of Box Border
/*
    The function should accept DOM element as the parameter whose border color 
    needs to be changed.
    Using DOM methods and properties, the function should style the element with 
    orange color to its border.
    The function should then return the styled div element.
*/
function changeBorderColor() {
    let headerBox = document.getElementById("headerBox");
    headerBox.style.borderColor="Orange";
}
// Task 3 – Define Function makeBorderRounded to Make Box Corners Rounded
/*
    The function should accept DOM element as the parameter whose border's 
    corners need to be rounded.
    Using DOM methods and properties, the function should style the element with 
    radius of its border set to 15px.
    The function should then return the styled div element.
*/
function makeBorderRounded() {
    let headerBox = document.getElementById("headerBox");
    headerBox.style.borderRadius="15px";
}


// Task 4 – Define Function fillColor() to Fill the Box with a Color
/*
    The function should accept DOM element as the parameter whose background color 
    needs to be changed
    Using DOM methods and properties, the function should style the element with 
    background color cadet blue
    The function should then return the styled div element.
*/
function fillColor() {
    let headerBox = document.getElementById("headerBox");
    headerBox.style.backgroundColor="cadetblue";
}
// Task 5 – Define Function displayHeading() to Enter Text in Box
/*
    The function should accept DOM element as the parameter within which text 
    needs to be entered.
    The heading text should be displayed within `h1` element.
    The text to be displayed should be AMC Entertainment.
    The color of the text should be orange and should be centrally aligned.
    The function should then return the div element with the text.
*/
function displayHeading() {
    let headerBox = document.getElementById("headerBox");
    let heading = document.createElement("h1").setAttribute("id","heading");
    heading.innerHtml="AMC Entertainment";
    headerBox.style.paddingTop="15px";
    heading.style.textAlign="center";
    heading.style.color="orange";
    headerBox.appendChild(heading);
}


// Task 6 - Define Function promiseAnimation() That Returns Promise
/*
    The function should take interval (for timeout), animate (callback parameter) 
    and element as its parameters.
    The function should create and return the Promise object.
    The promise in its executor function should call the setTimeout() method.
    This method should call the animate() function passed as parameter to the promiseAnimation() function.
    The animate() function should be called with element parameter to apply the animation effect on it.
    The promise should resolve with the element returned by the animate() function.
*/
function promiseAnimation(interval, animate, element) {
    return new Promise((res,rej)=>{
       setTimeout(()=>{
        res();
       },interval)
    })
}

// Task 7 – Consume Promise
/*
    Use Promise Chaining.
    Begin with call to promiseAnimation() function with interval of 1000 ms, 
    drawBox (callback), body of document as parameters.
    The promise when resolved would call the handler associated using then() 
    method of Promise returned.
    The handler should make next call to promiseAnimation() function whose returned 
    promise will be chained using the next call to .then() method
    Each handler in the chained promises will call the animation methods to apply 
    the animation effect on the element being passed to the handler method.
*/
promiseAnimation()
    .then(() => {
        drawBox();
        return promiseAnimation(1000);
    })
    .then(()=>{
        changeBorderColor();
        return promiseAnimation(1000);
    })
    .then(()=>{
        makeBorderRounded();
        return promiseAnimation(1000);
    })
    .then(()=>{
        fillColor();
        return promiseAnimation(1000);
    })
    .then(()=>{
        displayHeading();
        return promiseAnimation(1000);
    })