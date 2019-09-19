// //////////////////////////// 1.(a)   ////////////////////////////////          
// for(var i=0;i<10;i++){
//     console.log("i>>>",i);
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }

//output:0123456789 after 1 second 10101010101010101010
//concept:as var is a function scoped hence loop i will be working till 9 and afer 1 second setTimeout function will be called and it will print 10 times 10.


//////////////// /////////////// 1(b) /////////////////////////
// for(let j=0;j<10;j++){
//     console.log("j>>>",j);
//     setTimeout(function(){
//         console.log(j);
//     },1000)

// }
//output:0123456789 after 1 second 0123456789
//concept:as let  is a blocked scoped hence loop j will be working till 9 and afer 1 second setTimeout function will be called and it will print 0to9 because let is assigned in the loop which will in each loop create a new memory and prints.


/////////////////////////////////2.(a)/////////////////////////////////////

// function abc(){
//     console.log(b);
// }
// let b='delta';
// abc();

//output:delta
//concept: it is because first variable is declared and then function is called hence it will display the variable

////////////////////////////////////2(b).////////////////////////////////////////
// function abc(){
//     console.log(b);
// }
// abc();
// let b='delta';

//output: b is not defined
//concept: it is because firstly function is declared and  it will go directly to the function and console and when it will be printed then it will show undefined  because the variable is defined after calling.


/////////////////////////// 3./////////////////////////////////////
// var days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
// var d=new Date();
// console.log("today is:"+days[d.getDay()]);
// console.log("current time is:"+d.getHours()>=12?d.getHours()%12:d.getHours()+"."+d.getMinutes()+"."+d.getSeconds());

// output:today is:monday
//        current time is:12.54.6    
//concept:by using getDay() function we can get the day as digits hence to give it as name we  uses the concept of arrays and stores the name as index.
// and for time getHours and getMinutes and getSeconds() we have used.and done %12 for getting time in 12 hours format.

/////////////////////////4.//////////////////////////////////
// the "splice" method of an array object  adds add/or removes elements from an array.
// concept:array.splice(index, howmany, item1, ....., itemX)

////////////////////////////5.////////////////////////////////////////

//answer:c(this).

////////////////////////////6/////////////////////////////////////////

// var a=10;  //function scope as when it will be inside the function only it will work else of no use
// let func=()=>{
//     console.log(a);
//     for(var a=1;a<5;a++){
//         console.log(a);
//     }
//     console.log(a);
// }
// func();

// output:undefined 
//        01234
//        5
//conecpt:as before func() let is used means it is blobked scope and no any variable is defined inside thet blocked scope hence it will print undefined
//        and loop is done which will loop till 4 and after then it will come out of loop  and console the last one 5.





///////////////////////////////////7.////////////////////////////////

// var x=[typeof x, typeof y][1];
// console.log(typeof typeof x);

//output:string

/////////////////////////////8.///////////////////////////

// var a=("success" && "not success")||1
// console.log(a);
// output:"not success"
//concept:it is  because it will check first between two or's and chooses the first one and then it will check between 'and' chooses the the second one which is stored in the memory at last