print('Dame un valor para el radio del círculo');
r= Number(readline());

print('Dame un valor para la coordenada X');
x= Number(readline());

print('Dame un valor para la coordenada Y');
y= Number(readline());

d=Math.sqrt((x*x)+(y*y));

if (d<r){
	print('El punto está dentro del círculo')}
else if (d===r){
	print('El punto está exactamente en la circunferencia')}
else {
print('El punto está fuera del círculo')}