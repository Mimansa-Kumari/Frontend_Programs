"use strict";
//Define User class
class User {
    //constuctor 
    constructor(_username, _password, _contact, _email, _address) {
        this._username = _username;
        this._password = _password;
        this._contact = _contact;
        this._email = _email;
        this._address = _address;
    }
    //getter and setter methods
    get username() {
        return this._username;
    }
    get password() {
        return this._password;
    }
    set contact(value) {
        this._contact = value;
    }
    get contact() {
        return this._contact;
    }
    set email(value) {
        this._email = value;
    }
    get email() {
        return this._email;
    }
    set address(value) {
        this._address = value;
    }
    get address() {
        return this._address;
    }
}
//Fetch form values using Object.fromentries()
const submitUser = (formData) => {
    let data = new FormData(formData);
    let form = Object.fromEntries(data);
    const users = new User(form.username, form.password, form.contact, form.email, form.address);
    //call registerUser method with the constructed User object
    registerUser(users);
};
//POST data using fetch() api
function registerUser(users) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(users)
    };
    fetch('http://localhost:3000/users/', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    //Dispay welcome message after successful registration
    window.alert(`Thanks ${users.username},\nYou will reecvieve notifications to this ${users.email}`);
}
