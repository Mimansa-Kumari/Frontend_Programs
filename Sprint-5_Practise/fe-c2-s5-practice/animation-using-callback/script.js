// Task – 1: Define Function drawBox() to Draw Box
/*
    The function should accept DOM element as the parameter.
    Using DOM methods and properties, the function should create div and 
    provide it with style properties: width, height, border idth and border style
    The div element should be appended to the element passed as parameter
    The function should then return the styled div element.
*/
function drawBox() {
    let header = document.getElementById("animated-header");
    let headerBox = document.createElement("div");
    headerBox.setAttribute("id","headerBox");
    headerBox.style.width="100vw";
    headerBox.style.height="100px";
    headerBox.style.border="5px solid";
    header.appendChild(headerBox);
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
    headerBox.style.borderColor="orange";
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
    let heading = document.createElement("h1");
    heading.setAttribute("id","heading");
    heading.innerText="AMC Entertainment";
    headerBox.style.paddingTop="15px";
    headerBox.style.textAlign="center";
    headerBox.style.color="orange"
    headerBox.appendChild(heading);
}

// Task 6 - Call Functions to Animate After a Delay
/*
    Create nested structure with calls to setTimeout() method
    Each call to setTimeout() should call another setTimeout() method.
    Each callback of setTimeout() should call the animation method the return from 
    which should be passed to the next animation method.
    Observe the Callback Hell Effect.
*/
setTimeout(()=>{drawBox();
    setTimeout(()=>{changeBorderColor();
        setTimeout(()=>{makeBorderRounded();
            setTimeout(()=>{fillColor();
                setTimeout(()=>{displayHeading();
                },1000);
            },1000);
        },1000);
    },1000);
},1000);