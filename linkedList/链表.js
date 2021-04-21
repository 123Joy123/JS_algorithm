let a={val:'a'};
let b={val:'b'};
let c={val:'c'};
let d={val:'d'};
a.next=b;
b.next=c;
c.next=d;

//遍历链表
let p=a;
while(p){
    console.log(p.val);
    p=p.next;
}

//插入
let e={val:'e'};
c.next=e;
e.next=d;

//删除
c.next=d;//e被删除了