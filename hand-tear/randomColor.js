//生成随机颜色函数

const createRandomColor = () => {
    return `#${Math.floor(Math.random() * '0xffffff').toString(16)}`
}

//通过生成随机数，并设置其为十六进制

console.log(createRandomColor());