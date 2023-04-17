
function animation(duration, from, to, doFuntion) {
    const dis = to - from
    const speed = dis / duration
    const startTime = Date.now()
    let value = from
    doFuntion(value)

    function _run() {
        const now = Date.now()
        const time = now - startTime
        if (time >= duration) {
            value = to
            doFuntion(value)
            return
        }
        const d = time * speed
        value = from + d
        doFuntion(value)
        requestAnimationFrame(_run)
    }
    requestAnimationFrame(_run)
}