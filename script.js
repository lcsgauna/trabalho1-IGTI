const first_input = document.querySelector('#first-number');
const second_input = document.querySelector('#second-number');

function start() {
    console.log("Página Iniciada com sucesso");
    first_input.addEventListener('input', listenInput);
    second_input.addEventListener('input', listenInput);
}

function listenInput() {
    const first_number = parseInt(first_input.value);
    const second_number = parseInt(second_input.value);

    calculator(first_number, second_number);
}

function formatNumber(number) {
    return new Intl.NumberFormat('pt-BR').format(number.toFixed(2));
}

function calculator(first, second) {
    sum(first, second);
    first_subtraction(first, second);
    second_subtraction(first, second);
    multiplication(first, second);
    first_division(first, second);
    second_division(first, second);
    firstnumber_square(first);
    secondnumber_square(second);
    intdivision_firstNumber(first);
    intdivision_secondNumber(second);
    factorial_firstNumber(first);
    factorial_secondNumber(second);
}

function sum(first, second) {
    const result = (first + second);
    const sum_span = document.querySelector('#sum');
    sum_span.textContent = result;
}

function first_subtraction(first, second) {
    const result = (first - second);
    const firstsubtraction_span = document.querySelector('#first_subtraction');
    firstsubtraction_span.textContent = result;
}

function second_subtraction(first, second) {
    const result = (second - first);
    const secondsubtraction_span = document.querySelector('#second_subtraction');
    secondsubtraction_span.textContent = result;
}

function multiplication(first, second) {
    const result = (first * second);
    const multiplication_span = document.querySelector("#multiplication");
    multiplication_span.textContent = result;

}

function first_division(first, second) {
    const result = (first / second);
    const firstdivision_span = document.querySelector('#first_division');
    firstdivision_span.textContent = result;
}

function second_division(first, second) {
    const result = (second / first);
    const seconddivision_span = document.querySelector('#second_division');
    seconddivision_span.textContent = result;
}

function firstnumber_square(first) {
    const result = Math.pow(first, 2);
    const firstnumbersquare_span = document.querySelector('#firstNumber-square');
    firstnumbersquare_span.textContent = result;
}

function secondnumber_square(second) {
    const result = Math.pow(second, 2);
    const secondnumbersquare_span = document.querySelector('#secondNumber-square');
    secondnumbersquare_span.textContent = result;
}

function intdivision_firstNumber(first) {
    var result = [];

    for (var i = 1; i <= first; i++) {
        if (first % i == 0) {
            result.push(i);
        }
    }
    result = `${result.join(',')} (${result.length})`
    const intdivisionfirstnumber_span = document.querySelector('#intDivision-firstNumber');
    intdivisionfirstnumber_span.textContent = result;
}

function intdivision_secondNumber(second) {
    var result = [];

    for (var i = 1; i <= second; i++) {
        if (second % i == 0) {
            result.push(i);
        }
    }
    result = `${result.join(',')} (${result.length})`
    const intdivisionsecondnumber_span = document.querySelector('#intDivision-secondNumber');
    intdivisionsecondnumber_span.textContent = result;
}

function factorial_firstNumber(first) {
    var result = 1;

    for (var i = first; i > 1; i--) {
        result *= i;
    }

    const factorialfirstnumber_span = document.querySelector('#factorial-firstNumber');
    factorialfirstnumber_span.textContent = result;
}


function factorial_secondNumber(second) {
    var result = 1;

    for (var i = second; i > 1; i--) {
        result *= i;
    }

    const factorialsecondnumber_span = document.querySelector('#factorial-secondNumber');
    factorialsecondnumber_span.textContent = result;
}


start();



