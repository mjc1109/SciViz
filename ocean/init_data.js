//define data arrays, one per equation
var data = [];
var data2 = [];
var data3 = [];
var data4 = [];

//define default parameter values
var p1 = 1;
var p2 = 1;
var p3 = 1;
var p4 = 1;
var p5 = 1;

//basically, begin with all param's equal to 1
for (let x = 0; x <= 100; x++) {
    //later on, we should make the equations be calculated with function calls
    data.push([x, fun1(x, p1, p2, p3)]);
    data2.push([x, fun2(x, p1, p2, p3)]);
    data3.push([x, fun3(x, p4, p5)]);
    data4.push([x, fun4(x, p4, p5)]);
}
