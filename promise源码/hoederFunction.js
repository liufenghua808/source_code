//高阶函数：函数参数如果是函数或者这个而函数返回一个新的函数，我们就叫它告诫函数

//AOP 面向切片编程

//before函数

function say(){

}
Function.prototype.before=function(beforeFunc){
   //this  =>say
    return ()=>{
        beforeFunc();
        this();
    }
}

let beforeSay = say.before(()=>{

})
beforeSay();