/****************************/
console.log("example1");
function example1(){
    var a=[];
    for(var i = 1;i<=3;i++){
        a[i] = function(){
            console.log(i);
        }
    }

    for(var j=1; j<=3; j++){
        a[j]();
    }
}
example1();

function example12(){
    var a=[];
    for(var i = 1;i<=3;i++){
        a[i] = function(n){
            console.log(n);
        }
    }

    for(var j=1; j<=3; j++){
        a[j](j);
    }
}
example12();

example13 = (num) => {
  for(i=1;i<=num;i++){
    console.log(i);
  }
};

/****************************/
console.log("example2");
function example2(i) {
    var x =i;

    return {
        inc: function() {
            x++;
        },
        get: function() {
            return x;
        }
    }
}

var a = example2(10);
var b = example2(20);

console.log(a.get());
console.log(b.get());

a.inc();
b.inc();
b.inc();

console.log(a.get());
console.log(b.get());

/****************************/
console.log("example3");
function example3() {
    console.log(0 == "0");
    console.log(0 === "0");

    console.log([1,2,3] == [1,2,3]);
    console.log([1,2,3] === [1,2,3]);

    var a;
    if(a){
        console.log(true);
    }
    else{
        console.log(false);
    }

    a=0;
    if(a){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

example3();

/****************************/
console.log("example4");
var a=1;
var window = {a:2};
var b = {
    a:3,
    foo: function(){
        console.log(this.a);
    }
}

var f=b.foo;
f();

var f2= () => b.foo();
f2();

var f3= b.foo;
f3.call({a:4});

/****************************/
console.log("example5");
function example5(){
  if(false){
      var a=1;
  }
  console.log(a);
}

var a=2;
example5();

/******************************/
console.log("example6");
console.log("One");
setTimeout(()=> {console.log("Two")}, 0);
console.log("Three");

let i=1;
//while(true){    
while(i<7){
    console.log(i++);
}

console.log('Four');

/******************************/
console.log("example7");
const aa = {
    i: 1,
    toString: function () {
      return aa.i++;
    }
  }
  
if(aa==1 && aa==2 && aa==3){
    console.log('TRUE');
}

/******************************/
console.log("example8");
let arr=[1,2,3,4,5,6,7];
let arr2= arr.filter((x)=>x>3);
console.log(arr2);

function myFilter(arr, func){
    return arr.filter(func);
}

let arr3= myFilter(arr, (x)=>x>3);
console.log(arr3);

/******************************/
console.log("example9");