
const fs = require ("fs")

fs.writeFileSync("data1.txt","Dina")

//console.log(fs.readFileSync("data1.txt") .toString())

fs.appendFileSync("data1.txt", "ahmed ali")

//console.log(fs.readFileSync("data1.txt") .toString())

const x = require ("./alldata")



const validator = require("validator")

//console.log(procee.argv[2])
const command1 = process.argv[2]

//if (command1==='add'){console.log("you adde an item")}
//else if (command1==="delete"){console.log("you deleted an item")}
//else{console.log("error")}

console.log(x.fName, x.lname ,x.age ,x.City)

const yargs = require ("yargs")
const { Console } = require("console")

yargs.command({
    
command : "add",
describe : "to add an item",
builder :{
    fname : {
        describe : "this is the first name in add command",
        demandoption : true,
        type : "string",},
    lname : {
        describe: "this is the last name in add command",
        demandoption: true,
        type: "string",}, 
    age :{
        describe: "this is the age in add command",
        demandoption: true,
        type : "number",},
    city :{
        describe: "this is the city in add command",
        demandoption: true,
        type : "string",},
},

handler : ()=> {
    console.log("you have already added an item") }
})

yargs.command({
    command:"delete",
    describe: "to delete an item",
    handler:()=> {
        console.log("you have already deleted an item")
    }
})
console.log(yargs.argv)

const person1={
    fname:"adel",
    lname : "ahmed",
    age : "40",
    city :"cairo",
}

const person1JSON= JSON.stringify(person1)
console.log(person1JSON)

const person1OBJ = JSON.parse(person1JSON)
console.log(person1OBJ)

fs.writeFileSync("data.json", person1JSON)


