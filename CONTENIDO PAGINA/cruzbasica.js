var d = document.getElementById("dibujillo");
var lienzo = d.getContext("2d");
var lineas = 15;
var l = 0;
var xi, xf, yi, yf;
var nxi, nyi, nxf, nyf;
var colorcito ="red";
var colorcillo ="green";

for(l=0; l < lineas; l++)
{
xf = 10 * (l + 1);
yi = 10 * (l + 1);
xi = 10 * (l + 1);
yf = 10 * (l + 1);
xmi = 150 + xi;
ymi = 150 + yi;
xmf = 150 + xf;
ymf = 150 + yf;

dibujarLinea(colorcillo, 150, xi, ymf, 150);
dibujarLinea(colorcillo, yi, 150, 150, ymf);
dibujarLinea(colorcillo, 150, yf, yi, 150);
dibujarLinea(colorcillo, 150, xmi, ymf, 150)
dibujarLinea(colorcito, xi, 150, ymf, 150);
dibujarLinea(colorcito, xmi, 150, yf, 150);
dibujarLinea(colorcito, ymf, 150, xf, 150);

dibujarLinea(colorcillo, 150, nyi, xf, 150);
dibujarLinea(colorcillo, yf, 150, 150, xi);
dibujarLinea(colorcillo, xi, 150,  150, xf);
dibujarLinea(colorcillo, 150, nxi, xf, 150);

}
dibujarLinea(colorcito, 299, 299, 299, 1);
dibujarLinea(colorcito, 300, 1, 1, 1);
dibujarLinea(colorcito, 1, 1, 1, 300);
dibujarLinea(colorcito, 1, 299, 299, 299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, xmediainicial, ymediainicial, xmediafinal, ymediafinal)
{
lienzo.beginPath();
lienzo.strokeStyle =color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}