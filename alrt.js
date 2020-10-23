let name;
let admin;
name = "John";
admin = name;
alert(admin);
let name = prompt("name", '');
alert(name)

let Username = prompt("who are you?", '');
if (Username === "stunna") {
    let password = prompt("enter password?", '');
    if (password === "Themaster") {
        alert("welcome");
    } else if (password == '' || password == null) {
        alert("canceled");
    } else {
        alert("wrong password");
    }

} else if (Username == '' || Username == null) {
    alert("canceled");
} else {
    alert("i dont know you");
}
let num;
do {
    num = prompt("enter a number greater than 100", 0)

} while (num <= 100 && num)
let n = 10;
for (let i = 2; i <= n; i++) {
    if (i % 2 == 0) continue
    alert(i);
}
let browser;
if (browser == 'edge') {
    alert("you've got the edge")
} else if (browser == 'chrome' ||
    browser == 'firefox' ||
    browser == 'safari' ||
    browser == 'opera') {
    alert("we support these browsers too")
} else {
    alert("we hope that this page looks ok!!")
}
let a = +prompt("a?", '');
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2, 3');
        break;
    default:
        alert("i dont know")
}

function mini(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;

    }

}
alert(mini(2, 0))

function pow(x, n) {
    let result = x;
    for (i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
let x = prompt("x?", '');
let n = prompt("n?", '');
if (n < 1) {
    alert(`power of ${n} is not supported, use a positive integer`)
} else {
    alert(pow(x, n));
}

function sayhi() {
    alert("hello");
}
alert(sayhi);

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}

function showOk() {
    alert("you agreed");
}

function showCancel() {
    alert("you canceled the execution");
}
ask("do you agree?", showOk, showCancel);

// arrow functions

let ask = (question, yes, no) => confirm(question) ? yes() : no();
ask("do you agree?",
    () => alert("you agreed"),
    () => alert("you canceled the execution")
);

objects

const user = {
    name: "stunna"
}
user.name = "ahmed";
alert(user.name);
let user = {};
user["liked birds"] = true;
alert(user["liked birds"]);

let fruit = prompt("which fruit do you want too buy?", 'apple');
let bag = {
    [fruit]: 5
}
alert(bag.apple);

// using the same variables as a property

function makeUser(name, age) {
    return {
        // name: name,
        // age: age
        name,
        age,
    }
}
let user = makeUser("stunna", 30);
alert(user.name);

// in operator

let user = { name: "john", age: 30 }
alert("age" in user);
alert("surname" in user);

// for....in loop
// for objects

let user = {
    name: "john",
    age: 30,
    isAdmin: true
}
for (keys in user) {
    alert(keys);
    alert(user[keys])
}

let user = {}
user.name = "john";
user.surname = "smith";
user.name = "peter";
delete user.name;

let salaries = {
    "john": 100,
    "ann": 160,
    "peter": 130
};
let sum = 0;
for (let key in salaries) {

    sum += salaries[key];

};
alert(sum);

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeOf(menu[key] == 'number')) {
            menu[key] *= 2;
        } else {
            menu.key
        }
    }

}
alert(menu.width);

// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

let calculator = {
    // ... your code....
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read(a, b) {
        this.a = +prompt("a?", '');
        this.b = +prompt("b?", '')


    }


}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;


    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }

}
ladder.up().up().up().up().down().showStep();
constructors
let obj = {}

function A() {
    return obj;
}

function B() {
    return obj;
}
let a = new A;
let b = new B;
alert(new A == new B);

function Calculator() {
    this.sum = function() {
            return this.a + this.b;
        },
        this.mul = function() {
            return this.a * this.b;
        },
        this.read = function() {
            this.a = +prompt("a?", '');
            this.b = +prompt("b?", '');
        }

}
let calculator = new Calculator();
calculator.read();
alert("sum=" + calculator.sum());
alert("mul=" + calculator.mul());

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("how much to add?", '');


    }
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);