"use strict"
// 1
class Account {
    constructor({email, login}){
        this.email = email;
        this.login = login;
    }
    getInfo(){
        return `Login: ${this.login}, email: ${this.email}`;
    }
}
console.log(Account.prototype.getInfo); // function

const mango = new Account({
 login: 'Mangozedog',
 email: 'mango@dog.woof',
});

console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
 login: 'Poly',
 email: 'poly@mail.com',
});

console.log(poly.getInfo()); // Login: Poly, Email: poly@mail.com
// 2
class User{
    constructor({name, age, followers}){
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo(){
        return `User ${this.name} is ${this.age} and has ${this.followers} followers`
    }
}
const mangoTwo = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
   });
   
   console.log(mangoTwo.getInfo()); // User Mango is 2 years old and has 20 followers
   
   const polyTwo = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
   });
   
   console.log(polyTwo.getInfo()); // User Poly is 3 years old and has 17 followers
// 3
class Storage{
    constructor(items){
        this.items = items;
    }
    getItems(){
        return this.items;
    }
    addItem(newItem){
     this.items.push(newItem);
     return this.items;
    }
    removeItem(oldItem){
        if (this.items.includes(oldItem)){
            this.items.splice(this.items.indexOf(oldItem), 1);
        }
        return this.items;
    }
}
const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
   ]);
   
   const items = storage.getItems();
   console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
   
   storage.addItem('Дроїд');
   console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
   
   storage.removeItem('Пролонгер');
   console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
// 4
class StringBuilder{
    constructor(value){
        this._value = value;
    }
    get value(){
        return this._value;
    }
    append(str){
        this._value = this._value + str;
        return this._value;
    }
    prepend(str){
        this._value = str + this._value;
        return this._value;
    }
    pad(str){
        this._value = str + this._value + str;
        return this._value;
    }
}
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='