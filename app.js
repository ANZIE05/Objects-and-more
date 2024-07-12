// // OBJECT (object is a combination of key/value pair)
// let personBio: {
// //  (key) (type)
//     name: string;
//     age: number;
//     adress: string;
//     city: string;
// } = {
// //  (key)  (value)
//     name: "Meerab",
//     age: 22,
//     adress: "clifton A45",
//     city: "Karachi"
// }
// console.log(personBio);
// console.log(personBio.name); // access the value using . notation
// console.log(personBio["name"]); // access the value using [] notation
// // if I want to update or override the value from original value
// personBio.name = "Anaya"; 
// console.log(personBio.name);
// // //                                        xxxxxxxxxxxxxxxxxxxxxxxxxxxx
// // TYPE ALIAS (make one time variable type for mltiple references )
// type TPerson = {
//     name: string;
//     age: number;
//     address: string;
// } 
// let person1:TPerson =
// {
//     name: "Zara",
//     age: 16,
//     address: "Karachi"
// }
// let person2:TPerson =
// {
//     name: "Maha",
//     age: 18,
//     address: "Lahore"
// }
// let person3:TPerson =
// {
//     name: "Saba",
//     age: 20,
//     address: "Islamabad"
// }
// console.log(person1);           // OR
// console.log(person1.age);
// console.log(person1["age"]);
// console.log(person2);
// console.log(person3);
// // TYPE ALIAS (example with functions)
// type TOperation =(a: number, b: number) => number;
// const add: TOperation = (a, b) => a + b;
// const subtract: TOperation = (a, b) => a - b;
// console.log(add(2, 3));
// console.log(subtract(10,5));
// //                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// // TYPE LITERALS (we give only "values" to variable either it can be string or number)
// let carModels: "civic" | "nissan patrol" | "mercedez" | "audi" | "pajero" = "audi";
// console.log(carModels);
// //                      output: audi
// // // TYPE UNION (we put only "types" in variable either it can be string or number)
// let age: string | number = 25;
// console.log(age);
// //                          "OR"
// let age2: string | number;
// age2 ="twenty five";
// console.log(age2);
// //                                       xxxxxxxxxxxxxxxxxxxxxxxxxxx
// //  ENUMS (enum is the set of value which can return both name and index no.)
// //                                       ===========(extact value with name)============
// enum stationary {
//     pencil = "pencil", eraser = "eraser", ruler = "eraser", sharpner = "sharpner", marker = "marker"
// } 
// let school: stationary = stationary ["marker"]                 // OR
// let school1: stationary = stationary.marker
// console.log(school);
// //                   output: marker
// //                                         ========(extract value with index no.)=========
// enum studentNames {
//         maha,     //0 
//         gull,     //1
//         mehtaab,  //2
//         baala     //3
//     } 
//     console.log(studentNames[2]);
//     //    output: mehtaab
// //                                ==========(access key by the base of value)==========
// enum CoffeeType {
//     espresso, //=>(value)
//     latte,
//     americano,
// }
// let flavours: string = CoffeeType[1];
// console.log(flavours);           // output: latte
// //                            ===========(access value by the base of key)===========
// enum CoffeeType1 {
//     espresso1, //0 =>(key)
//     latte2,    //1
//     americano3,//2
// }
// let flavours1: CoffeeType1 = CoffeeType1.latte2;
// console.log(flavours1);       // output: 1
// //                                       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// //  CONST ENUM (cant extract the value with index no. it only extracts with the value name)
//     const enum trafficSignals {
//         red = "stop",
//         green = "go",
//         yellow = "ready"
//     } 
//     console.log(trafficSignals.red);
//     //       output: stop
// //                                       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// // INDEX SIGNATURE (if we dont know how many properties are in our key so we use this method. key syntex down below)
// let personBio1: {[key: string]: string | number | boolean} = {
//               // key syntex
//     name: "salman",
//     age : 25,
//     height: 6,
//     address: "karachi",
//     student: true
// }
// console.log(personBio);
// //                                   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// // TYPE INTERSECTION (it merges/combines two types with the sign of "&")
// type Tstudent = {
//     name: string;
//     age: number;
//     available: boolean;
//     id: number;
// }
// type Tteacher = {
//     tName: string;
//     position: string;
//     tId: number
// }
// type Tschool = Tstudent & Tteacher
// let college: Tschool = {
//     name: "laiba",
//     tName: "hamza",
//     age: 20,
//     available: true,
//     position: "TA",
//     tId: 1001,
//     id: 1001,
// }
// console.log(college);
// //                      ***************************************
//                 JSON FORMAT
var personDetail = {
    //  (key)  (value)
    "name": "Meerab",
    "age": 22,
    "adress": "clifton A45",
    "city": "Karachi"
};
console.log(personDetail);
