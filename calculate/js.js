var num = 0, result = 0, numshow = "0";
var clearmsg = false;
//判断输入状态
var operate = 0;
//判断计算状态
var calcul = 0;
//防止重复按键
var quit = 0;
function command(num) {
    //判断输入框中的是否是输入的值
    if(clearmsg){
        text.value = "";
        clearmsg=false;
    }
    //获得当前显示数据
    var str = String(document.calculator.text.value);
     str = (str != "0") ? ((operate == 0) ? str : "") : "";
    //给当前值追加字符
        str = str + String(num);
    if (calcul != 0){

    }
    //刷新显示
    document.calculator.text.value = str;
    //重置输入状态
     operate = 0;
    //重置防止重复按键的标志
     quit = 0;
}
//.
function point() {
    var str = String(document.calculator.text.value);
    //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0";
    str = (str != "0") ? ((operate == 0) ? str : "0") : "0";
    //判断是否已经有一个点号
    for (i = 0; i <= str.length; i++) {
        //如果有则不再插入
        if (str.substr(i, 1) == ".") return false;
    }
    str = str + ".";
    document.calculator.text.value = str;
    operate=false;
}
//退格
function del() {
    var str = String(document.calculator.text.value);
    str = (str != "0") ? str : "";
    str = str.substr(0, str.length - 1);
    str = (str != "") ? str : "0";
    document.calculator.text.value = str;
}
//清除数据
function clearscreen() {
    num = 0;
    result = 0;
    numshow = "0";
    document.calculator.text.value = "0";
}
//加法
function plus() {
    //调用计算函数
    calculate();
    //更改输入状态
    operate = 1;
    //更改计算状态为加
    calcul = 1;
}
//减法
function minus() {
    calculate();
    operate = 1;
    calcul = 2;
}
//乘法
function ride() {
    calculate();
    operate = 1;
    calcul = 3;
}
//除法
function divide() {
    calculate();
    operate = 1;
    calcul = 4;
}
//sin
function sin() {
    calculate();
    operate = 1;
    calcul = 5;
}
//cos
function cos() {
    calculate();
    operate = 1;
    calcul = 6;
}
//等于
function equal() {
    calculate();
    operate = 1;
    num = 0;
    result = 0;
    clearmsg = true;
    numshow = "0";
}
//运算
function calculate() {
    numshow = Number(document.calculator.text.value);
    // console.log('numshow    '+numshow);
    //判断前一个运算数是否为零以及防重复按键的状态
    if (num != 0 && quit != 1) {
        //判断要输入状态
        switch (calcul) {
            //计算"+"
            case 1:
                result = num + numshow;
                break;
            //计算"-"
            case 2:
                result = num - numshow;
                break;
            //计算"*"
            case 3:
                result = num * numshow;
                break;
            //计算"/"
            case 4:
                if (numshow != 0) {
                    result = num / numshow;
                } else {
                    document.getElementById("warn").innerHTML = "被除数不能为零！";
                    //时间到了 "被除数不能为零"就会消失
                    setTimeout(clearwarn, 2400);
                }
                break;
            //计算sin
            case 5:
                console.log(num);
                result =Math.sin(num*Math.PI/180);
                break;
            //计算cos
            case 6:
                console.log(num);
                result =Math.cos(num*Math.PI/180);
                break;
        }
        result = parseFloat(result.toFixed(8));
        //避免重复按键
        quit = 1;
    }
    else {
        result = numshow;
    }
    numshow = String(result);
    // console.log(numshow);
    document.calculator.text.value = numshow;
    //存储当前值
    num = result;
}
//清空提示
function clearwarn() {
    document.getElementById("warn").innerHTML = "";
}
