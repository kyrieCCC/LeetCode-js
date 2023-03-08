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

//2. 防抖函数
//防抖函数就是在第一次执行后，等待一定时间，如果在这段时间内又有事件触发，则清空等待时间，重新开始计时
function debounced(fn, delay = 500) {
    let _timer
    return function () {
        clearTimeout(_timer)
        _timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay);
    }
}


