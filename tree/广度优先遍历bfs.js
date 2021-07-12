const tree={
    val:'a',
    children:[
        {
            val:'b',
            children:[
                {
                    val:'d',
                    children:[],
                },
                {
                    val:'e',
                    children:[],
                }
            ],
        },
        {
            val:'c',
            children:[
                {
                    val:'f',
                    children:[],
                },
                {
                    val:'g',
                    children:[],
                }
            ],
        }
    ],
}

const bfs=(root)=>{
    const q=[root]//初始化一个队列，并把root入队
    while(q.length>0){
        const n=q.shift()//队头出队并访问
        console.log(n.val)
        n.children.forEach(child=>{
            q.push(child)//把队头的children都入队
        })
    }
}

bfs(tree)