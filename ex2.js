let count = 30;

function countdown() {
    document.write(count + "<br>");
    if (count == 0) {
        clearInterval(intervalId);
    }
    count--;
    if(count < 0){
        document.write("EXPROSÃO")
    }
}

const intervalId = setInterval(countdown, 2000);
