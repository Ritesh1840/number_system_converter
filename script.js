function convert() {
  const inputValue = document.getElementById('inputValue').value.trim();
  const inputType = document.getElementById('inputType').value;
  const outputType = document.getElementById('outputType').value;

  let decimalValue;

  // Convert input to decimal first
  switch (inputType) {
    case 'binary':
      if (/^[01]+$/.test(inputValue)) {
        decimalValue = parseInt(inputValue, 2);
      } else {
        showError('Invalid binary number!');
        return;
      }
      break;
    case 'decimal':
      if (!isNaN(inputValue) && inputValue !== '') {
        decimalValue = parseInt(inputValue, 10);
      } else {
        showError('Invalid decimal number!');
        return;
      }
      break;
    case 'octal':
      if (/^[0-7]+$/.test(inputValue)) {
        decimalValue = parseInt(inputValue, 8);
      } else {
        showError('Invalid octal number!');
        return;
      }
      break;
    case 'hexadecimal':
      if (/^[0-9A-Fa-f]+$/.test(inputValue)) {
        decimalValue = parseInt(inputValue, 16);
      } else {
        showError('Invalid hexadecimal number!');
        return;
      }
      break;
    default:
      showError('Invalid input type!');
      return;
  }

  // Convert decimal to desired output type
  let outputValue;
  switch (outputType) {
    case 'binary':
      outputValue = decimalValue.toString(2);
      break;
    case 'decimal':
      outputValue = decimalValue.toString(10);
      break;
    case 'octal':
      outputValue = decimalValue.toString(8);
      break;
    case 'hexadecimal':
      outputValue = decimalValue.toString(16).toUpperCase();
      break;
    default:
      showError('Invalid output type!');
      return;
  }

  document.getElementById('outputValue').innerText = outputValue;
}

// Function to display error messages
function showError(message) {
  document.getElementById('outputValue').innerText = message;
}