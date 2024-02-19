var add=(a,b)=>{
    var sum=a+b
    console.log(sum)
    console.log('sum is $(sum)')

}
add(10,30)
var[a,b,c,d]=["apple","orange","banana","grapes"]
console.log(a)
console.log(b)

var a=[1,2,3]
var b=[4,5,6]
var c=[...a,...b];
console.log(c)

var[a,b,...t]=[2,3,4,5,6]
console.log(t)
console.log("first number of t is"+t[0]);