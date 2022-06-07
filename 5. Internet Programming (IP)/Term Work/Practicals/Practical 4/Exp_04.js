let screen = document.getElementById("screen");

function display(num) {
    screen.value += num;
}

function del() {
    screen.value = screen.value.slice(0, -1);
}


function Clear() {
    screen.value = "";
}

function Calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (err) {
        alert("Error!!!!")
    }
}

function square(){
    screen.value = screen.value*screen.value;
}

function cube(){
    screen.value = screen.value*screen.value*screen.value;
}



