//让我们来手撕一下apply吧 0.0
function ppp(arr) {
    console.log('arr is ', arr)
    console.log('this', this)
}
Function.prototype.myApply = function (obj, arr) {
    var obj = obj || window, args = []
    let result = ''
    obj.fn = this
    if (Array.isArray(arr)) {
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

ppp.myApply({ x: 10 }, [1, 2, 3])
