// let arr=[1,2,3,4,5,6,7]
// let newarr=arr.map((item)=>item*2)
// console.log(newarr)

// let evennum=arr.filter((item)=>item%2===0)
// console.log(evennum)

// let sum=arr.reduce((x,y)=>x+y,0)
// console.log(sum)

// let mul=arr.reduce((x,y)=>x*y,1)
// console.log(mul)

// const student = [
//     {name:"alice",score:50},
//     {name:"bob",score:60},
//     {name:"charlis",score:70},
//     {name:"rahul",score:90},
//     {name:"david",score:20},
// ]

// student.map((item)=>{
//     console.log("score : "+item.score)
// })

// let sum=student.filter((i)=>i.score>60).reduce((x,y)=>x+y.score,0)
// console.log(sum)
// let sumadd=student.filter((i)=>i.score>60).map((p)=>p.score+10).reduce((x,y)=>x+y,0)
// console.log(sumadd)

// let num = [1,2,3,4,5,5]
// num.forEach((x)=>{
//     console.log(x*3)
// })

setTimeout(()=>{
    console.log("1")
    setTimeout(()=>{
        console.log("2")
        setTimeout(() => {
            console.log("3")
        },3000);
    },2000)
},1000)