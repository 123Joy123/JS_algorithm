const m=new Map()

//增
//    key,value
m.set('a','aa')
m.set('b','bb')

//删
m.delete('b')
m.clear()//整个map清空

//改
m.set('a','aaa')

//查
console.log(m.get('a'))
//查看是否有这个key
console.log(m.has('a'))

//遍历字典的方法
m.forEach((value,key)=>{
    console.log(value,key);
    });