const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;  //задаем значение ширины canvas
canvas.height = window.innerHeight;//задаем значение высоты canvas

let c = canvas.getContext("2d"); //устанавливаем значения объекта-контекста в котором мы работаем

/*c.fillStyle ="blue"; //fillStyle - меняем параметры canvas
c.fillRect(10, 150, 100, 100) //fillRect(x, y, width, height,) - рисуем прямоугольник 

c.moveTo(60, 70);//для отрисовки линии начальное положение
c.lineTo(200, 90);//для отрисовки линии конечное положение
c.strokeStyle = "red"; //изменяем параметры созданных нами элем-тов
c.stroke()*/ //добавляем нарисованный элемент
//_____________________________________________________________________________________________________//



class Circle {
	constructor(x, y, radius, dx, dy, color) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy= dy;
		this.radius = radius;
		this.color = color;
	}

	draw() {
		c.beginPath(); //обозначаем что рисуем независимую окружность 
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2 , false); //.arc(x, y, radius, startAngel, endAngel, direction)-рисуем дуговые фигуры, значение углов в радианах
		c.strokeStyle = "blue";
		c.fillStyle = this.color //указываем цвет заливки
		c.fill() //метод для закрашивания фигуры
		c.stroke()

		this.update();
	}

	update() {
		if (this.x > window.innerWidth - this.radius || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}

		if (this.y > window.innerHeight - this.radius || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;
	}
}

function maxmin(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let colorArray = ["black", "yellow", "purple", "red","white"];

let circlesArray = [];

for (let i = 0; i < 1000; i++) {
	let radius = 10;

	let x = Math.random() * (window.innerWidth - radius * 2) + radius;
	let y = Math.random() * (window.innerHeight- radius * 2) + radius;
	let dx = (Math.random() - 0.5) * 5;
	let dy = (Math.random() - 0.5) * 5;
	let colorCircle = colorArray[maxmin(0, 4)]; 

	circlesArray.push(new Circle(x, y, radius, dx, dy, colorCircle));

}

function animate() {
	requestAnimationFrame(animate);

	c.clearRect(0, 0, window.innerWidth, window.innerHeight);
	
	for (let i = 0; i < circlesArray.length; i++) {
		circlesArray[i].draw()
	}

}

animate()

