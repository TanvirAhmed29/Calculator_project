function appendNumber(number) {
        document.getElementById("display").value += number;
    }

function appendOperator(operator) {
            document.getElementById("display").value += " " + operator + " ";
    }

function clearDisplay() {
            document.getElementById("display").value = "";
    }

function calculateResult() {
    let display = document.getElementById("display").value;
        try {
            let result = eval(display);
            document.getElementById("display").value = result;
            } catch (error) {
                    alert("Invalid input");
            }
}