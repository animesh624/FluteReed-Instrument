var numberofdrums=document.querySelectorAll(".drum").length;

// For mouse aur touch click
for(var i=0;i<numberofdrums;i++){
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      makesound(this.innerHTML);
      makeanimation(this.innerHTML);
   });
}

   // for keyboard click
   document.addEventListener("keypress", function(event){

      makesound(event.key);
      makeanimation(event.key);
});

       function makesound(drumchar){
         
     switch(drumchar){
        case "w":
        var tom1=new Audio("sounds/tom-1.mp3")
         tom1.play();
        break;

        case "a":
        var tom2=new Audio("sounds/tom-2.mp3")
         tom2.play();
        break;

        case "s":
        var tom3=new Audio("sounds/tom-3.mp3")
         tom3.play();
        break;

        case "d":
        var tom4=new Audio("sounds/tom-4.mp3")
         tom4.play();
        break;

        case "j":
        var snare=new Audio("sounds/snare.mp3")
         snare.play();
        break;

        case "k":
        var kickbass=new Audio("sounds/kick-bass.mp3")
         kickbass.play();
        break;

        case "l":
        var crash=new Audio("sounds/crash.mp3")
         crash.play();
        break;

        default:
        console.log("Sorry!!");

     }
  }

  function makeanimation(drumchar){
             var button=document.querySelector("."+drumchar);
           button.classList.add("pressed")

           setTimeout(function(){
                button.classList.remove("pressed");
           },50);
  }
         
   
         