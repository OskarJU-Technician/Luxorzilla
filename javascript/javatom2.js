

var color = 1;


$(window).resize(function(){

  if($(window).width()>800){

    //$(".Vit").attr("src","bilder/Bil1Vit.png");

    $(".white").click(function(){

      $(".Vit").attr("src","bilder/Bil1Vit.png");
      $("#Taiga").css("color","#E3D3E3");
      color = 1;


    });

    $(".green").click(function(){

      $(".Vit").attr("src","bilder/Bil2Grön.png");
      $("#Taiga").css("color","#2EE022");
      color = 2;


    });

    $(".pink").click(function(){

      $(".Vit").attr("src","bilder/Bil3Råsa.png");
      $("#Taiga").css("color","#E04EA8");
      color = 3;


    });




  }
});


$(window).resize(function(){

  if($(window).width()<800){

    if(color == 1){
      $(".Vit").attr("src","bilder/Bil1VitL.png");
    }
    else if(color == 2){
      $(".Vit").attr("src","bilder/Bil2Grönl.png");
    }
    else{
      $(".Vit").attr("src","bilder/Bil3Rosal.png");
    }



    $(".white").click(function(){

      $(".Vit").attr("src","bilder/Bil1VitL.png");
      $("#Taiga").css("color","#E3D3E3");


    });

    $(".green").click(function(){

      $(".Vit").attr("src","bilder/Bil2Grönl.png");
      $("#Taiga").css("color","#2EE022");


    });

    $(".pink").click(function(){

      $(".Vit").attr("src","bilder/Bil3Rosal.png");
      $("#Taiga").css("color","#E04EA8");


    });





  }
  else{
    if(color == 1){
      $(".Vit").attr("src","bilder/Bil1Vit.png");
    }
    else if(color == 2){
      $(".Vit").attr("src","bilder/Bil2Grön.png");
    }
    else{
      $(".Vit").attr("src","bilder/Bil3Råsa.png");
    }
  }
});
