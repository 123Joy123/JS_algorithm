const bt={
    val:1,
    left:{
        val:2,
        left:{
            val:4,
            left:null,
            right:null,
        },
        right:{
            val:5,
            left:null,
            right:null,
        },
    },
    right:
    {
        val:3,
        left:{
            val:6,
            left:null,
            right:null,
        },
        right:{
            val:7,
            left:null,
            right:null,
        },
    },
}

//递归版
const re_preorder=(root)=>{
    if(!root){return ;}
    console.log(root.val)
    re_preorder(root.left)
    re_preorder(root.right)
}

re_preorder(bt)

//非递归版
const preorder=(root)=>{
    if(!root){return ;}
    const stack=[root]
    while(stack.length){
        const n=stack.pop()
        console.log(n.val)
        if(n.right) stack.push(n.right)
        if(n.left) stack.push(n.left)
        //栈是后进先出，所以先让right入栈
    }
}

//preorder(bt)