
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));




    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    // await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(1000);
  createText("Starting the presentation...");
  await delay(1500);
  createText("You can run the following commands:");
  await delay(1500);
  createCode("about me :", "Who am i and what do i do.");
  await delay(1500);
  createCode("all :", "See all commands.");
  await delay(1500);
  createCode("social -a :", "All my social networks.");
  await delay(1500);
  new_line();
}


function new_line(){

  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "#user";
  span1.textContent = " in";
  span2.textContent = " ~/udbhav-44";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);

  new TypeIt(p, {
    speed: 50,
    loop: false,
    waitUntilVisible: true,
    afterComplete: function (instance) {
      instance.destroy();
      setTimeout(() => {
        const i = document.createElement("i");
        i.setAttribute("class", "fas fa-angle-right icone");
        const div = document.createElement("div");
        div.setAttribute("class", "type");
        const input = document.createElement("input");
        div.appendChild(i);
        div.appendChild(input);
        app.appendChild(div);
        input.focus();
      }, 100); // Delay in milliseconds
    }
  }).go();

  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);
    
    createCode("projects", "My github page with my projects. Follow me there ;)");
    createCode("about me", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/udbhav-44' target='_blank'><i class='fab fa-github white'></i> github.com/udbhav-44</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("Hi, My name is Udbhav Agarwal)")
    createText("I am applying for the Position of Coordinator in the <span class='blue'>Brain and Cognitive Sciences Club, IITK </span>")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/udbhav-44' target='_blank'><i class='fab fa-github white'></i> github.com/heberleonard2</a>")
    createText("<a href='https://www.linkedin.com/in/udbhav-agarwal-901a1419b/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/udbhav-agarwal-901a1419b/</a>")
    createText("<a href='https://www.instagram.com/_udbhav_agarwal_/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/_udbhav_agarwal_</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

let id = 0

function createText(text, classname) {
  const p = document.createElement(`p`);
  app.appendChild(p);
  p.id = `text${id}`;
  new TypeIt(`#text${id}`, {
    strings: text,
    speed: 50,
    waitUntilVisible: true,
    afterComplete: function (instance) {
      instance.destroy();
    }
  }).go();
  id++;
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  app.appendChild(p);
  p.id = `code${id}`;
  new TypeIt(`#code${id}`, {
    strings: `${code} <span class='text'> ${text} </span>`,
    speed: 50,
    waitUntilVisible: true,
    afterComplete: function (instance) {
      instance.destroy();
    }
  }).go();
  id++;
}

open_terminal();