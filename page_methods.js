function resetForm(oForm) {
    oForm.reset();
    updateChart();
}

function updateChart() {
    //we can manipulate data here!
    p1 = parseFloat(document.getElementById("param1").value);
    p2 = parseFloat(document.getElementById("param2").value);
    p3 = parseFloat(document.getElementById("param3").value);
    p4 = parseFloat(document.getElementById("param4").value);
    p5 = parseFloat(document.getElementById("param5").value);
    
    if (!Number.isNaN(p1) && !Number.isNaN(p2) && !Number.isNaN(p3) 
        && !Number.isNaN(p4) && !Number.isNaN(p5)) {

        data.splice(0, data.length);
        data2.splice(0, data2.length);
        data3.splice(0, data3.length);
        data4.splice(0, data4.length);
    
        //push on data for equations with new parameters
        for (let x = 0; x <= 100; x++) {
            //later on, we should make the equations be calculated with function calls:
            data.push([x, fun1(x, p1, p2, p3)]); //ex. "p1*x*x*x + p2*x*x + p3*x" should be f1(x)
            data2.push([x, fun2(x, p1, p2, p3)]);
            data3.push([x, fun3(x, p4, p5)]);
            data4.push([x, fun4(x, p4, p5)]);
        }

        chart1.update();
        chart2.update();
    } else {
        alert("All parameter fields must be filled with a valid number.");
    }
}

function generateY() {
    const x_value = parseFloat(document.getElementById("xval").value);

    if (!Number.isNaN(x_value)) { //make this "Number.isNan(x_value)""
        const results = ["f1(" + x_value + ") = <strong>" + fun1(x_value, p1, p2, p3).toFixed(3) + "</strong>", "f2(" + x_value + ") = <strong>" + fun2(x_value, p1, p2, p3).toFixed(3) + "</strong>", 
        "f3(" + x_value + ") = <strong>" + fun3(x_value, p4, p5).toFixed(3) + "</strong>", "f4(" + x_value + ") = <strong>" + fun4(x_value, p4, p5).toFixed(3) + "</strong>"]
        const html = "<p>" + results.join("</p><p>") + "</p>";
        document.getElementById("yvals").innerHTML = html;
    } else {
        alert("The X-Value field must be filled with a valid number.");
    }
}

function download_csv_file() {  

    //set size of data
    const dataSize = 100;

    //define the heading for each row of the data  
    var csv = 'X,Ax^3 + Bx^2 + Cx,Ax^2 + Bx + C,Dcos(Ex),(Dcos(Ex))^3\n';

    for (let i = 0; i <= dataSize; i++) {
        csv += i;
        csv += ","
        csv += data[i][1];
        csv += ","
        csv += data2[i][1];
        csv += ","
        csv += data3[i][1];
        csv += ","
        csv += data4[i][1];
        csv += "\n";
    } 

    var hiddenElement = document.createElement('a');  
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
    hiddenElement.target = '_blank';  

    //provide the name for the CSV file to be downloaded  
    hiddenElement.download = 'data.csv';  
    hiddenElement.click();
    event.preventDefault();
}