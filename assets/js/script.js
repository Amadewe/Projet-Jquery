$(function() {
  $('#defileCloath').hide();
  $('#defileBall').hide();
 $('.bBallProduct').hide();
 $('.bWearProduct').hide();
 $('.bRacket').click(function() {
   //J'affiche le titre raquette avec le .show et je cache les deux autre titre avec .hide
   $('#defileRacket').show();
   $('#defileCloath').hide();
   $('#defileBall').hide();
   //J'affiche le Produit raquette avec le .show et je cache les deux autre Produit avec .hide
   $('.bRacketProduct').show();
   $('.bWearProduct').hide();
   $('.bBallProduct').hide();
 });
 $('.bWear').click(function() {
   $('#defileCloath').show();
   $('#defileRacket').hide();
   $('#defileBall').hide();
   $('.bWearProduct').show();
   $('.bRacketProduct').hide();
   $('.bBallProduct').hide();
 });
 $('.bBall').click(function() {
   $('#defileBall').show();
   $('#defileRacket').hide();
   $('#defileCloath').hide();
   $('.bBallProduct').show();
   $('.bRacketProduct').hide();
   $('.bWearProduct').hide();
 });

// Permet de faire un effet de "défillement" quand nous recliquons sur notre catégorie
  $('.navbar a').on('click', function(event) {

    event.preventDefault();
    var hash = this.hash;

    $('body,html').animate({
      scrollTop: $(hash).offset().top
    }, 1500, function() {
      window.location.hash = hash;
    });

  });
});


$(function(){

$(document).ready(function(){


  //Tests fenetre modale
  //on cache nos div
  $('#productOne').hide();
  $('#productTwo').hide();
  $('#productThree').hide();
  $('#productFour').hide();
  $('#productFive').hide();
  $('#productSix').hide();
  $('#productSeven').hide();
  $('#productEight').hide();
  $('#productNine').hide();
  $('#productTen').hide();
  $('#productEleven').hide();
  $('#productTwelve').hide();
  $('#productThirteen').hide();
  $('#productFourteen').hide();
  $('#productFifteen').hide();
  $('#productSixteen').hide();
  $('#productSeventeen').hide();
  $('#productEighteen').hide();
  $('#productNineteen').hide();
  $('#productTwenty').hide();
  $('#productTwentyOne').hide();
  $('#productTwentyTwo').hide();
  $('#productTwentyThree').hide();
  $('#productTwentyFour').hide();


  //je récupère le prix de mon premier article
  var priceOne = parseFloat($('#priceOne').text());
  var priceTwo = parseFloat($('#priceTwo').text());
  var priceThree = parseFloat($('#priceThree').text());
  var priceFour = parseFloat($('#priceFour').text());
  var priceFive = parseFloat($('#priceFive').text());
  var priceSix = parseFloat($('#priceSix').text());
  var priceSeven = parseFloat($('#priceSeven').text());
  var priceEight = parseFloat($('#priceEight').text());
  var priceNine = parseFloat($('#priceNine').text());
  var priceTen = parseFloat($('#priceTen').text());
  var priceEleven = parseFloat($('#priceEleven').text());
  var priceTwelve = parseFloat($('#priceTwelve').text());
  var priceThirteen = parseFloat($('#priceThirteen').text());
  var priceFourteen = parseFloat($('#priceFourteen').text());
  var priceFifteen = parseFloat($('#priceFifteen').text());
  var priceSixteen = parseFloat($('#priceSixteen').text());
  var priceSeventeen = parseFloat($('#priceSeventeen').text());
  var priceEighteen = parseFloat($('#priceEighteen').text());
  var priceNineteen = parseFloat($('#priceNineteen').text());
  var priceTwenty = parseFloat($('#priceTwenty').text());
  var priceTwentyOne = parseFloat($('#priceTwentyOne').text());
  var priceTwentyTwo = parseFloat($('#priceTwentyTwo').text());
  var priceTwentyThree = parseFloat($('#priceTwentyThree').text());
  var priceTwentyFour = parseFloat($('#priceTwentyFour').text());


  //on stocke la valeur de la quantité d'objet qu'il y a dejà dans une variable
  var amountOne = parseInt($('#amountOne').text());
  var amountTwo = parseInt($('#amountTwo').text());
  var amountThree = parseInt($('#amountThree').text());
  var amountFour = parseInt($('#amountFour').text());
  var amountFive = parseInt($('#amountFive').text());
  var amountSix = parseInt($('#amountSix').text());
  var amountSeven = parseInt($('#amountSeven').text());
  var amountEight = parseInt($('#amountEight').text());
  var amountNine = parseInt($('#amountNine').text());
  var amountTen = parseInt($('#amountTen').text());
  var amountEleven = parseInt($('#amountEleven').text());
  var amountTwelve = parseInt($('#amountTwelve').text());
  var amountThirteen = parseInt($('#amountThirteen').text());
  var amountFourteen = parseInt($('#amountFourteen').text());
  var amountFifteen = parseInt($('#amountFifteen').text());
  var amountSixteen = parseInt($('#amountSixteen').text());
  var amountSeventeen = parseInt($('#amountSeventeen').text());
  var amountEighteen = parseInt($('#amountEighteen').text());
  var amountNineteen = parseInt($('#amountNineteen').text());
  var amountTwenty = parseInt($('#amountTwenty').text());
  var amountTwentyOne = parseInt($('#amountTwentyOne').text());
  var amountTwentyTwo = parseInt($('#amountTwentyTwo').text());
  var amountTwentyThree = parseInt($('#amountTwentyThree').text());
  var amountTwentyFour = parseInt($('#amountTwentyFour').text());

  var subTotalOne = 0;
  var subTotalTwo = 0;
  var subTotalThree = 0;
  var subTotalFour = 0;
  var subTotalFive = 0;
  var subTotalSix = 0;
  var subTotalSeven = 0;
  var subTotalEight = 0;
  var subTotalNine = 0;
  var subTotalTen = 0;
  var subTotalEleven = 0;
  var subTotalTwelve = 0;
  var subTotalThirteen = 0;
  var subTotalFourteen = 0;
  var subTotalFifteen = 0;
  var subTotalSixteen = 0;
  var subTotalSeventeen = 0;
  var subTotalEighteen = 0;
  var subTotalNineteen = 0;
  var subTotalTwenty = 0;
  var subTotalTwentyOne = 0;
  var subTotalTwentyTwo = 0;
  var subTotalTwentyThree = 0;
  var subTotalTwentyFour = 0;

  var total = 0;
  //au clic qur le bouton en bas de la card, on lance une fonction
  $('.add').click(function(){

    //Si le bouton sur lequel on appuie correspond a la premire div:
    if($(this).attr('id') == 'addProductOne'){
      //on affiche la première div
      $('#productOne').show();
      //j'incrémente ma quantité de 1(puisqu'au début y'en avait 0)
      amountOne ++;
      //je stocke la quantité dans l'html pour l'afficher
      $('#amountOne').text(amountOne);
      //je calcule le sous total (c'est un peu con d'arrondir ici mais comme ça tout est pareil)
      subTotalOne = (Math.round((amountOne*priceOne)*100))/100;
      //je stocke le sous total dans l'html pour l'afficher
      $('#subTotalOne').text(subTotalOne);
      total +=priceOne;
      $('#total').text(total);
      //Sinon, si le bouton correspond a la seconde div:
    }else if($(this).attr('id') =='addProductTwo'){
      //on affiche la seconde div.
      $('#productTwo').show();
      amountTwo ++;
      $('#amountTwo').text(amountTwo);
      subTotalTwo = (Math.round((amountTwo*priceTwo)*100))/100;
      $('#subTotalTwo').text(subTotalTwo);
      total +=priceTwo;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductThree'){
      $('#productThree').show();
      amountThree ++;
      $('#amountThree').text(amountThree);
      subTotalThree = (Math.round((amountThree*priceThree)*100))/100;
      $('#subTotalThree').text(subTotalThree);
      total +=priceThree;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductFour'){
      $('#productFour').show();
      amountFour ++;
      $('#amountFour').text(amountFour);
      subTotalFour = (Math.round((amountFour*priceFour)*100))/100;
      $('#subTotalFour').text(subTotalFour);
      total +=priceFour;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductFive'){
      $('#productFive').show();
      amountFive ++;
      $('#amountFive').text(amountFive);
      subTotalFive = (Math.round((amountFive*priceFive)*100))/100;
      $('#subTotalFive').text(subTotalFive);
      total +=priceFive;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductSix'){
      $('#productSix').show();
      amountSix ++;
      $('#amountSix').text(amountSix);
      subTotalSix = (Math.round((amountSix*priceSix)*100))/100;
      $('#subTotalSix').text(subTotalSix);
      total +=priceSix;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductSeven'){
      $('#productSeven').show();
      amountSeven ++;
      $('#amountSeven').text(amountSeven);
      subTotalSeven = (Math.round((amountSeven*priceSeven)*100))/100;
      $('#subTotalSeven').text(subTotalSeven);
      total +=priceSeven;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductEight'){
      $('#productEight').show();
      amountEight ++;
      $('#amountEight').text(amountEight);
      subTotalEight = (Math.round((amountEight*priceEight)*100))/100;
      $('#subTotalEight').text(subTotalEight);
      total +=priceEight;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductNine'){
      $('#productNine').show();
      amountNine ++;
      $('#amountNine').text(amountNine);
      subTotalNine = (Math.round((amountNine*priceNine)*100))/100;
      $('#subTotalNine').text(subTotalNine);
      total +=priceNine;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductTen'){
      $('#productTen').show();
      amountTen ++;
      $('#amountTen').text(amountTen);
      subTotalTen = (Math.round((amountTen*priceTen)*100))/100;
      $('#subTotalTen').text(subTotalTen);
      total +=priceTen;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductEleven'){
      $('#productEleven').show();
      amountEleven ++;
      $('#amountEleven').text(amountEleven);
      subTotalEleven = (Math.round((amountEleven*priceEleven)*100))/100;
      $('#subTotalEleven').text(subTotalEleven);
      total +=priceEleven;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductTwelve'){
      $('#productTwelve').show();
      amountTwelve ++;
      $('#amountTwelve').text(amountTwelve);
      subTotalTwelve = (Math.round((amountTwelve*priceTwelve)*100))/100;
      $('#subTotalTwelve').text(subTotalTwelve);
      total +=priceTwelve;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductThirteen'){
      $('#productThirteen').show();
      amountThirteen ++;
      $('#amountThirteen').text(amountThirteen);
      subTotalThirteen = (Math.round((amountThirteen*priceThirteen)*100))/100;
      $('#subTotalThirteen').text(subTotalThirteen);
      total +=priceThirteen;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductFourteen'){
      $('#productFourteen').show();
      amountFourteen ++;
      $('#amountFourteen').text(amountFourteen);
      subTotalFourteen = (Math.round((amountFourteen*priceFourteen)*100))/100;
      $('#subTotalFourteen').text(subTotalFourteen);
      total +=priceFourteen;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductFifteen'){
      $('#productFifteen').show();
      amountFifteen ++;
      $('#amountFifteen').text(amountFifteen);
      subTotalFifteen = (Math.round((amountFifteen*priceFifteen)*100))/100;
      $('#subTotalFifteen').text(subTotalFifteen);
      total +=priceFifteen;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductSixteen'){
      $('#productSixteen').show();
      amountSixteen ++;
      $('#amountSixteen').text(amountSixteen);
      subTotalSixteen = (Math.round((amountSixteen*priceSixteen)*100))/100;
      $('#subTotalSixteen').text(subTotalSixteen);
      total +=priceSixteen;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductSeventeen'){
      $('#productSeventeen').show();
      amountSeventeen ++;
      $('#amountSeventeen').text(amountSeventeen);
      subTotalSeventeen = (Math.round((amountSeventeen*priceSeventeen)*100))/100;
      $('#subTotalSeventeen').text(subTotalSeventeen);
      total +=priceSeventeen;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductEighteen'){
      $('#productEighteen').show();
      amountEighteen ++;
      $('#amountEighteen').text(amountEighteen);
      subTotalEighteen = (Math.round((amountEighteen*priceEighteen)*100))/100;
      $('#subTotalEighteen').text(subTotalEighteen);
      total +=priceEighteen;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductNineteen'){
      $('#productNineteen').show();
      amountNineteen ++;
      $('#amountNineteen').text(amountNineteen);
      subTotalNineteen = (Math.round((amountNineteen*priceNineteen)*100))/100;
      $('#subTotalNineteen').text(subTotalNineteen);
      total +=priceNineteen;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductTwenty'){
      $('#productTwenty').show();
      amountTwenty ++;
      $('#amountTwenty').text(amountTwenty);
      subTotalTwenty = (Math.round((amountTwenty*priceTwenty)*100))/100;
      $('#subTotalTwenty').text(subTotalTwenty);
      total +=priceTwenty;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductTwentyOne'){
      $('#productTwentyOne').show();
      amountTwentyOne ++;
      $('#amountTwentyOne').text(amountTwentyOne);
      subTotalTwentyOne = (Math.round((amountTwentyOne*priceTwentyOne)*100))/100;
      $('#subTotalTwentyOne').text(subTotalTwentyOne);
      total +=priceTwentyOne;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductTwentyTwo'){
      $('#productTwentyTwo').show();
      amountTwentyTwo ++;
      $('#amountTwentyTwo').text(amountTwentyTwo);
      subTotalTwentyTwo = (Math.round((amountTwentyTwo*priceTwentyTwo)*100))/100;
      $('#subTotalTwentyTwo').text(subTotalTwentyTwo);
      total +=priceTwentyTwo;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductTwentyThree'){
      $('#productTwentyThree').show();
      amountTwentyThree ++;
      $('#amountTwentyThree').text(amountTwentyThree);
      subTotalTwentyThree = (Math.round((amountTwentyThree*priceTwentyThree)*100))/100;
      $('#subTotalTwentyThree').text(subTotalTwentyThree);
      total +=priceTwentyThree;
      $('#total').text(total);
    }else if($(this).attr('id') =='addProductTwentyFour'){
      $('#productTwentyFour').show();
      amountTwentyFour ++;
      $('#amountTwentyFour').text(amountTwentyFour);
      subTotalTwentyFour = (Math.round((amountTwentyFour*priceTwentyFour)*100))/100;
      $('#subTotalTwentyFour').text(subTotalTwentyFour);
      total +=priceTwentyFour;
      $('#total').text(total);
    }

  });
$(function(){


    //Quand on appuie sur le bouton "ajouter" de la première div:
    $('#addOne').click(function(){
      //on incrémente la quantité de un
      amountOne ++;
      //je calcule mon sous total arrondi
      subTotalOne = (Math.round((amountOne*priceOne)*100))/100;
      total +=priceOne;
      $('#total').text((Math.round(total*100)/100));
      //je stocke ce sous total dans l'html pour l'afficher
      $('#subTotalOne').text(subTotalOne);
      //on restocke la nouvelle valeur dans le html pour l'afficher
      $('#amountOne').text(amountOne);
    });
    $('#addTwo').click(function(){
      amountTwo ++;
      subTotalTwo = (Math.round((amountTwo*priceTwo)*100))/100;
      total +=priceTwo;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalTwo').text(subTotalTwo);
      $('#amountTwo').text(amountTwo);
    });
    $('#addThree').click(function(){
      amountThree ++;
      subTotalThree = (Math.round((amountThree*priceThree)*100))/100;
      total +=priceThree;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalThree').text(subTotalThree);
      $('#amountThree').text(amountThree);
    });
    $('#addFour').click(function(){
      amountFour ++;
      subTotalFour = (Math.round((amountFour*priceFour)*100))/100;
      total +=priceFour;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalFour').text(subTotalFour);
      $('#amountFour').text(amountFour);
      console.log(priceFour);
    });
    $('#addFive').click(function(){
      amountFive ++;
      subTotalFive = (Math.round((amountFive*priceFive)*100))/100;
      total +=priceFive;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalFive').text(subTotalFive);
      $('#amountFive').text(amountFive);
    });
    $('#addSix').click(function(){
      amountSix ++;
      subTotalSix = (Math.round((amountSix*priceSix)*100))/100;
      total +=priceSix;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalSix').text(subTotalSix);
      $('#amountSix').text(amountSix);
    });
    $('#addSeven').click(function(){
      amountSeven ++;
      subTotalSeven = (Math.round((amountSeven*priceSeven)*100))/100;
      total +=priceSeven;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalSeven').text(subTotalSeven);
      $('#amountSeven').text(amountSeven);
    });
    $('#addEight').click(function(){
      amountEight ++;
      subTotalEight = (Math.round((amountEight*priceEight)*100))/100;
      total +=priceEight;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalEight').text(subTotalEight);
      $('#amountEight').text(amountEight);
    });
    $('#addNine').click(function(){
      amountNine ++;
      subTotalNine = (Math.round((amountNine*priceNine)*100))/100;
      total +=priceNine;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalNine').text(subTotalNine);
      $('#amountNine').text(amountNine);
    });
    $('#addTen').click(function(){
      amountTen ++;
      subTotalTen = (Math.round((amountTen*priceTen)*100))/100;
      total +=priceTen;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalTen').text(subTotalTen);
      $('#amountTen').text(amountTen);
    });
    $('#addEleven').click(function(){
      amountEleven ++;
      subTotalEleven = (Math.round((amountEleven*priceEleven)*100))/100;
      total +=priceEleven;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalEleven').text(subTotalEleven);
      $('#amountEleven').text(amountEleven);
    });
    $('#addTwelve').click(function(){
      amountTwelve ++;
      subTotalTwelve = (Math.round((amountTwelve*priceTwelve)*100))/100;
      total +=priceTwelve;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalTwelve').text(subTotalTwelve);
      $('#amountTwelve').text(amountTwelve);
    });
    $('#addThirteen').click(function(){
      amountThirteen ++;
      subTotalThirteen = (Math.round((amountThirteen*priceThirteen)*100))/100;
      total +=priceThirteen;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalThirteen').text(subTotalThirteen);
      $('#amountThirteen').text(amountThirteen);
    });
    $('#addFourteen').click(function(){
      amountFourteen ++;
      subTotalFourteen = (Math.round((amountFourteen*priceFourteen)*100))/100;
      total +=priceFourteen;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalFourteen').text(subTotalFourteen);
      $('#amountFourteen').text(amountFourteen);
    });
    $('#addFifteen').click(function(){
      amountFifteen ++;
      subTotalFifteen = (Math.round((amountFifteen*priceFifteen)*100))/100;
      total +=priceFifteen;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalFifteen').text(subTotalFifteen);
      $('#amountFifteen').text(amountFifteen);
    });
    $('#addSixteen').click(function(){
      amountSixteen ++;
      subTotalSixteen = (Math.round((amountSixteen*priceSixteen)*100))/100;
      total +=priceSixteen;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalSixteen').text(subTotalSixteen);
      $('#amountSixteen').text(amountSixteen);
    });
    $('#addSeventeen').click(function(){
      amountSeventeen ++;
      subTotalSeventeen = (Math.round((amountSeventeen*priceSeventeen)*100))/100;
      total +=priceSeventeen;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalSeventeen').text(subTotalSeventeen);
      $('#amountSeventeen').text(amountSeventeen);
    });
    $('#addEighteen').click(function(){
      amountEighteen ++;
      subTotalEighteen = (Math.round((amountEighteen*priceEighteen)*100))/100;
      total +=priceEighteen;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalEighteen').text(subTotalEighteen);
      $('#amountEighteen').text(amountEighteen);
    });
    $('#addNineteen').click(function(){
      amountNineteen ++;
      subTotalNineteen = (Math.round((amountNineteen*priceNineteen)*100))/100;
      total +=priceNineteen;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalNineteen').text(subTotalNineteen);
      $('#amountNineteen').text(amountNineteen);
    });
    $('#addTwenty').click(function(){
      amountTwenty ++;
      subTotalTwenty = (Math.round((amountTwenty*priceTwenty)*100))/100;
      total +=priceTwenty;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalTwenty').text(subTotalTwenty);
      $('#amountTwenty').text(amountTwenty);
    });
    $('#addTwentyOne').click(function(){
      amountTwentyOne ++;
      subTotalTwentyOne = (Math.round((amountTwentyOne*priceTwentyOne)*100))/100;
      total +=priceTwentyOne;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalTwentyOne').text(subTotalTwentyOne);
      $('#amountTwentyOne').text(amountTwentyOne);
    });
    $('#addTwentyTwo').click(function(){
      amountTwentyTwo ++;
      subTotalTwentyTwo = (Math.round((amountTwentyTwo*priceTwentyTwo)*100))/100;
      total +=priceTwentyTwo;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalTwentyTwo').text(subTotalTwentyTwo);
      $('#amountTwentyTwo').text(amountTwentyTwo);
    });
    $('#addTwentyThree').click(function(){
      amountTwentyThree ++;
      subTotalTwentyThree = (Math.round((amountTwentyThree*priceTwentyThree)*100))/100;
      total +=priceTwentyThree;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalTwentyThree').text(subTotalTwentyThree);
      $('#amountTwentyThree').text(amountTwentyThree);
    });
    $('#addTwentyFour').click(function(){
      amountTwentyFour ++;
      subTotalTwentyFour = (Math.round((amountTwentyFour*priceTwentyFour)*100))/100;
      total +=priceTwentyFour;
      $('#total').text((Math.round(total*100)/100));
      $('#subTotalTwentyFour').text(subTotalTwentyFour);
      $('#amountTwentyFour').text(amountTwentyFour);
    });
    //Quand on appuie sur le bouton "retirer" de la première div:
    $('#releaseOne').click(function(){
      //Si on a plus de 1 article:
      if(amountOne > 1){
        //on décrémente la quantité de 1.
        total -=priceOne;
        $('#total').text((Math.round(total*100)/100));
        amountOne --;
        //je calcule le sous total arrondi
        subTotalOne = (Math.round((amountOne*priceOne)*100))/100;
        //je stocke le sous total dans l'html pour l'afficher
        $('#subTotalOne').text(subTotalOne);
      }//Sinon on ne fait rien.
      //et on restocke la nouvelle valeur dans l'html pour l'afficher
      $('#amountOne').text(amountOne);
    });
    $('#releaseTwo').click(function(){
      if(amountTwo > 1){
        total -=priceTwo;
        $('#total').text((Math.round(total*100)/100));
        amountTwo --;
        subTotalTwo = (Math.round((amountTwo*priceTwo)*100))/100;
        $('#subTotalTwo').text(subTotalTwo);
        $('#amountTwo').text(amountTwo);
      }
    });
    $('#releaseThree').click(function(){
      if(amountThree > 1){
        total -=priceThree;
        $('#total').text((Math.round(total*100)/100));
        amountThree --;
        subTotalThree = (Math.round((amountThree*priceThree)*100))/100;
        $('#subTotalThree').text(subTotalThree);
        $('#amountThree').text(amountThree);
      }
    });
    $('#releaseFour').click(function(){
      if(amountFour > 1){
        total -=priceFour;
        $('#total').text((Math.round(total*100)/100));
        amountFour --;
        subTotalFour = (Math.round((amountFour*priceFour)*100))/100;
        $('#subTotalFour').text(subTotalFour);
        $('#amountFour').text(amountFour);
      }
    });
    $('#releaseFive').click(function(){
      if(amountFive > 1){
        total -=priceFive;
        $('#total').text((Math.round(total*100)/100));
        amountFive --;
        subTotalFive = (Math.round((amountFive*priceFive)*100))/100;
        $('#subTotalFive').text(subTotalFive);
        $('#amountFive').text(amountFive);
      }
    });
    $('#releaseSix').click(function(){
      if(amountSix > 1){
        total -=priceSix;
        $('#total').text((Math.round(total*100)/100));
        amountSix --;
        subTotalSix = (Math.round((amountSix*priceSix)*100))/100;
        $('#subTotalSix').text(subTotalSix);
        $('#amountSix').text(amountSix);
      }
    });
    $('#releaseSeven').click(function(){
      if(amountSeven > 1){
        total -=priceSeven;
        $('#total').text((Math.round(total*100)/100));
        amountSeven --;
        subTotalSeven = (Math.round((amountSeven*priceSeven)*100))/100;
        $('#subTotalSeven').text(subTotalSeven);
        $('#amountSeven').text(amountSeven);
      }
    });
    $('#releaseEight').click(function(){
      if(amountEight > 1){
        total -=priceEight;
        $('#total').text((Math.round(total*100)/100));
        amountEight --;
        subTotalEight = (Math.round((amountEight*priceEight)*100))/100;
        $('#subTotalEight').text(subTotalEight);
        $('#amountEight').text(amountEight);
      }
    });
    $('#releaseNine').click(function(){
      if(amountNine > 1){
        total -=priceNine;
        $('#total').text((Math.round(total*100)/100));
        amountNine --;
        subTotalNine = (Math.round((amountNine*priceNine)*100))/100;
        $('#subTotalNine').text(subTotalNine);
        $('#amountNine').text(amountNine);
      }
    });
    $('#releaseTen').click(function(){
      if(amountTen > 1){
        total -=priceTen;
        $('#total').text((Math.round(total*100)/100));
        amountTen --;
        subTotalTen = (Math.round((amountTen*priceTen)*100))/100;
        $('#subTotalTen').text(subTotalTen);
        $('#amountTen').text(amountTen);
      }
    });
    $('#releaseEleven').click(function(){
      if(amountEleven > 1){
        total -=priceEleven;
        $('#total').text((Math.round(total*100)/100));
        amountEleven --;
        subTotalEleven = (Math.round((amountEleven*priceEleven)*100))/100;
        $('#subTotalEleven').text(subTotalEleven);
        $('#amountEleven').text(amountEleven);
      }
    });
    $('#releaseTwelve').click(function(){
      if(amountTwelve > 1){
        total -=priceTwelve;
        $('#total').text((Math.round(total*100)/100));
        amountTwelve --;
        subTotalTwelve = (Math.round((amountTwelve*priceTwelve)*100))/100;
        $('#subTotalTwelve').text(subTotalTwelve);
        $('#amountTwelve').text(amountTwelve);
      }
    });
    $('#releaseThirteen').click(function(){
      if(amountThirteen > 1){
        total -=priceThirteen;
        $('#total').text((Math.round(total*100)/100));
        amountThirteen --;
        subTotalThirteen = (Math.round((amountThirteen*priceThirteen)*100))/100;
        $('#subTotalThirteen').text(subTotalThirteen);
        $('#amountThirteen').text(amountThirteen);
      }
    });
    $('#releaseFourteen').click(function(){
      if(amountFourteen > 1){
        total -=priceFourteen;
        $('#total').text((Math.round(total*100)/100));
        amountFourteen --;
        subTotalFourteen = (Math.round((amountFourteen*priceFourteen)*100))/100;
        $('#subTotalFourteen').text(subTotalFourteen);
        $('#amountFourteen').text(amountFourteen);
      }
    });
    $('#releaseFifteen').click(function(){
      if(amountFifteen > 1){
        total -=priceFifteen;
        $('#total').text((Math.round(total*100)/100));
        amountFifteen --;
        subTotalFifteen = (Math.round((amountFifteen*priceFifteen)*100))/100;
        $('#subTotalFifteen').text(subTotalFifteen);
        $('#amountFifteen').text(amountFifteen);
      }
    });
    $('#releaseSixteen').click(function(){
      if(amountSixteen > 1){
        total -=priceSixteen;
        $('#total').text((Math.round(total*100)/100));
        amountSixteen --;
        subTotalSixteen = (Math.round((amountSixteen*priceSixteen)*100))/100;
        $('#subTotalSixteen').text(subTotalSixteen);
        $('#amountSixteen').text(amountSixteen);
      }
    });
    $('#releaseSeventeen').click(function(){
      if(amountSeventeen > 1){
        total -=priceSeventeen;
        $('#total').text((Math.round(total*100)/100));
        amountSeventeen --;
        subTotalSeventeen = (Math.round((amountSeventeen*priceSeventeen)*100))/100;
        $('#subTotalSeventeen').text(subTotalSeventeen);
        $('#amountSeventeen').text(amountSeventeen);
      }
    });
    $('#releaseEighteen').click(function(){
      if(amountEighteen > 1){
        total -=priceEighteen;
        $('#total').text((Math.round(total*100)/100));
        amountEighteen --;
        subTotalEighteen = (Math.round((amountEighteen*priceEighteen)*100))/100;
        $('#subTotalEighteen').text(subTotalEighteen);
        $('#amountEighteen').text(amountEighteen);
      }
    });
    $('#releaseNineteen').click(function(){
      if(amountNineteen > 1){
        total -=priceNineteen;
        $('#total').text((Math.round(total*100)/100));
        amountNineteen --;
        subTotalNineteen = (Math.round((amountNineteen*priceNineteen)*100))/100;
        $('#subTotalNineteen').text(subTotalNineteen);
        $('#amountNineteen').text(amountNineteen);
      }
    });
    $('#releaseTwenty').click(function(){
      if(amountTwenty > 1){
        total -=priceTwenty;
        $('#total').text((Math.round(total*100)/100));
        amountTwenty --;
        subTotalTwenty = (Math.round((amountTwenty*priceTwenty)*100))/100;
        $('#subTotalTwenty').text(subTotalTwenty);
        $('#amountTwenty').text(amountTwenty);
      }
    });
    $('#releaseTwentyOne').click(function(){
      if(amountTwentyOne > 1){
        total -=priceTwentyOne;
        $('#total').text((Math.round(total*100)/100));
        amountTwentyOne --;
        subTotalTwentyOne = (Math.round((amountTwentyOne*priceTwentyOne)*100))/100;
        $('#subTotalTwentyOne').text(subTotalTwentyOne);
        $('#amountTwentyOne').text(amountTwentyOne);
      }
    });
    $('#releaseTwentyTwo').click(function(){
      if(amountTwentyTwo > 1){
        total -=priceTwentyTwo;
        $('#total').text((Math.round(total*100)/100));
        amountTwentyTwo --;
        subTotalTwentyTwo = (Math.round((amountTwentyTwo*priceTwentyTwo)*100))/100;
        $('#subTotalTwentyTwo').text(subTotalTwentyTwo);
        $('#amountTwentyTwo').text(amountTwentyTwo);
      }
    });
    $('#releaseTwentyThree').click(function(){
      if(amountTwentyThree > 1){
        total -=priceTwentyThree;
        $('#total').text((Math.round(total*100)/100));
        amountTwentyThree --;
        subTotalTwentyThree = (Math.round((amountTwentyThree*priceTwentyThree)*100))/100;
        $('#subTotalTwentyThree').text(subTotalTwentyThree);
        $('#amountTwentyThree').text(amountTwentyThree);
      }
    });
    $('#releaseTwentyFour').click(function(){
      if(amountTwentyFour > 1){
        total -=priceTwentyFour;
        $('#total').text((Math.round(total*100)/100));
        amountTwentyFour --;
        subTotalTwentyFour = (Math.round((amountTwentyFour*priceTwentyFour)*100))/100;
        $('#subTotalTwentyFour').text(subTotalTwentyFour);
        $('#amountTwentyFour').text(amountTwentyFour);
      }
    });
    //Quand on appuie sur "supprimer" de la première div, on lance une fonction
    $('#delOne').click(function(){
      total -=subTotalOne;
      $('#total').text((Math.round(total*100)/100));
      //on remet la quantité a 0,
      amountOne = 0;
      //on stocke la valeur dans l'html pour l'afficher(meme si c'est caché, on ira la rechercher la bas donc bon)
      $('#amountOne').text(amountOne);
      //Et on cache la première div.
      $('#productOne').hide();
    });
    $('#delTwo').click(function(){
      total -=subTotalTwo;
      $('#total').text((Math.round(total*100)/100));
      amountTwo = 0;
      $('#amountTwo').text(amountTwo);
      $('#productTwo').hide();
    });
    $('#delThree').click(function(){
      total -=subTotalThree;
      $('#total').text((Math.round(total*100)/100));
      amountThree = 0;
      $('#amountThree').text(amountThree);
      $('#productThree').hide();
    });
    $('#delFour').click(function(){
      total -=subTotalFour;
      $('#total').text((Math.round(total*100)/100));
      amountFour = 0;
      $('#amountFour').text(amountFour);
      $('#productFour').hide();
    });
    $('#delFive').click(function(){
      total -=subTotalFive;
      $('#total').text((Math.round(total*100)/100));
      amountFive = 0;
      $('#amountFive').text(amountFive);
      $('#productFive').hide();
    });
    $('#delSix').click(function(){
      total -=subTotalSix;
      $('#total').text((Math.round(total*100)/100));
      amountSix = 0;
      $('#amountSix').text(amountSix);
      $('#productSix').hide();
    });
    $('#delSeven').click(function(){
      total -=subTotalSeven;
      $('#total').text((Math.round(total*100)/100));
      amountSeven = 0;
      $('#amountSeven').text(amountSeven);
      $('#productSeven').hide();
    });
    $('#delEight').click(function(){
      total -=subTotalEight;
      $('#total').text((Math.round(total*100)/100));
      amountEight = 0;
      $('#amountEight').text(amountEight);
      $('#productEight').hide();
    });
    $('#delNine').click(function(){
      total -=subTotalNine;
      $('#total').text((Math.round(total*100)/100));
      amountNine = 0;
      $('#amountNine').text(amountNine);
      $('#productNine').hide();
    });
    $('#delTen').click(function(){
      total -=subTotalTen;
      $('#total').text((Math.round(total*100)/100));
      amountTen = 0;
      $('#amountTen').text(amountTen);
      $('#productTen').hide();
    });
    $('#delEleven').click(function(){
      total -=subTotalEleven;
      $('#total').text((Math.round(total*100)/100));
      amountEleven = 0;
      $('#amountEleven').text(amountEleven);
      $('#productEleven').hide();
    });
    $('#delTwelve').click(function(){
      total -=subTotalTwelve;
      $('#total').text((Math.round(total*100)/100));
      amountTwelve = 0;
      $('#amountTwelve').text(amountTwelve);
      $('#productTwelve').hide();
    });
    $('#delThirteen').click(function(){
      total -=subTotalThirteen;
      $('#total').text((Math.round(total*100)/100));
      amountThirteen = 0;
      $('#amountThirteen').text(amountThirteen);
      $('#productThirteen').hide();
    });
    $('#delFourteen').click(function(){
      total -=subTotalFourteen;
      $('#total').text((Math.round(total*100)/100));
      amountFourteen = 0;
      $('#amountFourteen').text(amountFourteen);
      $('#productFourteen').hide();
    });
    $('#delFifteen').click(function(){
      total -=subTotalFifteen;
      $('#total').text((Math.round(total*100)/100));
      amountFifteen = 0;
      $('#amountFifteen').text(amountFifteen);
      $('#productFifteen').hide();
    });
    $('#delSixteen').click(function(){
      total -=subTotalSixteen;
      $('#total').text((Math.round(total*100)/100));
      amountSixteen = 0;
      $('#amountSixteen').text(amountSixteen);
      $('#productSixteen').hide();
    });
    $('#delSeventeen').click(function(){
      total -=subTotalSeventeen;
      $('#total').text((Math.round(total*100)/100));
      amountSeventeen = 0;
      $('#amountSeventeen').text(amountSeventeen);
      $('#productSeventeen').hide();
    });
    $('#delEighteen').click(function(){
      total -=subTotalEighteen;
      $('#total').text((Math.round(total*100)/100));
      amountEighteen = 0;
      $('#amountEighteen').text(amountEighteen);
      $('#productEighteen').hide();
    });
    $('#delNineteen').click(function(){
      total -=subTotalNineteen;
      $('#total').text((Math.round(total*100)/100));
      amountNineteen = 0;
      $('#amountNineteen').text(amountNineteen);
      $('#productNineteen').hide();
    });
    $('#delTwenty').click(function(){
      total -=subTotalTwenty;
      $('#total').text((Math.round(total*100)/100));
      amountTwenty = 0;
      $('#amountTwenty').text(amountTwenty);
      $('#productTwenty').hide();
    });
    $('#delTwentyOne').click(function(){
      total -=subTotalTwentyOne;
      $('#total').text((Math.round(total*100)/100));
      amountTwentyOne = 0;
      $('#amountTwentyOne').text(amountTwentyOne);
      $('#productTwentyOne').hide();
    });
    $('#delTwentyTwo').click(function(){
      total -=subTotalTwentyTwo;
      $('#total').text((Math.round(total*100)/100));
      amountTwentyTwo = 0;
      $('#amountTwentyTwo').text(amountTwentyTwo);
      $('#productTwentyTwo').hide();
    });
    $('#delTwentyThree').click(function(){
      total -=subTotalTwentyThree;
      $('#total').text((Math.round(total*100)/100));
      amountTwentyThree = 0;
      $('#amountTwentyThree').text(amountTwentyThree);
      $('#productTwentyThree').hide();
    });
    $('#delTwentyFour').click(function(){
      total -=subTotalTwentyFour;
      $('#total').text((Math.round(total*100)/100));
      amountTwentyFour = 0;
      $('#amountTwentyFour').text(amountTwentyFour);
      $('#productTwentyFour').hide();
    });
  });
});
});

$(function(){
$('#Buy').click(function(){
  alert('Merci de votre achat ! \n A bientôt sur Tc E2N');
});
});

// Footer
$(document).ready(function(){
$('#validation').click(function(){
//Déclaration des variables + récupération de la valeur de l'id mail
var mail = $('#mail').val();
//Regex pour l'adresse mail
var regexMail = /^[A-Za-z0-9._]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//Condition pour tester les regex sur chaque variables
if (regexMail.test(mail) == true) {
  //Message disant que le le mail est correct
  alert('Bienvenue dans la team TCE2N !');
}
else {
  //Message d'erreur si le formulaire n'est pas bon
  alert('Vérifiez que votre addresse mail est au bon format,il doit être composé de texte (avec ou sans chiffres), un signe @, un . suivi de deux lettre.\'.');
}
console.log(mail);
});
});
