function resetForm(oForm) {
    oForm.reset();
    updateChart();
}

function updateChart() {
    //read in each parameter
    p1 = parseFloat(document.getElementById("param1").value);
    p2 = parseFloat(document.getElementById("param2").value);
    p3 = parseFloat(document.getElementById("param3").value);
    p4 = parseFloat(document.getElementById("param4").value);
    p5 = parseFloat(document.getElementById("param5").value);

    //validate if these values were parsable as floats
    if (!Number.isNaN(p1) && !Number.isNaN(p2) && !Number.isNaN(p3) 
        && !Number.isNaN(p4) && !Number.isNaN(p5)) {

        //this empties all of the data arrays
        data.length = 0
        data2.length = 0
        data3.length = 0
        data4.length = 0
    
        //push on data for equations with new parameters
        for (let x = 0; x <= 100; x++) {
            //push each f(x) into the respective data array for each function
            data.push([x, fun1(x, p1, p2, p3)]); 
            data2.push([x, fun2(x, p1, p2, p3)]);
            data3.push([x, fun3(x, p4, p5)]);
            data4.push([x, fun4(x, p4, p5)]);
        }

        //update however many chart displays are on the page
        chart1.update();
        //chart2.update();
    } else {
        alert("All parameter fields must be filled with a valid number.");
    }
}

function generateY() {
    const x_value = parseFloat(document.getElementById("xval").value);

    if (!Number.isNaN(x_value)) {
        //create a string using the function calls
        const results = ["f1(" + x_value + ") = <strong>" + fun1(x_value, p1, p2, p3).toFixed(3) + "</strong>", "f2(" + x_value + ") = <strong>" + fun2(x_value, p1, p2, p3).toFixed(3) + "</strong>", 
        "f3(" + x_value + ") = <strong>" + fun3(x_value, p4, p5).toFixed(3) + "</strong>", "f4(" + x_value + ") = <strong>" + fun4(x_value, p4, p5).toFixed(3) + "</strong>"]
        const html = "<p>" + results.join("</p><p>") + "</p>";
        //set the html element to use this resulting string
        document.getElementById("yvals").innerHTML = html;
    } else {
        alert("The X-Value field must be filled with a valid number.");
    }
}

function download_csv_file() {  

    //set size of data
    const dataSize = 100;

    //define the heading for each row of the data (e.g. each equation) 
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
