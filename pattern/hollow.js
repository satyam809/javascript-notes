let row = 5;
let string = "";
for (let i = 0; i < row; i++) {
    for (let j = 0; j < row; j++) {
        if (i == 0 || i == row - 1) {
            string += "*";
        } else {
            if (j == 0 || j == row - 1) {
                string += "*";
            } else {
                string += " ";
            }
        }
    }
    string += "\n";
}
console.log(string);