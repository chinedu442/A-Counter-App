let count = 0;

function add(){
  //console.log("Clicked");
  //console.log(count++);
  count++
  document.getElementById("show-count").textContent = count
}

function minus(){
  //console.log("Clicked");
  //console.log(count++);
  count--
  if(count <= 0){
 	count = 0;
  }
  document.getElementById("show-count").textContent = count
}

function save(){
  let countWithDash = count + " - "
  let saveEl = document.getElementById("save-el")
  saveEl.textContent += countWithDash
  document.getElementById("show-count").textContent = count * 0
  count *= 0
  //console.log(count)
}