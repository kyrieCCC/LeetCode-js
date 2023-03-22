//让我们来手撕一下apply算法吧 0.0
function ppp(arr) {
    console.log('arr is ', arr)
    console.log('this', this)
}
Function.prototype.myApply = function (obj, arr) {
    var obj = obj || window, args = []
    let result = ''
    obj.fn = this
    if (Array.isArray(arr)) { //判断是否是数组
        args = arr
        result = obj.fn(args)
        delete obj.fn
        return result
    }
    else if (arr === undefined) {
        delete obj.fn
        console.log('arr has problem')
        return this()
    }
    else {
        delete obj.fn
        console.log('ERROR')
    }
}

//apply的原理其实与call类似，区别在于apply传入的第二个参数是一个参数数组
//我们只需要根据这个参数数组对应的进行处理即可
//大概的原理也就是将本来的this改变到myApply传入的对象上

Function.prototype.myNewApply = function(obj, nums){
    var obj = obj || window, args = []
    const cur = this
    obj.fn = cur
    if (Array.isArray(nums)) {
        args = nums
        const res = obj.fn(args)
        delete obj.fn
        return res
    }
}

ppp.myNewApply({ x: 10 }, [1, 2, 3])
