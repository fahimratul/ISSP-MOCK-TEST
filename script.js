
const startBtn = document.querySelector(".start"),
  category = document.querySelector("#category");


function selectquiz(cat){
  if(cat === "10"){
    window.location.href = "10.html";
  }
  else if(cat === "11"){
    window.location.href = "11.html";
  }
  else if(cat === "12"){
    window.location.href = "12.html";
  }
  else if(cat === "13"){
    window.location.href = "13.html";
  }
  else if(cat === "14"){
    window.location.href = "14.html";
  }
  else if(cat === "15"){
    window.location.href = "15.html";
  }
  else if(cat === "16"){
    window.location.href = "16.html";
  }
  else if(cat === "17"){
    window.location.href = "17.html";
  }
  else if(cat === "18"){
    window.location.href = "18.html";
  }
  else if(cat === "19"){
    window.location.href = "19.html";
  }
  else{
    window.location.href = "20.html";
  }
  
}


const startQuiz = () => {
  cat= category.value;
  if(cat === ""){
    cat = Math.floor(Math.random() * 11) + 10;
  }
  selectquiz(cat);
};

startBtn.addEventListener("click", startQuiz);
