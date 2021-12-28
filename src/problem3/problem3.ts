export const makeDiamond = (char: string) => {
  
  const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const WIDTH: number[] = [];
  for (let i = -(alphabet.indexOf(char)); i <= alphabet.indexOf(char); i++) {
    WIDTH.push(i);
  };
  const LENGTH: number[] = [];
  for (let i = 0; i < 2*alphabet.indexOf(char)+1; i++) {
    LENGTH.push(i);
  };

  let pattern: any[] = [];

  for (let rowIndex of LENGTH) {
    for (let colIndex of WIDTH) {
      if (rowIndex <= alphabet.indexOf(char)) {
        if (colIndex == rowIndex || -colIndex == rowIndex) {
          pattern.push(alphabet[Math.abs(colIndex)]);
        } else {
          pattern.push("·");
        }
      } else {
        if (alphabet.indexOf(char) - (rowIndex - alphabet.indexOf(char)) == colIndex 
        || alphabet.indexOf(char) - (rowIndex - alphabet.indexOf(char)) == -colIndex) {
          pattern.push(alphabet[Math.abs(colIndex)]);
        } else {
          pattern.push("·");
        }
      }
    }
    pattern.push("\n");
  }

  return pattern.join("");
};
