let row = 5;
let string = "";
let num = 1;
for (let i = 0; i < row; i++) {
    for (let j = 0; j < num; j++) {
        string += "*";
    }
    num++;
    string += "\n";
}
console.log(string);