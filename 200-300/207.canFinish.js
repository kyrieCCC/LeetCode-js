// 207. 课程表
// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，
// 表示如果要学习课程 ai 则 必须 先学习课程  bi 。
// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false
// 输入：numCourses = 2, prerequisites = [[1,0]]
// 输出：true
// 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。


var canFinish = function(numCourses, prerequisites) {
    const isDegree = new Array(numCourses).fill(0) //入度数组
    const map = {} //邻接表
    for (let i = 0; i < prerequisites.length; i++){
        isDegree[prerequisites[i][0]]++
        if (map[prerequisites[i][1]]) { //判断是否为邻接，然后放入邻接表中
            map[prerequisites[i][1]].push(prerequisites[i][0])
        }
        else {
            map[prerequisites[i][1]] = [prerequisites[i][0]] //需要注意，邻接表的values为数组
        }
    }
    let count = 0
    const queue = []
    for (let j = 0; j < isDegree.length; j++){
        if (isDegree[j] === 0) {
            queue.push(j)
        } //把没有入度的值单拎出来
    }
    while (queue.length) {
        const selected = queue.shift()
        count++
        const toEnQueue = map[selected] //找到邻接表中对应值
        if (toEnQueue && toEnQueue.length) {
            for (let k = 0; k < toEnQueue.length; k++){
                isDegree[toEnQueue[k]]-- //入度减一
                if (isDegree[toEnQueue[k]] === 0) {
                    queue.push(toEnQueue[k])
                }
            }
        }
    }
    return count == numCourses
};

//本道题运用到了数据结构中的图的知识，包括邻接表和入度出度等概念
//我们首先创建一个数组和一个空的邻接表
//循环初始数组，我们记录下来每一个值的入度和出度还有邻接表
//记录下来我们取出入度为0的值，因为这些值选课的时候没有前置条件，可以直接选择
//取出入度为0的数值，循环到最后判断是否入度为0， 为0就放到queue当中
//最后我们比较我们预期的选课数是否与实际选科数相同，相同则可行


const numCourses = 2, prerequisites = [[1, 4], [2, 4], [3, 1], [3, 2]]
console.log(canFinish(numCourses, prerequisites))