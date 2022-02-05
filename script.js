const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
    $(document).ready(function () {
      $('.grid-item').hover(function () {
        $(this).addClass('hover');
      })
    })
  };
};


function startGame() {
  $( ".grid-item" ).remove();
  let rowsString = prompt("How many rows?", "16");
  let rowsInt = parseInt(rowsString);
  makeRows(rowsInt, rowsInt);
}


$("#erase").click(function () {
  $(".grid-item").removeClass('hover')
});
