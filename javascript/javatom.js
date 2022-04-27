

var pixel = 0;
var slider = 0;
var ani = $(".BilderBilar");



//  $(".window").click(function() {
    //console.log("klick");
    //$(".BilderBilar").animate({
      //right: "800px",
    //});
  //});




 $(".pil1").click(function() {



    console.log("right");
    pixel += 800;
    console.log(pixel);

    if(pixel==2400){
      pixel = 0;

      if(slider==0){
        $(ani).animate({

          right: "0px",

        }
        ,1000, function(){ //Animationen tar en sekund
        console.log("klart");
      });
      }
      else if(slider==1){
        $(ani).animate({

          right: "0px",

        }
        ,1000, function(){ //Animationen tar en sekund
        console.log("klart");
      });
      }


    }
    else {
      if(slider==0){
        $(ani).animate({

          right: "+=800",

        }
        ,1000, function(){ //Animationen tar en sekund
        console.log("klart");
      });
      }
      else if(slider==1){
        $(ani).animate({

          right: "+=400",

        }
        ,1000, function(){ //Animationen tar en sekund
        console.log("klart");
      });
      }


    }





  });




  $(".pil2").click(function() {

    console.log("left");
    pixel -= 800;
    console.log(pixel);

    if(pixel<0){
      pixel = 1600;

      if(slider==0){
        $(ani).animate({

          right: "1600px",

        }
        ,1000, function(){ //Animationen tar en sekund
        console.log("klart");
      });
      }
      else if(slider==1){
        $(ani).animate({

          right: "800px",

        }
        ,1000, function(){ //Animationen tar en sekund
        console.log("klart");
      });
      }


    }
    else {
      if(slider==0){
        $(ani).animate({

          right: "-=800",

        }
        ,1000, function(){ //Animationen tar en sekund
        console.log("klart");
      });
      }
      else if(slider==1){
        $(ani).animate({

          right: "-=400",

        }
        ,1000, function(){ //Animationen tar en sekund
        console.log("klart");
      });
      }


    }
    console.log(pixel);
  });





  $(".pil1").hover(function(){

    $(".pil1").attr("src","bilder/pilHV.png");

  }, function(){
      $(".pil1").attr("src","bilder/Pil1.png");
  });



  $(".pil2").hover(function(){

    $(".pil2").attr("src","bilder/pilVV.png");

  }, function(){
      $(".pil2").attr("src","bilder/Pil2.png");
  });


  $(".vidarepil").hover(function(){

    $(".vidarepil").attr("src","bilder/PilVidare2.png");

  }, function(){
      $(".vidarepil").attr("src","bilder/PilVidare1.png");
  });








  $(".vidarepil").click(function(){

    console.log("hej");
    window.location.href = "custom.html";

  });


  $(".vidarepil2").click(function(){

    console.log("hej");
    window.location.href = "index.html";

  });


  $(".vidarepil2").hover(function(){

    $(".vidarepil2").attr("src","bilder/PilVidare2.png");

  }, function(){
      $(".vidarepil2").attr("src","bilder/PilVidare1.png");
  });


$(window).resize(function(){

  if($(window).width()<800){

    $(".Vit").attr("src","bilder/Bil1VitL.png");
    $(".Grön").attr("src","bilder/Bil2Grönl.png");
    $(".Rosa").attr("src","bilder/Bil3Rosal.png");


    $(".BilderBilar").css('width', '1200px');
    $(".window").css('width', '400px');

    slider = 1;

console.log("slider="+slider);



  }
});

$(window).resize(function(){

  if($(window).width()>800){

    $(".Vit").attr("src","bilder/Bil1Vit.png");
    $(".Grön").attr("src","bilder/Bil2Grön.png");
    $(".Rosa").attr("src","bilder/Bil3Råsa.png");

    $(".BilderBilar").css('width', '2400px');
    $(".window").css('width', '800px');

    slider = 0;





console.log("slider="+slider);
  }
});
