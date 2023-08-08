function luhnAlgorithm(input) {
  // filter invalid char and reverse string
  let str = "";
  for (let i = input.length - 1; i >= 0; i--)
    if (input[i] >= "0" && input[i] <= "9") str += input[i];
  if (input.length < 2) return false;

  // algorithmic check
  let sum = 0;
  // iterate odd digits
  for (let i = 2; i < str.length; i += 2) sum += Number(str[i]);
  // iterate even digits
  for (let i = 1; i < str.length; i += 2) {
    let num = Number(str[i]) * 2;
    sum += num > 9 ? num - 9 : num;
  }

  return (sum * 9) % 10 == str[0];
}

module.exports = luhnAlgorithm;
