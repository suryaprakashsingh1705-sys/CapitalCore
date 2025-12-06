function calculate() {

      let principal = parseFloat(document.getElementById("principal").value);
      let rate      = parseFloat(document.getElementById("rate").value);
      let time      = parseFloat(document.getElementById("time").value);


      if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
      }


      let amount = principal * Math.pow(1 + rate / 100, time);

  
      let result = amount.toFixed(2);

      document.getElementById("result").innerText = "Total Amount: " + result;
    }