var pantalla = document.querySelector("canvas")
var pincel = pantalla.getContext("2d")

pincel.fillStyle="#4CAF50"
pincel.fillRect(0,0, pantalla.width, pantalla.height)

//head
pincel.fillStyle= "darkgreen"
pincel.fillRect(100,40, 350, 300)

//left eye
pincel.fillStyle= "black"
pincel.fillRect(150,80,90,90)

//right eye
pincel.fillStyle= "black"
pincel.fillRect(310,80,90,90)

//nose
pincel.fillStyle="black"
pincel.fillRect(240,170, 70,100)

//mouth1
pincel.fillStyle="black"
pincel.fillRect(200,230,40,110)

//mouth2
pincel.fillStyle="black"
pincel.fillRect(310,230,40,110)
