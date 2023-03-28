//leetcode原题,LRU缓存功能
//使用类方法实现，需要有两个方法，分别是get与put方法
class LRUcache {
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map()
    }
    get(key) {
        if (this.map.has(key)) {
            let res = this.map.get(key)
            this.map.delete(key)
            this.map.set(key, res)
            return res
        }
        else {
            return -1
        }
    }
    put(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key)
        }
        this.map.set(key, value)
        if (this.map.size > this.capacity) {
            this.map.delete(this.map.keys().next().value)
        }
    }
}