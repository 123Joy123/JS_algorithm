let T=parseInt(readline())
while(T){
    let n=parseInt(readline())
    let a=readline().split(' ')
    let arr=[]
    for(let i=0;i<n;i++){
        arr.push(parseInt(a[i]))
    }
    let map=new Map()
    for(let item of arr){
        if(map.has(item)){
            let temp=map.get(item)
            temp++
            map.set(item,temp)
        }else{
            map.set(item,1)
        }
    }
    let min=9999
    for(let key in map){
        //print("key:"+key)
        //print("value"+map[key])
        if(map[key]===1){
            let temp1=parseInt(key)
            if(temp1<min){
                min=temp1
            }
        }
    }
    if(min===9999){
        //print(-1)
    }else{
        //print(min)
    }
    T--
}