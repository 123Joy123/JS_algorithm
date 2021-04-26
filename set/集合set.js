//去重
const arr=[1,1,2,3]
const arr2=[...new Set(arr)]//一种set转数组的方法

console.log(arr2)

//判断元素是否在集合中
let set=new Set(arr)
const has=set.has(2)

//求交集
let set2=new Set([2,3])
let intersection=new Set([...set].filter(item=>set2.has(item)))
//先把set转成数组，再过滤set2中有的

//求差集
let difference=new Set([...set].filter(item=>!set2.has(item)))

//set的别的一些基本操作
let mySet=new Set()
mySet.add(1)
mySet.add(2)
mySet.add('text')

mySet.delete(2)

//set中key和value是一样的值
for(let [key,value] of mySet.entries()) console.log(key,value)

let myArr=Array.from(mySet)//有一种set转数组的方法