var div1 = document.createElement('div');/*document.createElement 创建标签*/
div1.className = 'demo';
document.body.appendChild(div1);/*在body里添加一个div*/
var c = false;
var lastX
var lastY
div1.onmousedown = function (x) {
    c = true;
    lastX = x.clientX
    lastY = x.clientY
}

document.onmousemove = function (x) {

    if (c == true) {
        console.log(lastX, lastY)
        console.log(x.clientX, x.clientY)
        var top = parseInt(div1.style.top) || 0;
        var left = parseInt(div1.style.left) || 0;

        div1.style.left = left + x.clientX - lastX + 'px';
        div1.style.top = top + x.clientY - lastY + 'px';
        lastX = x.clientX
        lastY = x.clientY
    }

}

document.onmouseup = function () {
    c = false;

}