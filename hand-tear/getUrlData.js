//从URL中获取参数

const getParamByUrl = (key) => {
    const url = new URL(location.href)
    return url.searchParams.get(key)
}
//这个方法可以获取到当前页面的参数信息
//但是location方法一般在网页中使用，获取当前的URL
//一般该方法会配合HTML页面进行使用

const urlTest = 'https://localhost:8080/kyrieccc/?name=wlc&age=20'
console.log(getParamByUrl(urlTest));