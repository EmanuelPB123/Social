
var btn = document.getElementById('btn'),
caja1 = document.getElementById('gbg'),
caja2 = document.getElementById('bg'),
caja3 = document.getElementById('bga'),
caja4 = document.getElementById('bgb'),
caja5 = document.getElementById('bgc'),
caja6 = document.getElementById('bgd'),
caja7 = document.getElementById('bge'),
caja8 = document.getElementById('bgf'),
caja9 = document.getElementById('bgg'),

contador=0;


function change()

{   if(contador == 0)
{
        caja1.classList.add('gbg2');
        caja2.classList.add('bg2');
        caja3.classList.add('bga2');
        caja4.classList.add('bgb2');
        caja5.classList.add('bgc2');
        caja6.classList.add('bgd2');
        caja7.classList.add('bge2');
        caja8.classList.add('bgf2');
        caja9.classList.add('bgg2'); 

        contador = 1;
    }
    else
    {
        caja1.classList.remove('gbg2');
        caja2.classList.remove('bg2');
        caja3.classList.remove('bga2');
        caja4.classList.remove('bgb2');
        caja5.classList.remove('bgc2');
        caja6.classList.remove('bgd2');
        caja7.classList.remove('bge2');
        caja8.classList.remove('bgf2');
        caja9.classList.remove('bgg2'); 
            

        contador = 0}
}

var btn2 = document.getElementById('btn2'),
caja1 = document.getElementById('gbg'),
caja2 = document.getElementById('bg'),
caja3 = document.getElementById('bga'),
caja4 = document.getElementById('bgb'),
caja5 = document.getElementById('bgc'),
caja6 = document.getElementById('bgd'),
caja7 = document.getElementById('bge'),
caja8 = document.getElementById('bgf'),
caja9 = document.getElementById('bgg'),

contador=0;


function change()

{   if(contador == 0)
{
        caja1.classList.add('gbg2');
        caja2.classList.add('bg2');
        caja3.classList.add('bga2');
        caja4.classList.add('bgb2');
        caja5.classList.add('bgc2');
        caja6.classList.add('bgd2');
        caja7.classList.add('bge2');
        caja8.classList.add('bgf2');
        caja9.classList.add('bgg2'); 

        contador = 1;
    }
    else
    {
        caja1.classList.remove('gbg2');
        caja2.classList.remove('bg2');
        caja3.classList.remove('bga2');
        caja4.classList.remove('bgb2');
        caja5.classList.remove('bgc2');
        caja6.classList.remove('bgd2');
        caja7.classList.remove('bge2');
        caja8.classList.remove('bgf2');
        caja9.classList.remove('bgg2'); 
            

        contador = 0}
}

btn.addEventListener('click',change,true) 

  const switchButton = document.getElementById('btn');
 
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //toggle the HTML body the class 'dark'
    switchButton.classList.toggle('active');//toggle the HTML button with the id='switch' with the class 'active'
});   