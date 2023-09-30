const text1_options = [
    "Board Game made with Java on Netbeans",
    "First try of anatomy in Pixel Art",
    "Weather Station made with Java on Netbeans",
  ];
  const color_options = ["#00000", "#FFFFF"];

  const image_options = [
    "img/biosphere.png",
    "img/testMain.png",
    "img/odomo.png",
  ];


  var i = 0;
  const currentOptionText1 = document.getElementById("current-option-text1");
  const currentOptionImage = document.getElementById("image");
  const carousel = document.getElementById("carousel-wrapper");
  const mainMenu = document.getElementById("menu");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");
  
  currentOptionText1.innerText = text1_options[i];
  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  mainMenu.style.background = color_options[i];
  

  const n = document.querySelectorAll(".nav-link");

  let p = document.createElement("p");

  n.forEach(element => {
    element.addEventListener("mouseover",function (event) {  
      switch(this.id){
        case "maison":
          p.innerHTML = "Home";        
          break;
        case "info":
          p.innerHTML = "Code";
          break;
        case "artL":
          p.innerHTML = "Arts";
          break;
        case "pdf":
          p.innerHTML = "PDF";
          break;
        case "contct":
          p.innerHTML = "Games";
          break;
      }
      this.append(p);
      p.style.fontFamily="'playfair'";
      p.style.color = "black";
      
    },false);

    element.addEventListener("mouseleave",function (event) {
      p.innerHTML = "";
    },false);

  });

  optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];
  
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");
    
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      carousel.classList.remove("anim-next");
    }, 650);
  };
  
  optionPrevious.onclick = function () {
    if (i === 0) {
      i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];
  
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);
  };
