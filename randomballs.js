/*
Kody Kantor
Random ball generator
It will generate a selected number of balls, color them with random colors,
and then move them around a randomly generated path.
*/
window.onload=function()
{
    var number;
    var i;
    var dimension;
    var position;
    var identity;

    number=100;
    
    for(i=0;i<number;i=i+1)
    {
        document.getElementById("container").innerHTML=document.getElementById("container").innerHTML
        +"<div class='ball' id='ball"+i+"'></div>"
    }
    
    for(i=0;i<number;i=i+1)
    {        
        dimension=Math.floor(getRandomInteger(10));
        
        document.getElementById('ball'+i).style.backgroundColor=createRandomRGB();
        document.getElementById('ball'+i).style.height=dimension+'em';
        document.getElementById('ball'+i).style.width=dimension+'em';
    }
    
    animate(number);
}

function animate(quantity)
{
    var i;
    var element;
    var animation;
    var animationChars;
    
    animation=document.createElement('style');
    animation.type='text/css';
    
	var coordinates = new Array();

    for(i=0;i<quantity;i=i+1)
    {
        element=document.getElementById('ball'+i);
        element.style.animation="move"+i+" " +getRandomInteger(10)+"s infinite";
       	
		coordinates[0] = getRandomInteger(getRandomInteger(500));
		coordinates[1] = getRandomInteger(getRandomInteger(500));

        animationChars=document.createTextNode
    (
        '@keyframes move'+i+
		'{0% {top: 0px; left:0px;} 25% {top: 0px; left:'+coordinates[0]+'px;} 50% {top: '+
		coordinates[1]+ 'px; left:'+coordinates[0]+'px;} 75% {top: ' +
		coordinates[1]+ 'px; left: 0px;} 100% {top: 0px; left: 0px;}}'
    );
    animation.appendChild(animationChars);
    document.getElementsByTagName('head')[0].appendChild(animation);
    
    
    
    
    }
}



function getRandomInteger(upperLimit)
{
	var x;
	x=Math.random();
	return Math.floor(x*(upperLimit+1));
}

function createRandomRGB()
{
	var result;
	result="rgb("+
	getRandomInteger(255)+","+
	getRandomInteger(255)+","+
	getRandomInteger(255)+
	")";
	return result;
}
