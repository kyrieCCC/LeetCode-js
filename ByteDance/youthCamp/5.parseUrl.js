// 第六届青训营笔试题目2
// url查询参数的解析

const parseUrl = (url) => {
    const query = url.split('?')[1];
    const queryItem = query.split('&');
    console.log(queryItem);
    const res = {}
    for (let i = 0; i < queryItem.length; i++){
        const item = queryItem[i].split('=');
        if (Number(item[1])) {
            res[item[0]] ? have(item[0], item[1], res) : res[item[0]] = Number(item[1]);
        }
        else if (item[1] == 'true' || item[1] == 'false') {
            if (item[1] == 'true') res[item[0]] ? have(item[0], item[1], res) : res[item[0]] = true;
            else res[item[0]] ? have(item[0], item[1], res) : res[item[0]] = false;
        }
        else if (item[1] == 'null') {
            res[item[0]] ? have(item[0], item[1], res) : res[item[0]] = null;
        }
        else {
            res[item[0]] ? have(item[0], item[1], res) : res[item[0]] = item[1]
        }
    }
    return res
}

const have = (key, value, obj) => {
    if (Array.isArray(obj[key])) {
        obj[key].push(value)
    } else {
        const arr = [obj[key]];
        arr.push(value);
        obj[key] = arr;
    }
}

const url1 = 'https://www.baidu.com/search?a=123&b=wlc&c=false&d=null&e=ph&b=18&b=43'
console.log(parseUrl(url1));