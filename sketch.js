//Create variables here

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  

  drawSprites();
  //add styles here


  var happyDog;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodStock);
    dog.addImage(dogHappy); fill()
  }

  //Function to read values from DB
  function readStock(data){
    foodStock=data.val();
  }
//Function to write values in DB
function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}

}

  database.ref('/').update({
    Food:x
  })

  }





