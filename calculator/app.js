let output = document.getElementById("output");
let buttons = Array.from(document.getElementsByTagName("button"));

buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case 'AC':
                output.innerText ="";
                break;
            case "DEL": 
                if (output.innerText) {
                    output.innerText = output.innerText.slice(0, -1); 
                } 
                break;
                case "=": 
                    try {
                        output.innerText = eval(output.innerText);
                    } catch {
                        output.innerText = "Error!"
                    }
                    break;
            default: 
            output.innerText += e.target.innerText;
        }
    });
});
