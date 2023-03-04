const $canvas = document.querySelector('.canvas');
const ctx = $canvas.getContext('2d');

ctx.lineWidth = 5;
ctx.strokeStyle = 'lightcoral'
ctx.strokeRect(50, 50, 200, 100)

ctx.lineWidth = 10;
ctx.strokeStyle = 'cornflowerblue'
ctx.strokeRect(300, 50, 50, 50)

ctx.fillStyle = 'rgb(157, 255, 237)'
ctx.fillRect(400, 50, 50, 200)

ctx.beginPath()
ctx.fillStyle = 'rgb(225, 186, 255)'
ctx.arc(150, 300, 100, 0, 2 * Math.PI)
ctx.fill()
ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = 'lightgreen';
ctx.moveTo(300, 300);
ctx.lineTo(400, 450);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.font = 'bold 35px -apple-system';
ctx.fillStyle = 'white';
ctx.fillText('Circle', 105, 300);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.font = '400 40px -apple-system';
ctx.strokeStyle = 'rgb(92, 92, 92)';
ctx.strokeText('Rectangle', 60, 100);
ctx.closePath();
