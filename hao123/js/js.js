var strKey = "strKey";
var storage = window.localStorage;
// 存储
function onStart() {
    if (storage.getItem("strKey") != null) {
        var ccolor = storage.getItem("strKey");
        document.getElementById("first").style.background = ccolor;
        document.getElementById("sethome").style.background = ccolor;
        document.getElementById("changec").style.color = ccolor;
        document.getElementById("menus").style.color = ccolor;
        document.getElementById("typeface").style.color = ccolor;
        document.getElementById("one").style.color = ccolor;
        document.getElementById("two").style.color = ccolor;
        document.getElementById("three").style.color = ccolor;
        document.getElementById("four").style.color = ccolor;
        document.getElementById("five").style.color = ccolor;
        document.getElementById("six").style.color = ccolor;
        document.getElementById("seven").style.color = ccolor;
        document.getElementById("line").style.color = ccolor;
    } else if (Cookie.read("strKey") != null) {
        alert(Cookie.read("strKey") + 'cookie');
    }
}
//改变颜色
function changeColor(color) {
    var strValue = color;
    console.log(strValue);
    if (storage) {
        document.getElementById("first").style.background = strValue;
        document.getElementById("sethome").style.background = strValue;
        document.getElementById("changec").style.color = strValue;
        document.getElementById("menus").style.color = strValue;
        document.getElementById("typeface").style.color = strValue;
        document.getElementById("one").style.color = strValue;
        document.getElementById("two").style.color = strValue;
        document.getElementById("three").style.color = strValue;
        document.getElementById("four").style.color = strValue;
        document.getElementById("five").style.color = strValue;
        document.getElementById("six").style.color = strValue;
        document.getElementById("seven").style.color = strValue;
        document.getElementById("line").style.color = strValue;
        storage.setItem(strKey, strValue);
    } else {
        Cookie.write("strKey", strValue);
    }
}