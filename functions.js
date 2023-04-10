function fun1(x, p1, p2, p3) {
    return p1*x*x*x + p2*x*x + p3*x
}

function fun2(x, p1, p2, p3) {
    return p1*x*x + p2*x + p3
}

function fun3(x, p4, p5) {
    return p4*Math.cos(p5*x)
}

function fun4(x, p4, p5) {
    return Math.pow(p4*Math.cos(p5*x),3)
}