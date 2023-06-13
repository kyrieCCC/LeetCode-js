// 771. 宝石与石头
// 给你一个字符串 jewels 代表石头中宝石的类型，另有一个字符串 stones 代表你拥有的石头。
// stones 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
// 字母区分大小写，因此 "a" 和 "A" 是不同类型的石头。
// 输入：jewels = "aA", stones = "aAAbbbb"
// 输出：3
// 输入：jewels = "z", stones = "ZZ"
// 输出：0

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) { 
    const arr = jewels.split('')
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < stones.length; j++){
            if(arr[i] == stones[j]) {
                count++
            }
        }
    }
    return count
}
// 双指针，一个指向宝石，一个指向石头
// 随后开始判断，当指向这个宝石的时候，石头堆里有没有对应的值
// 如果有就count++
// 最后返回count值

const jewels1 = 'aA', stones1 = 'aAAbbbb'
const jewels2 = 'z', stones2 = 'ZZ'
console.log(numJewelsInStones(jewels1, stones1));
console.log(numJewelsInStones(jewels2, stones2));