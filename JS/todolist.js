const todoInput = document.querySelector("#memoForm input");
const todoButton = document.querySelector("#todo-button");
const todoBoard = document.querySelector("#todo-board");

todoButton.addEventListener("click", todoFormButton);

function todoFormButton(){
    //버튼을 눌렀을때 li요소 생성 및 추가
    const li = document.createElement("li");
    //체크박스
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    //체크박스 이벤트 추가
    checkbox.addEventListener("click", todoCheck);
    //내용생성
    const text = document.createTextNode(todoInput.value);

    //X버튼
    const button = document.createElement("button");
    button.textContent = "X";
    button.addEventListener("click",todoDelete);

    todoInput.autofocus = true;

    //li에 체크박스와 내용과 X버튼 추가
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);
    //ul에 li추가
    todoBoard.appendChild(li);
    todoInput.autofocus = true;
    todoInput.value = null;
}
function todoCheck(e){
    console.log(e.target);
    const checkbox = e.target;
    if(checkbox.checked){
        //체크박스가 입력되면 li의 색을 gray로 바꿈
        checkbox.parentNode.style.color = "gray";
    }
    else{
        checkbox.parentNode.style.color = "white";
    }
}
function todoDelete(e){
    //checkbox를 통해 li를 찾아 삭제(remove)
    e.target.parentNode.remove();
}