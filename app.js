// good luck !

/* 1ere étape*/

$(".color").each(function(){
var couleur = $(this).attr("data-color");
$(this).css("background-color",couleur);
console.log(couleur);
    
  /* 2eme étape */ 
    
    $(this).click(function(){
    $("body").css("background-color",couleur);
        console.log("changement de fond");

    })
})


/* 3eme étape*/

$("#modify-texte").click(function(){
 if (this.checked) { 
    $("p").css("color", "#0099ff"); 
     console.log("fond en bleu");
}else{ 
    $("p").css("color", "#231919");
    console.log("texte marron")


} 
})
      
        
