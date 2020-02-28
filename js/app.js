let string = [];

function startArray() {
    addString();
    replaceChar();
}

function addString() {
    string = prompt("Nhập vào một chuỗi");
    alert("Chuỗi ban đầu là: " + string);
}

function replaceChar() {
   string=string.replace(/-/g,"_");
//array[0]='a';
    // for (let i = 0; i < array.length; i++) {
    //
    //      if (array[i] == '-') {
    //         array[i] = '1';
    //         alert(array[i]);
    //     }
    //  }
     alert(string);
}