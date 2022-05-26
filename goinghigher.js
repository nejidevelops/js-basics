function number(){
    console.log(42);
}

number()

let lap1 = 34
let lap2 = 33
let lap3 = 36

function sumLap(){
    // console.log(lap1 + lap2 + lap3);
    // or you can do this

    totalLap = lap1 + lap2 + lap3;
    console.log(totalLap)
}

sumLap()

let lapsCompleted = 0;

function lapsIncreased(){
    lapsCompleted = lapsCompleted + 1;
}

lapsIncreased()
lapsIncreased()
lapsIncreased()
console.log(lapsCompleted)

let username = "Newton"
let message = "You have three new notifications";

let messageToUser = message + ', ' + username + '!' 

console.log(messageToUser)

let name = "Bofulo"
let greeting = "Hi, my name is "

let myGreeting = greeting + name;

console.log(myGreeting)

let points = 4
let bonusPts = "10"

let totalPoints = points + bonusPts;

console.log(totalPoints)

// strings vs numbers
console.log(4 + 5) //9
console.log("2" + "4")  //24
console.log("5" + 1)  //51
console.log(100 + "100") //100100

