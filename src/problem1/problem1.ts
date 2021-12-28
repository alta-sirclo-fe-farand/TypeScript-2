export const isArmstrongNumber = (num: number) => {
  
  let sum: number = 0;

  for (let n of num.toString().split("")) {
    sum += parseInt(n)**(num.toString().split("").length);
  }

  if (sum == num) {
    return true;
  }
  return false;
};
