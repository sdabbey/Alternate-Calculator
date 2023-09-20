exports.calculate = function(expression) {
  const tokens = expression.split(/\s+/);

  function evaluate(tokens) {
    if (tokens.length === 0) {
      throw new Error('Invalid expression');
    }

    const token = tokens.shift();

    if (!isNaN(token)) {
      return parseFloat(token);
    }

    if (token === '+' || token === '-' || token === '*' || token === '/') {
      const operand1 = evaluate(tokens);
      const operand2 = evaluate(tokens);

      switch (token) {
        case '+':
          return operand1 + operand2;
        case '-':
          return operand1 - operand2;
        case '*':
          return operand1 * operand2;
        case '/':
          if (operand2 === 0) {
            throw new Error('Division by zero');
          }
          return operand1 / operand2;
        default:
          throw new Error('Invalid operator: ' + token);
      }
    } else {
      throw new Error('Invalid token: ' + token);
    }
  }

  const result = evaluate(tokens);

  if (tokens.length !== 0) {
    throw new Error('Invalid expression');
  }

  return result;
};
