const memoBoard = document.querySelector("#memoBoard");
const memoForm = document.querySelector("#memoForm");
const memoInput = document.querySelector("#memoForm input");
/*const saveMemo = ["미리만들어진 메모입니다.","미리만들어진 메모입니다.2"];

for(let m of saveMemo){
    let memo = document.createElement("div");
    memoBoard.appendChild(memo);
    memo.innerHTML = m;
}*/

function memoFormSubmit(event){
    event.preventDefault();
    console.log(memoInput.value);
    // 새로운 요소(태그)를 만들어서 memoBoard에 추가(div 요소)
    // createElement를 통해 요소생성
    let memo = document.createElement("div");
    // memoBoard에 요소 추가
    memoBoard.appendChild(memo);
    // 추가됨 memo 요소에 html 값 추가
    memo.innerHTML = memoInput.value;// html 요소에 값을 넣어줌
    memoInput.value = ""; // submit 후에 값이 사라지게 만듬
    console.dir(memoInput);
    memoInput.autofocus = true;

}
memoForm.addEventListener("submit", memoFormSubmit);