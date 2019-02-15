$(document).ready(function() {

    let to_evaluate = "";
    let value ="";
    let output = "";

    $("button").click(function() {
        value = $(this).val();
        if(value === "clear"){
            to_evaluate = "";
            $("#calc-screen").val(to_evaluate);
        }
        else if(value === "backspace"){
            if((to_evaluate === "")&&(output !== "")){
                to_evaluate = output;
            }
            to_evaluate = to_evaluate.substring(0,to_evaluate.length - 1);
            $("#calc-screen").val(to_evaluate);
        }
        else if(value === "evaluate"){
            try {
                eval(to_evaluate);
                output = (eval(to_evaluate)).toString();
            } catch (e) {
                output = "Error: " + e.message;
            }
            $("#calc-screen").val(output);
            $("#calc-history").text(to_evaluate+" = "+output);
            to_evaluate = "";
            if(output.startsWith("Error")){
                output = "";
            }
        }
        else if((to_evaluate === "")&&(output !== "")&&((value === "*")||(value === "/")||(value === "+")||(value === "-"))){
            to_evaluate += (output + value);
            output = "";
            $("#calc-screen").val(to_evaluate);
        }
        else{
            to_evaluate += value;
            $("#calc-screen").val(to_evaluate);
        }
    });

    $("#calc-screen").on("keydown", function(event) {
        to_evaluate = $("#calc-screen").val();
        if ((event.key === "Enter")||(event.key === "=")) {
            event.preventDefault();
            $("#btneq").click();
        }
    });
    $("#calc-screen").on("keyup", function(event) {
        to_evaluate = $("#calc-screen").val();
    });
});