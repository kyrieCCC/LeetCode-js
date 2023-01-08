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
    const isDegree = new Array(numCourses).fill(0)
    const map = {}
    for (let i = 0; i < prerequisites.length; i++){
        isDegree[prerequisites[i][0]]++
        if (map[prerequisites[i][1]]) {
            map[prerequisites[i][1]].push(prerequisites[i][0])
        }
        else {
            map[prerequisites[i][1]] = [prerequisites[i][0]]
        }
    }
    let count = 0
    const queue = []
    for (let j = 0; j < isDegree.length; j++){
        if (isDegree[j] === 0) {
            queue.push(j)
        }
    }
    while (queue.length) {
        const selected = queue.shift()
        count++
        const toEnQueue = map[selected]
        if (toEnQueue && toEnQueue.length) {
            for (let k = 0; k < toEnQueue.length; k++){
                isDegree[toEnQueue[k]]--
                if (isDegree[toEnQueue[k]] === 0) {
                    queue.push(toEnQueue[k])
                }
            }
        }
    }
    return count == numCourses
};


const numCourses = 2, prerequisites = [[1, 0]]
console.log(canFinish(numCourses, prerequisites))