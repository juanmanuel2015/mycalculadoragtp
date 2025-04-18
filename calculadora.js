<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora en JavaScript</title>
  <style>
    .calculator {
      max-width: 200px;
      margin: 100px auto;
      padding: 10px;
      border: 2px solid #000;
      border-radius: 5px;
      text-align: center;
    }
    .calculator input,
    .calculator button {
      width: 40px;
      height: 40px;
      font-size: 20px;
      margin: 5px;
    }
    .calculator input {
      width: 170px;
    }
    .calculator button {
      cursor: pointer;
    }
  </style>
</head>
<body>

<div class="calculator">
  <input type="text" id="display" disabled />
  <br />
  <button onclick="clearDisplay()">C</button>
  <button onclick="appendToDisplay('1')">1</button>
  <button onclick="appendToDisplay('2')">2</button>
  <button onclick="appendToDisplay('3')">3</button>
  <br />
  <button onclick="appendToDisplay('4')">4</button>
  <button onclick="appendToDisplay('5')">5</button>
  <button onclick="appendToDisplay('6')">6</button>
  <button onclick="appendToDisplay('+')">+</button>
  <br />
  <button onclick="appendToDisplay('7')">7</button>
  <button onclick="appendToDisplay('8')">8</button>
  <button onclick="appendToDisplay('9')">9</button>
  <button onclick="appendToDisplay('-')">-</button>
  <br />
  <button onclick="appendToDisplay('0')">0</button>
  <button onclick="appendToDisplay('.')">.</button>
  <button onclick="calculateResult()">=</button>
  <button onclick="appendToDisplay('*')">*</button>
  <br />
  <button onclick="appendToDisplay('/')">/</button>
</div>

<script src="calculadora.js"></script>
</body>
</html>



