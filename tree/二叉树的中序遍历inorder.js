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
const re_inorder=(root)=>{
    if(!root){return ;}
    re_inorder(root.left)
    console.log(root.val)
    re_inorder(root.right)
}

//re_inorder(bt)

//非递归版
const inorder=(root)=>{
    if(!root){return ;}
    const stack=[]
    let p=root
    while(stack.length || p){
        //先把所有左子树推入栈中
        while(p){
            stack.push(p)
            p=p.left
        }
        const n=stack.pop()
        console.log(n.val)
        p=n.right
    }
}

inorder(bt)