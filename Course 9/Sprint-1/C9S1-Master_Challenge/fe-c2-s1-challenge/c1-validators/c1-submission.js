let firstName = "James";
let lastName = "Smith";
let age = 34;
let isMarried = true;
let city = "San Jose";
let state = "California";
let postalCode = "CA";

// Provide solution code here for Validating FirstName
    function validationForFirstName(firstName)
    {
        if(firstName=="")
        {
            console.log(`First Name value must not be undefined`);
        }
        else if(typeof(firstName)!="string")
        {
            console.log(`First Name value must be of type String`);
        }
        else
        {
            console.log(`First Name = ${firstName}`);
        }
    }

// Provide solution code here for Validating LastName
    function validationForLastName(lastName)
    {
        if(typeof(lastName)!="string")
        {
            console.log(`Last Name value must be of type String value`);
        }
        else
        {
            console.log(`Last Name = ${lastName}`);
        }
    }

// Provide solution code here for Validating Age
    function validationForAge(age)
    {
        if(age == "undefined")
        {
            console.log(`Age value must not be undefined`);
        }
        else if(typeof(age)!="number")
        {
            console.log(`Age value must be of type Number`);
        }
        else if(age<18 && age>60)
        {
            console.log(`Age value should be between 18 and 60`);
        }
        else
        {
            console.log(`Age = ${age}`);
        }
    }

// Provide solution code here for Validating isMarried
    function validationForIsMarried(isMarried)
    {
        if(typeof(isMarried)!="boolean")
        {
            console.log(`IsMarried value must be of type Boolean`);
        }
        else
        {
            console.log(`is Married = ${isMarried}`);
        }
    }

// Provide solution code here for Validating City
    function validationForCity(city)
    {
        if(typeof(city)!="string")
        {
            console.log(`City value must be of type String`);
        }
        else
        {
            console.log(`City = ${city}`);
        }
    }

// Provide solution code here for Validating State
    function validationForState(state)
    {
        if(typeof(state)!="string")
        {
            console.log(`State value must be of type String`);
        }
        else
        {
            console.log(`State = ${state}`);
        }
    }
 
// Provide solution code here for Validating Postal Code
    function validationForPostalCode(postalCode)
    {   if(postalCode == "")
        {
            console.log(`Postal Code value must not be undefined`);
        }
        else if(typeof(postalCode)!="string")
        {
            console.log(`Postal Code value must be of type String`);
        }
        else
        {
            console.log(`Postal Code = ${postalCode}`);
        }
    }
 
    console.log(``);
    validationForFirstName(firstName);
    validationForLastName(lastName);
    validationForAge(age);
    validationForIsMarried(isMarried);
    validationForCity(city);
    validationForState(state);
    validationForPostalCode(postalCode);