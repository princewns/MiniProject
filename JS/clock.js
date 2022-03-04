const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();//현재시간을 받아옴
    //숫자값으로 받아오면 일의 자릿수는 한자리로 표현
    //1 >> 01 padStart(); >> String 객체에서 사용가능
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");  //받아온 시간을 시간,분,초 단위로 저장
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(getClock, 1000);