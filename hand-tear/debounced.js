//节流函数与防抖函数

//1. 节流函数
//节流函数用通俗的意思讲就是在同一时间内执行多次，之会在规定时间内执行一次
function throttle(fn, delay = 500) {
    let _timer
    return function (...args) {
        if (_timer == null) {
            fn.apply(this, args)
            setTimeout(() => {
                _timer = null
            }, delay);
        }
    }
}