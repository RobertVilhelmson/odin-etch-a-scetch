const container = document.getElementById("container");


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

function startGame() {
  let rowsString = prompt("How many rows?", "16");
  let rowsInt = parseInt(rowsString);
makeRows(rowsInt, rowsInt);
}

$(document).ready(function(){
    $('.grid-item').hover(function(){
        $(this).addClass('hover');
    })
})

$("#clear").click(function(){
  $(".grid-item").removeClass('hover')
});