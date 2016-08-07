function test() {
    var res='';
    //获取第一个输入框的值
    var text1 = parseInt(document.getElementById("txt1").value);
    //获取第二个输入框的值
    var text2 = parseInt(document.getElementById("txt2").value);
    //获取选择框的值
    var sel = document.getElementById("select").value;
    //获取通过下拉框来选择的值来改变加减乘除的运算法则
    switch(sel)
    {
        case '+':
            res = text1 + text2;
            break;
        case '-':
            res = text1 - text2;
            break;
        case '*':
            res = text1 * text2;
            break;
        case '/':
            res = text1 / text2;
            break;
            return res;
    }
    //设置结果输入框的值 
    document.getElementById("txt3").value = res ;
}