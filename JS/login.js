//getElementById를 이용하면 HTML의 아이디 값을 가져올수 있다.
const loginForm = document.getElementById("loginForm");//상수 선언 id 가져오기
//querySelector를 이용하면 CSS 선택자를 이용해서 요소의 첫번째 태그를 선택할 수 있다.
const loginInput = document.querySelector("#loginForm input");//상수 선언 id "요소" 가져오기
const greeting = document.querySelector("#greeting");
const memoFormShow = document.querySelector("#memoForm");

//버튼을 눌렀을때 input 값 가져오기
function onLoginSubmit(event) {
    //console.dir(loginInput); loginInout 안에 있는 속성값 확인
    event.preventDefault(); // 창을 새로 띄우지 않음.
    //loginInput에서 value값 가져오기
    const username = loginInput.value;
    greeting.innerHTML = `반갑습니다 ${username}님`;
    //classlist는 태그에 class를 추가하거나 제거하는 메소드
    loginForm.classList.add("hidden"); //class="hidden"
    memoFormShow.classList.remove("hidden");
}

//이벤트 리스너 : 이벤트가 발생하는지 인지하는 메소드, 이벤트가 발생할떄 그 함수를 실행시켜주는 역할
//어디에 이벤트가 발생하면, 어떤 함수를 실행시켜야 하는지.
loginForm.addEventListener("submit", onLoginSubmit);