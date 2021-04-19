//异步队列任务
//计算最近请求次数
let queue=[];
queue.push(1);//入队
queue.push(2);
let item1=queue.shift();//出队
let item2=queue.shift();
