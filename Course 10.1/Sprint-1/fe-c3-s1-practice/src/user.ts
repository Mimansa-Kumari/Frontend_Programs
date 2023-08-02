
//Define User class
class User {
//Field declartions
private _username : string;
private _password : string;
private _contact : string;
private _email : string;
private _address : string;
//constuctor 
constructor(_username : string,_password : string,_contact : string,_email : string,_address : string)
{
    this._username =_username;
    this._password =_password;
    this._contact = _contact;
    this._email = _email;
    this._address = _address;
}
//getter and setter methods
get username():string
{
    return this._username;
} 
get password():string
{
    return this._password;
}
set contact(value:string)
{
    this._contact=value;
}
get contact():string
{
    return this._contact;
}
set email(value:string)
{
    this._email=value;
}
get email():string
{
    return this._email;
}
set address(value:string)
{
    this._address=value;
}
get address():string
{
    return this._address;
}

}

//Fetch form values using Object.fromentries()
const submitUser = (formData: any) => {
    let data = new FormData(formData);
    let form = Object.fromEntries(data);
    const users : User = new User(<string>form.username,<string>form.password,<string>form.contact,<string>form.email,<string>form.address);
    //call registerUser method with the constructed User object
    registerUser(users);
}

//POST data using fetch() api
function registerUser(users: User) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(users)
    };
    fetch('http://localhost:3000/users/', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data) );
    //Dispay welcome message after successful registration
    window.alert(`Thanks ${users.username},\nYou will reecvieve notifications to this ${users.email}`);
}