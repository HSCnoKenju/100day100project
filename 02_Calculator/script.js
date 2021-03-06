function debug_table() {
    let debugtable = { "inputs": validInputs, "displays": displays, "ans": ans, "operations": operations };
    console.table(debugtable);
}

function operationClickHandler(event) {
    if (validInputs.length != 0) {  // if first input is operation ,dont add it to validInputs list
        if (number.indexOf(validInputs[validInputs.length - 1]) == -1 && validInputs[validInputs.length - 1] != "pm") {// last input is an operation
            validInputs[validInputs.length - 1] = event.target.value;
            if (operations[operations.length - 1] != "=") {
                let lastValue = displays[displays.length - 1];
                displays[displays.length - 1] = lastValue.substring(0, lastValue.length - 1) + event.target.value;// substitute last operation simbol
            } else {
                if (event.target.value != "=")
                    displays[displays.length - 1] = displays[displays.length - 1] + event.target.value;
            }
            operations[operations.length - 1] = event.target.value; //substitute last operation
        }
        else { // last input is number
            validInputs.push(event.target.value);
            if (ans.length == 0) {// first operation
                ans.push(Number(displays[displays.length - 1]));
                operations.push(event.target.value);
                displays.push(displays[displays.length - 1] + validInputs[validInputs.length - 1]);
            } else { // already one operation entered
                switch (operations[operations.length - 1]) {
                    case "+":
                        ans.push(Number(ans[ans.length - 1]) + Number(displays[displays.length - 1]));
                        break;
                    case "-":
                        ans.push(Number(ans[ans.length - 1]) - Number(displays[displays.length - 1]));
                        break;
                    case "/":
                        ans.push(Number(ans[ans.length - 1]) / Number(displays[displays.length - 1]));
                        break;
                    case "*":
                        ans.push(Number(ans[ans.length - 1]) * Number(displays[displays.length - 1]));
                        break;
                    case "=":
                        ans.push(Number(displays[displays.length - 1]));
                        break;
                    case "pm":
                        //do nothing
                        break;
                    default:
                        console.log("Errore switch , ultima operazione " + operations[operations.length - 1]);
                }

                displays.push(ans[ans.length - 1] + (event.target.value == "=" ? "" : event.target.value));
                operations.push(event.target.value);
            }

        }
        document.getElementById("display").value = displays[displays.length - 1];

        debug_table();
    }
}
function numberClickHandler(event) {
    // console.log(document.getElementById("display"));
    // console.log(event.target.value);

    //console.log(validInputs);
    if (validInputs.length == 0 || number.indexOf(validInputs[validInputs.length - 1]) != -1 || validInputs[validInputs.length - 1] == "pm") {//last input was number or validInputs==empty list
        //don't put 2 dot in one string
        if (!(event.target.value == "." && (displays[displays.length - 1].indexOf(".") != -1))) {
            validInputs.push(event.target.value);
            displays.push(displays[displays.length - 1] + validInputs[validInputs.length - 1]);
        }
    } else // last input is  operations
    {
        validInputs.push(event.target.value);
        //console.assert(number.indexOf(validInputs[validInputs.length - 2]) != -1,"not number");
        displays.push(validInputs[validInputs.length - 1]);
    }
    // console.log(displays);
    document.getElementById("display").value = displays[displays.length - 1];

    debug_table();
}
const number = "0123456789.";
var validInputs = [];
var displays = [''];
var ans = [];
var operations = [];
const numbersBtns = document.getElementsByClassName("number");

for (let index = 0; index < numbersBtns.length; index++) {
    const element = numbersBtns[index];
    element.addEventListener("click", (event) => {
        numberClickHandler(event);
    })
}

const operationBtns = document.getElementsByClassName("operation");
for (let index = 0; index < operationBtns.length; index++) {
    const element = operationBtns[index];
    element.addEventListener("click", (event) => {
        operationClickHandler(event);
    })
}

document.getElementById("pm").addEventListener("click", (event) => {
    if (displays.length != 1) {
        if (number.indexOf(validInputs[validInputs.length - 1]) != -1 || validInputs[validInputs.length - 1] == "pm" || validInputs[validInputs.length - 1] == "=") {// last input number
            displays.push((Number(displays[displays.length - 1]) * -1) + "");
            // ans.push(Number(displays[displays.length - 1]));
            //  operations.push(event.target.value);
            validInputs.push(event.target.value);

        }
        else {//last input operation 
            //ans.push(ans[ans.length - 1] * -1);
            displays[displays.length - 1] = ans[ans.length - 1] + "";
            // operations[operations.length - 1] = (event.target.value);
            ans.pop();
            operations.pop();
            validInputs[validInputs.length - 1] = event.target.value;
        }

        document.getElementById("display").value = displays[displays.length - 1];

        debug_table();
    }
})

document.getElementById("CE").addEventListener("click", (event) => {
    validInputs = [];
    displays = [''];
    ans = [];
    operations = [];
    document.getElementById("display").value = displays[displays.length - 1];

    debug_table();
})
document.getElementById("C").addEventListener("click", (event) => {
    if (validInputs.length != 0) {
        if (number.indexOf(validInputs[validInputs.length - 1]) == -1) {//only for not numbers
            ans.pop();
            operations.pop();
            // if(validInputs[validInputs.length-1]=="pm")
            // operations.push("=");

        }
        validInputs.pop();
        displays.pop();
        document.getElementById("display").value = displays[displays.length - 1];
        debug_table();
    }

}
)