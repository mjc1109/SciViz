function resetForm(oForm) {
    oForm.reset();
    updateChart();
}

function updateChart() {
    //read in each parameter
    tauy = parseFloat(document.getElementById("tauy").value);
    deltas_Case1 = parseFloat(document.getElementById("deltas").value);
    f = parseFloat(document.getElementById("f").value);
    max_depth = document.getElementById("max_depth").value
    
    //validate if these values were parsable as floats
    if (!Number.isInteger(max_depth) && max_depth > 0 && !Number.isNaN(tauy) && !Number.isNaN(deltas) && !Number.isNaN(f)) {
        max_depth = parseInt(max_depth)
        //this empties all of the data arrays
        data.length = 0
    
        //push on data for equations with new parameters
        for (let x = 0; x <= max_depth; x++) {
            //push each f(x) into the respective data array for each function
            //console.log(deltas)
            data.push([x, fun1(x, tauy, deltas_Case1, f, max_depth)]); 
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

        //console.log(deltas)
        //create a string using the function calls
        const results = ["f1(" + x_value + ") = <strong>" + fun1(x_value, tauy, deltas_Case1, f, max_depth).toFixed(3) + "</strong>"]
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

    //define the heading for each row of the data (i.e. each equation) 
    var csv = 'X,Alongshore Winds\n';

    for (let i = 0; i <= dataSize; i++) {
        csv += i;
        csv += ","
        csv += data[i][1];
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