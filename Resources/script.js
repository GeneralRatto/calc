   
   var currentNumber = 1;
   var num1;
   var num2;
   var click = 1;

   var $screen = $("#screen");
   var $number = $(".number");

   $number.on('click', function() {

    if (click > 8){
        return;
    }
    click++;
    var numberPressed = $(this).html();
    $screen.append(numberPressed);
    $("#clear").css('background-color', "#E4080A");


        if (currentNumber == 1) {

            if (num1 == null) {

                num1 = numberPressed;

            } else {

                num1 = num1 +numberPressed;

            }

        }

        if (currentNumber == 2) { 

            if (num2 == null) {

                num2 = numberPressed;

            } else {

                num2 = num2 +numberPressed;

            }

            $("#equal").css('background-color', "#E4080A");

        }
    });


        function more(){

            if (click > 8){
                click = click - 5;
            }

            if (currentNumber == 2) {
                findAnswer();
                $screen.empty();
                $screen.append(num1);
            }
            currentNumber = 2;
        }

    document.getElementById("clear").onclick = function clear()
    {
        $("#screen").empty();

        num1 = null;
        num2 = null;
        currentNumber = 1;
        click = 0;
        $('#clear').css('background-color', 'gray');
        $('#equal').css('background-color', 'gray');
    }

    $("#plus").on('click', function()
    {
        if(num1 != null) {

        more();

        $("#screen").append("+");

        op = "+";

    };
    return
    })

    $("#minus").on('click', function()
    {
        if(num1 != null) {

        more();

        $("#screen").append("-");

        op = "-";

    };
    return;
    })

    $("#multiply").on('click', function()
    {
        if(num1 != null) {

        more();

        $("#screen").append("×");

        op = "×";
    };
    return;
    })

    $("#divide").on('click', function()
    {
        if(num1 != null) {

        more();

        $("#screen").append("÷");

        op = "÷";

    };
    return;
    })

    $("#equal").on('click', function()
    {
        var element = document.getElementById('equal');
        var style = window.getComputedStyle(element);
        var backgroundColor = "background-color";
        var buttonColor = element.style.backgroundColor;
        if(buttonColor == 'gray') {
            return;
        }

        $screen.append("=");
        findAnswer();
        if (click > 8) {
            $screen.empty();
            var answerLength = answer.toString();
            click = answerLength.length;
            console.log(click);
        }

        $screen.append(answer);
        $('#equal').css('background-color', 'gray');

    });

        function findAnswer() {
        
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        if (op == "+") {
            answer = num1 + num2
        }

        if (op == "-") {
            answer = num1 - num2
        }

        if (op == "×") {
            answer = num1 * num2
        }

        if (op == "÷") {
            answer = num1 / num2
        }

        num1 = answer;
        num2 = null;
        currentNumber = 1 
    };
    
    