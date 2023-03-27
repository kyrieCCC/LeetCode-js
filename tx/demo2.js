
//给定一颗满树，给出层序遍历，
//每当遇到叶子节点，连续输出"YES" "LEAF"
//若非叶子节点，则输出"YES"以及对应的左右子节点

const myFun = (n, arr, len, p1) => {
    const num = 2**(n - 1) - 1
    const notNode = arr.slice(num, arr.length)
    const map1 = new Map()
    for (let i = 0; i < notNode.length; i++){
        map1.set(parseInt(notNode[i]), parseInt(notNode[i]))
    }
    const node = arr.slice(0, num)
    const map2 = new Map()
    for (let i = 0; i < node.length; i++){
        map2.set(parseInt(node[i]), parseInt(node[i]))
    }
    let flag = 0, cur = 1
    for (let j = 0; j < len; j++){
            if (map1.has(parseInt(p1[j]))) {
                console.log('YES')
                console.log('LEAF')
            }
            if (map2.has(parseInt(p1[j]))) {
                cur = parseInt(p1[j] * 2)
                console.log('YES')
                console.log(cur, cur + 1)
        }
        if (!map1.has(parseInt(p1[j])) && !map2.has(parseInt(p1[j]))) {
            console.log("NO")
        }
    }
}

const arr = ['1', '2', '3']
const arr2 = [1, 3, 5]
// myFun(2, arr, arr2.length, arr2)
