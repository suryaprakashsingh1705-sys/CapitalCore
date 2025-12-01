function calculate() {
    // Get input values
    let principal = parseInt(document.getElementById("container"));
    let rate = parseInt(document.getElementById("#principal"));
    let time = parseInt(document.getElementById("#rate"));
    

    // Apply compound interest formula
    let amount = principal * (1 + rate / 100) ** time;

    // Format to 2 decimal places
    let result = amount.toFixed(2);

    // Display result
    document.getElementById("result").innerText = "Total Amount: " + result;

}