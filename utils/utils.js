/**
 * 节流函数
 * @param callback 需要被节流的函数
 * @param duration 超时节流
 * @returns {(function(): void)|*}
 */
function throttle(callback, duration = 500) {
    //最后执行函数的时间戳
    let lastTime = 0
    return function () {
        //当前时间戳
        const now = new Date().getTime()
        if (now - lastTime >= duration) {
            //利用call()方法，保留原函数的this指向
            callback.call(this, ...arguments)
            lastTime = now
        }
    }
}

export {throttle}