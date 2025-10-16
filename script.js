document.getElementById('addBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById('result').textContent = 'Result: ' + (num1 + num2);
    } else {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
    }
});

document.getElementById('subtractBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById('result').textContent = 'Result: ' + (num1 - num2);
    } else {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
    }
});