const colorPicker = document.getElementById("color-picker");
const canvasColor = document.getElementById("background-picker");
const canvas = document.getElementById("canvas");
const clearButton = document.getElementById("clear-btn");
const saveButton = document.getElementById("save-btn");
const retrievedButton = document.getElementById("retrived-btn");
const fontSizeButton = document.getElementById("font-size");

const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;
colorPicker.addEventListener("change", (e) => {
  ctx.strokeStyle = e.target.value;
  ctx.fillStyle = e.target.value;
});
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = event.offsetX;
  lastY = event.offsetY;
});
canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();

    lastX = event.offsetX;
    lastY = event.offsetY;
  }
});
canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
});
canvasColor.addEventListener("change", (e) => {
  ctx.fillStyle = e.target.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

fontSizeButton.addEventListener("change", (e) => {
  ctx.lineWidth = e.target.value;
});

clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
saveButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "my-drawing.png";
  link.href = canvas.toDataURL();
  link.click();
});
retrievedButton.addEventListener("click", () => {
  let retrievedDrawing = localStorage.getItem("canvasContents");
  if (retrievedDrawing) {
    let image = new Image();
    image.src = retrievedDrawing;
    ctx.drawImage(image, 0, 0);

    //  image.onload = function() {
    //      ctx.drawImage(image, 0, 0);
    //  }
  }
});
