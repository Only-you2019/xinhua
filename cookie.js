
//保存数据
function saveCookie(key,value,daycount) {
    let d = new Date();
    d.setDate(d.getDate()+daycount);
    //escape:编码，把汉字变成百分号编码
    document.cookie = key+'='+escape(value)+';expires='+d.toGMTString();
}
//获取数据
function getCookie(key){
    //unescape:解码:把百分号编码变成汉字
    let str= unescape(document.cookie);
    let arr = str.split("; ");
    for(let i in arr){
        if(arr[i].startsWith(key+"=")){
            return arr[i].split("=")[1];
        }
    }
    return null;
}