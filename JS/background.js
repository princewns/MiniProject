const images = ["0.jpg","1.jpg","2.jpg"];
//let index = Math.floor(Math.random()*images.length);
//const chooseImage = images[index]; 와 동일함

const chooseImage = images[Math.floor(Math.random()*images.length)];
//이미지 파일 이름을 랜덤으로 가져옴
const bodyBackground = document.querySelector("body");

// CSS style을 이용해서 bodyBackgrond에 추가
bodyBackground.style.background = `url(./img/${chooseImage})`;//이미지 파일이름 추가
