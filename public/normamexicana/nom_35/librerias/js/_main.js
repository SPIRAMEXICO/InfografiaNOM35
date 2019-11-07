var vistos=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var vista=0;
var scalePage = 1;
function playContenidoDesk() {
    if(navigator.userAgent.match(/Firefox/) || navigator.userAgent.match(/Edge/)){
        $(".aFx").each(function() {
            var margenTop = "";
            var margenLeft = "";
            var cadena = $(this).attr("style");
            var cadena2 = cadena.replace(/ /gi, "");
            var bloqueGral = cadena2.split(";");
            for(var i=0;i<bloqueGral.length;i++){
                var bloqueCadena = bloqueGral[i].split(":");
                if(bloqueCadena[0] == "margin-top"){
                    margenTop = parseFloat(bloqueCadena[1].replace(/vw/gi, ""));
                    $(this).css("margin-top", (margenTop*2)+"vw");          
                }
                if(bloqueCadena[0] == "margin-left"){
                    margenLeft = parseFloat(bloqueCadena[1].replace(/vw/gi, ""));
                    $(this).css("margin-left", (margenLeft*2)+"vw");
                }
            }            
        });       
        document.getElementById("menuNav").classList.add('menuNavEdge');
        document.querySelectorAll(".btnsNav").forEach(
            elemento => {elemento.classList.add('navEdge')}
        );   
        
        /*document.getElementById("menuNavnom").classList.add('menuNavEdgenom');
        document.querySelectorAll(".btnsNavnom").forEach(
            elemento => {elemento.classList.add('navEdgenom')}
        );   
        document.getElementById("menuNavSIX").classList.add('menuNavEdgeSIX');
        document.querySelectorAll(".btnsNavSIX").forEach(
            elemento => {elemento.classList.add('navEdgeSIX')}
        );   
        document.getElementById("menuNavRetail").classList.add('menuNavEdgeRetail');
        document.querySelectorAll(".btnsNavRetail").forEach(
            elemento => {elemento.classList.add('navEdgeRetail')}
        );*/   
    }
    
  slide0(0).addTo(controller);
  slide1(1).addTo(controller);
  slide2(2).addTo(controller);
  slide3(3).addTo(controller);
  slide4(4).addTo(controller);
  slide5(5).addTo(controller);
  slide6(6).addTo(controller);
  slide7(7).addTo(controller);
  slide8(8).addTo(controller);
  slide9(9).addTo(controller);
  slide10(10).addTo(controller);
  slide11(11).addTo(controller);
  slide12(12).addTo(controller);
  slide13(13).addTo(controller);
  slide14(14).addTo(controller);
  slide15(15).addTo(controller);
  slide16(16).addTo(controller);
  slide17(17).addTo(controller);
  slide18(18).addTo(controller);
  slide19(19).addTo(controller);
  slide20(20).addTo(controller);
  
    
        iniciarMenu();
    /*
        iniciarMenunom();
        iniciarMenuSIX();
        iniciarMenuRetail();
    */
}

function slide0(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#portada", 0.5 ,{delay:.2,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#portada_fondo", .5,{delay:.4, css:{ opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img1", .5,{delay:.7, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img2", .5,{delay:.9, css:{"margin-top": "-10vh",opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img3", .5,{delay:1.2,css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img4", .5,{delay:1.4,css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img5", .5,{delay:1.6,css:{"margin-left": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img6", .5,{delay:1.8,css:{"margin-left": "90vh", opacity:0}}),0);
    
    timeline.add(TweenMax.from("#menuNav", 1,{css:{"margin-top": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from(".indice-text", 1,{css:{"margin-top": "30vh", opacity:0}}),0);

    var scene = new ScrollMagic.Scene({ 
        triggerElement: "#portada"
        
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';
        vistos[i]=1;
    }).on("enter leave", function () {
        console.log("portada");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide1(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#nom1", 0.5, {delay:.2,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#nom1_img1", .5,{delay:.4, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom1_img2", .5,{delay:.8, css:{"margin-left": "-90vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom1_img3", .5,{delay:1, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#nom1_img4", .5,{delay:1.2,css:{"margin-top": "-50vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom1_img5", .5,{delay:1.5,css:{top:"1vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom1_img6", .5,{delay:1.7, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom1_img7", .5,{delay:1.9,css:{"margin-top": "-40vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom1_img8", .5,{delay:2,css:{"margin-top": "-30vw", opacity:0}}),0);
    
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#nom1"
    }).on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("nom1");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide2(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#nom2", 0.5,{delay:.2,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#nom2_img1", .5,{delay:.4 ,css:{ opacity:0}}),0);
    timeline.add(TweenMax.from("#nom2_img2", .5,{delay:.6,css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#nom2_img3", .5,{delay:.8,css:{"margin-left": "-60vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom2_img4", .5,{delay:1,css:{"margin-top": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom2_img5", .5,{delay:1.2,css:{"margin-top": "-15vh", opacity:0}}),0);
            
    var scene = new ScrollMagic.Scene({
        triggerElement: "#nom2"
    }).on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("nom2");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide3(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#nom3", 0.5,{delay:.2,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#nom3_img1", .5,{delay:.4 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom3_img2", .5,{delay:.6, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom3_img3", .5,{delay:.8, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom3_img4", .5,{delay:1, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom3_img5", .5,{delay:1.2, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#nom3_img6", .5,{delay:1.4, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom3_img7", .5,{delay:1.6, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    
    $("#nom3 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#nom3"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("nom3");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide4(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#nom4", 0.5, {delay:.2,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#nom4_img1", .5,{delay:.4 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom4_img2", .5,{delay:.6, css:{opacity: 0}}),0);
    timeline.add(TweenMax.from("#nom4_img3", .5,{delay:1.2, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#nom4_img4", .5,{delay:1.4, css:{"margin-top": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom4_img5", .5,{delay:1.6, css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom4_img6", .5,{delay:1.8, css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom4_img7", .5,{delay:2, css:{opacity:0}}),0);
    $("#nom4 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#nom4"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("nom4");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide5(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#nom5", 0.5, {delay:.2,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#nom5_img1", .5,{delay:.4 ,css:{"margin-top": "-30vw", opacity:0}}),0); 
    timeline.add(TweenMax.from("#nom5_img2", .5,{delay:.6 ,css:{"margin-top": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom5_img3", .5,{delay:.8, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom5_img4", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#nom5_img5", .5,{delay:1.2, css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom5_img6", .5,{delay:2.2, css:{opacity:0}}),0);
    
    $("#nom5 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: "#nom5"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("nom5");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide6 (i) {    
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#nom6", 0.5, {delay:.2,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#nom6_img1", .5,{delay:.4 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom6_img2", .5,{delay:.6, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#nom6_img3", .5,{delay:.8, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom6_img4", .5,{delay:1.4, css:{opacity:0}}),0);
    
    
    
    $("#nom6 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#nom6"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("nom5");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide7(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#nom7", 0.5, {delay:.2,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#nom7_img1", .5,{delay:.4 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom7_img2", .5,{delay:.6, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom7_img3", .5,{delay:.8, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#nom7_img4", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom7_img5", .5,{delay:1.2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom7_img6", .5,{delay:1.4, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#nom7_img7", .5,{delay:1.6, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom7_img8", .5,{delay:1.8, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom7_img9", .5,{delay:2, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    
    $("#nom7 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#nom7"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("nom7");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide8 (i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#nom8", 0.5, {delay:.2,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#nom8_img1", .5,{delay:.4 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom8_img2", .5,{delay:.6, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom8_img3", .5,{delay:.8, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom8_img4", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom8_img5", .5,{delay:1.2, css:{"margin-top": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom8_img6", .5,{delay:1.4, css:{"margin-left": "10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#nom8_img7", .5,{delay:1.6, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#nom8_img12", .5,{delay:2.5, css:{opacity:0}}),0);
          
    $("#nom8_img8").fadeOut();
    $("#nom8_img9").fadeOut();
    $("#nom8_img10").fadeOut();
    $("#nom8_img11").fadeOut();
    $("#nom8_img13").fadeOut();
    $("#nom8_img14").fadeOut();
    $("#nom8_img15").fadeOut();

    $("#cerrar1").fadeOut();
    $("#click2").fadeOut();
    $("#cerrar2").fadeOut();
    $("#click3").fadeOut();
    $("#cerrar3").fadeOut();
    $("#click4").fadeOut();
    $("#cerrar4").fadeOut();

    $("#click1").click(function(){
       
        $("#click1").fadeOut();
        $("#nom8_img8").fadeIn();
        $("#cerrar1").fadeIn();
        $("#nom8_img12").fadeOut();

    });

    $("#cerrar1").click(function(){
       
      $("#cerrar1").fadeOut();
      $("#nom8_img8").fadeOut();
      $("#click2").fadeIn();
      $("#nom8_img13").fadeIn();

  });

  $("#click2").click(function(){
       
    $("#click2").fadeOut();
    $("#nom8_img9").fadeIn();
    $("#cerrar2").fadeIn();
    $("#nom8_img13").fadeOut();

});

$("#cerrar2").click(function(){
   
  $("#cerrar2").fadeOut();
  $("#nom8_img9").fadeOut();
  $("#click3").fadeIn();
  $("#nom8_img14").fadeIn();

});

$("#click3").click(function(){
       
  $("#click3").fadeOut();
  $("#nom8_img10").fadeIn();
  $("#cerrar3").fadeIn();
  $("#nom8_img14").fadeOut();

});

$("#cerrar3").click(function(){
 
$("#cerrar3").fadeOut();
$("#nom8_img10").fadeOut();
$("#click4").fadeIn();
$("#nom8_img15").fadeIn();

});

$("#click4").click(function(){
       
  $("#click4").fadeOut();
  $("#nom8_img11").fadeIn();
  $("#cerrar4").fadeIn();
  $("#nom8_img15").fadeOut();

});

$("#cerrar4").click(function(){
 
$("#cerrar4").fadeOut();
$("#nom8_img11").fadeOut();

});




    
    $("#nom8 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#nom8"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("nom8");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide9(i){
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#nom9", 0.5, {delay:.2,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#nom9_img1", .5,{delay:.4 ,css:{"margin-top": "-30vw", opacity:0}}),0);   
    timeline.add(TweenMax.from("#nom9_img2", .5,{delay:.6, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom9_img3", .5,{delay:.8, css:{"margin-top": "-30vw", opacity:0}}),0); 
    timeline.add(TweenMax.from("#nom9_img4", .5,{delay:1, css:{"margin-top": "-30vw", opacity:0}}),0); 
    timeline.add(TweenMax.from("#nom9_img5", .5,{delay:1.2, css:{"margin-top": "-30vw", opacity:0}}),0); 
    timeline.add(TweenMax.from("#nom9_img6", .5,{delay:1.4, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom9_img7", .5,{delay:1.6, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#nom9_img8", .5,{delay:1.8, css:{"margin-left": "10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#nom9_img9", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom9_img10", .5,{delay:2.2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom9_img11", .5,{delay:2.4, css:{"margin-left": "10vw", opacity:0},ease:Back.easeOut}),0);    
    
    $("#nom9 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#nom9"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("nom9");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide10 (i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#nom10", 0.5, {delay:.2,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#nom10_img1", .5,{delay:.4, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#nom10_img2", .5,{delay:.6, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#nom10_img3", .5,{delay:.8, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom10_img4", .5,{delay:1, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom10_img5", .5,{delay:1.2, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom10_img6", .5,{delay:1.4, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#nom10_img7", .5,{delay:1.6, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom10_img8", .5,{delay:1.8, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom10_img9", .5,{delay:2, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom10_img10", .5,{delay:2.2, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#nom10_img11", .5,{delay:2.4, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom10_img12", .5,{delay:2.6, css:{"margin-left": "30vw", opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#nom10"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("nom10");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide11(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#nom11", 0.5, {delay:.2,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#nom11_img1", .5,{delay:.4 ,css:{"margin-top": "-30vw", opacity:0}}),0); 
    timeline.add(TweenMax.from("#nom11_img2", .5,{delay:.6, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#nom11_img3", .5,{delay:.8, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom11_img4", .5,{delay:1,  css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom11_img5", .5,{delay:1.2, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom11_img6", .5,{delay:1.4, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom11_img7", .5,{delay:1.6, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#nom11_img8", .5,{delay:1.8, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom11_img9", .5,{delay:2,  css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom11_img10", .5,{delay:2.2, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom11_img11", .5,{delay:2.4, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom11_img12", .5,{delay:2.6, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#nom11_img13", .5,{delay:2.8, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom11_img14", .5,{delay:3,  css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom11_img15", .5,{delay:3.2, css:{"margin-top": "-30vw", opacity:0}}),0);
    
    $("#nom11_img13").fadeOut();
    $("#nom11_img14").fadeOut();
    $("#nom11_img15").fadeOut();
    $("#nom8_img11").fadeOut();
    $("#cerrar5").fadeOut();
    /*$("#click6").fadeOut();*/
    $("#cerrar6").fadeOut();
    /*$("#click7").fadeOut();*/
    $("#cerrar7").fadeOut();
    $("#baja1").fadeOut();
    $("#baja2").fadeOut();
    $("#baja3").fadeOut();

    $("#click5").click(function(){
       
        $("#click5").fadeOut();
        $("#click6").fadeOut();
        $("#click7").fadeOut();
        $("#nom11_img13").fadeIn();
        $("#cerrar5").fadeIn();
        $("#baja1").fadeIn();

    });

    $("#cerrar5").click(function(){
       
      $("#cerrar5").fadeOut();
      $("#nom11_img13").fadeOut();
      $("#click5").fadeIn();
      $("#click6").fadeIn();
      $("#click7").fadeIn();
      $("#baja1").fadeOut();
    
  });

  $("#click6").click(function(){
       
    $("#click5").fadeOut();
    $("#click6").fadeOut();
    $("#click7").fadeOut();
    $("#nom11_img14").fadeIn();
    $("#cerrar6").fadeIn();
    $("#baja2").fadeIn();

});

$("#cerrar6").click(function(){
   
  $("#cerrar6").fadeOut();
  $("#nom11_img14").fadeOut();
  $("#click5").fadeIn();
  $("#click6").fadeIn();
  $("#click7").fadeIn();
  $("#baja2").fadeOut();
  
});

$("#click7").click(function(){
       
  $("#click5").fadeOut();
  $("#click6").fadeOut();
  $("#click7").fadeOut();
  $("#nom11_img15").fadeIn();
  $("#cerrar7").fadeIn();
  $("#baja3").fadeIn();

});

$("#cerrar7").click(function(){
 
$("#cerrar7").fadeOut();
$("#nom11_img15").fadeOut();
$("#click5").fadeIn();
$("#click6").fadeIn();
$("#click7").fadeIn();
$("#baja3").fadeOut();

});



    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#nom11"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("nom11");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide12 (i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#nom12_img1", .5,{delay:.2,css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#nom12_img2", .5,{delay:.6, css:{"margin-top": "-30vh", opacity: 0}}),0);
    timeline.add(TweenMax.from("#nom12_img3", .5,{delay:.9,css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#nom12_img4", .5,{delay:1,css:{"margin-top": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom12_img5", .5,{delay:1.2,css:{"margin-left": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom12_img6", .5,{delay:1.4 ,css:{"margin-left": "30vh", opacity:0}}),0); 
    timeline.add(TweenMax.from("#nom12_img7", .5,{delay:1.6, css:{"margin-left": "30vh", opacity:0}}),0); 
    timeline.add(TweenMax.from("#nom12_img8", .5,{delay:1.8,css:{"margin-left": "30vh", opacity:0}}),0); 
    timeline.add(TweenMax.from("#nom12_img9", .5,{delay:2,css:{"margin-left": "30vh", opacity:0}}),0); 
    timeline.add(TweenMax.from("#nom12_img10", .5,{delay:2.2,css:{"margin-top": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom12_img11", .5,{delay:2.4 ,css:{opacity:0}}),0); 
    timeline.add(TweenMax.from("#nom12_img12", .5,{delay:2.6, css:{"margin-left": "-30vh", opacity:0}}),0); 
            
    var scene = new ScrollMagic.Scene({
        triggerElement: "#nom12"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("nom12");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide13 (i) {    
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#nom13", 0.5, {delay:.2,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#nom13_img1", .5,{delay:.4, css:{"margin-top": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom13_img2", .5,{delay:.6, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom13_img3", .5,{delay:.8, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom13_img4", .5,{delay:1,  css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#nom13_img5", .5,{delay:1.2, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom13_img6", .5,{delay:1.4, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#nom13_img7", .5,{delay:1.6,  css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#nom13_img8", .5,{delay:1.8, css:{"margin-top": "-30vw", opacity:0}}),0);
        
    var scene = new ScrollMagic.Scene({
        triggerElement: "#nom13"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("nom13");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide14 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#nom14", 0.5, {delay:.2,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#nom14_img1", .5,{delay:.2, css:{opacity:0}}),0);
  timeline.add(TweenMax.from("#nom14_img2", .5,{delay:.6, css:{opacity:0}}),0);
  timeline.add(TweenMax.from("#nom14_img3", .5,{delay:.8, css:{"margin-left": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom14_img4", .5,{delay:1,  css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom14_img5", .5,{delay:1.2, css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom14_img6", .5,{delay:1.4, css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom14_img7", .5,{delay:1.6,  css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom14_img8", .5,{delay:1.8, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom14_img9", .5,{delay:2, css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom14_img10", .5,{delay:2.3, css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom14_img11", .5,{delay:2.6,  css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom14_img812", .5,{delay:2.9, css:{"margin-left": "30vw", opacity:0}}),0);
  
  
  var scene = new ScrollMagic.Scene({
      triggerElement: "#nom14"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("nom14");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide15 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#nom15", 0.5, {delay:.2,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#nom15_img1", .5,{delay:.4, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom15_img2", .5,{delay:.6, css:{opacity:0}}),0);
  timeline.add(TweenMax.from("#nom15_img3", .5,{delay:.8, css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom15_img4", .5,{delay:1,  css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom15_img5", .5,{delay:1.2, css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom15_img6", .5,{delay:1.4, css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom15_img7", .5,{delay:1.6,  css:{opacity: 0}}),0);
  
  
  var scene = new ScrollMagic.Scene({
      triggerElement: "#nom15"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("nom15");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide16 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#nom16", 0.5, {delay:.2,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#nom16_img1", .5,{delay:.4, css:{ opacity:0}}),0);
  timeline.add(TweenMax.from("#nom16_img2", .5,{delay:.6, css:{"margin-left": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom16_img3", .5,{delay:.8, css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom16_img4", .5,{delay:1,  css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom16_img5", .5,{delay:1.2, css:{"margin-top": "-30vw", opacity:0}}),0);
  
  
  var scene = new ScrollMagic.Scene({
      triggerElement: "#nom16"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("nom16");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide17 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#nom17", 0.5, {delay:.2,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#nom17_img1", .5,{delay:.3, css:{opacity:0}}),0);
  timeline.add(TweenMax.from("#nom17_img2", .5,{delay:.6, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom17_img3", .5,{delay:.9, css:{"margin-left": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom17_img4", .5,{delay:1.2,  css:{opacity:0}}),0);
  timeline.add(TweenMax.from("#nom17_img5", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom17_img6", .5,{delay:1.8, css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom17_img7", .5,{delay:2.1,  css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom17_img8", .5,{delay:2.4, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom17_img9", .5,{delay:2.7,  css:{"margin-left": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom17_img10", .5,{delay:3, css:{opacity:0}}),0);
  timeline.add(TweenMax.from("#nom17_img11", .5,{delay:3.3, css:{opacity:0}}),0);
  
  
  var scene = new ScrollMagic.Scene({
      triggerElement: "#nom17"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("nom17");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide18 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#nom18", 0.5, {delay:.2, css:{opacity:0}}),0);
  timeline.add(TweenMax.from("#nom18_img1", .5,{delay:.4, css:{opacity:0}}),0);
  timeline.add(TweenMax.from("#nom18_img2", .5,{delay:.6, css:{"margin-left": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom18_img3", .5,{delay:.8, css:{"margin-left": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom18_img4", .5,{delay:1,  css:{opacity:0}}),0);
  timeline.add(TweenMax.from("#nom18_img5", .5,{delay:1.2, css:{"margin-top": "-30vw", opacity:0}}),0);
  
  
  var scene = new ScrollMagic.Scene({
      triggerElement: "#nom18"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("nom18");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide19 (i) {    
  var timeline = new TimelineMax({paused: true});
  
  timeline.add(TweenMax.from("#nom19_img1", .5,{delay:.2, css:{opacity:0}}),0);
  timeline.add(TweenMax.from("#nom19_img2", .5,{delay:.4, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom19_img3", .5,{delay:.6, css:{opacity:0}}),0);
  timeline.add(TweenMax.from("#nom19_img4", .5,{delay:.8,  css:{"margin-top": "-30vw", opacity:0}}),0);
  
  
  var scene = new ScrollMagic.Scene({
      triggerElement: "#nom19"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("nom19");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide20 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#nom20", 0.5, {delay:.2,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#nom20_img1", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom20_img2", .5,{delay:1, css:{"margin-top": "-30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#nom20_img3", .5,{delay:1.5, css:{"margin-top": "-30vw", opacity:0}}),0);
  
  
  var scene = new ScrollMagic.Scene({
      triggerElement: "#nom20"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("nom20");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}


function iniciarMenu(){
    $("#btn1").hover(function(){TweenMax.to("#btn1Tag", .5, {css:{opacity:1}});});
    $("#btn1").mouseout(function(){TweenMax.to("#btn1Tag", .5, {css:{opacity:0}});});

    
    $("#btn2").hover(function(){TweenMax.to("#btn2Tag", .5, {css:{opacity:1}});});
    $("#btn2").mouseout(function(){TweenMax.to("#btn2Tag", .5, {css:{opacity:0}});});
    $("#btn3").hover(function(){TweenMax.to("#btn3Tag", .5, {css:{opacity:1}});});
    $("#btn3").mouseout(function(){TweenMax.to("#btn3Tag", .5, {css:{opacity:0}});});
   
   

    $("#btn1").on('click', function(event) {
        $("html").animate({ scrollTop : $("#portada").offset().top}, 5000);
    });
    $("#btn2").on('click', function(event) {
        $("html").animate({ scrollTop : $("#nom4").offset().top}, 5000);
    });
    $("#btn3").on('click', function(event) {
        $("html").animate({ scrollTop : $("#nom19").offset().top}, 5000);
    });
    
}

function iniciarMenunom(){
    $("#btn1nom").hover(function(){TweenMax.to("#btn1Tagnom", .5, {css:{opacity:1}});});
    $("#btn1nom").mouseout(function(){TweenMax.to("#btn1Tagnom", .5, {css:{opacity:1}});});
    $("#btn2nom").hover(function(){TweenMax.to("#btn2Tagnom", .5, {css:{opacity:1}});});
    $("#btn2nom").mouseout(function(){TweenMax.to("#btn2Tagnom", .5, {css:{opacity:1}});});
    $("#btn3nom").hover(function(){TweenMax.to("#btn3Tagnom", .5, {css:{opacity:1}});});
    $("#btn3nom").mouseout(function(){TweenMax.to("#btn3Tagnom", .5, {css:{opacity:1}});});
    $("#btn4nom").hover(function(){TweenMax.to("#btn4Tagnom", .5, {css:{opacity:1}});});
    $("#btn4nom").mouseout(function(){TweenMax.to("#btn4Tagnom", .5, {css:{opacity:1}});});
    $("#btn5nom").hover(function(){TweenMax.to("#btn5Tagnom", .5, {css:{opacity:1}});});
    $("#btn5nom").mouseout(function(){TweenMax.to("#btn5Tagnom", .5, {css:{opacity:1}});});
    $("#btn6nom").hover(function(){TweenMax.to("#btn6Tagnom", .5, {css:{opacity:1}});});
    $("#btn6nom").mouseout(function(){TweenMax.to("#btn6Tagnom", .5, {css:{opacity:1}});});
    $("#btn7nom").hover(function(){TweenMax.to("#btn7Tagnom", .5, {css:{opacity:1}});});
    $("#btn7nom").mouseout(function(){TweenMax.to("#btn7Tagnom", .5, {css:{opacity:1}});});
   

    $("#btn1nom").on('click', function(event) {
        $("html").animate({ scrollTop : $("#nom3").offset().top}, 5000);
    });
    $("#btn2nom").on('click', function(event) {
        $("html").animate({ scrollTop : $("#nom4").offset().top}, 5000);
    });
    $("#btn3nom").on('click', function(event) {
        $("html").animate({ scrollTop : $("#nom5").offset().top}, 5000);
    });
    $("#btn4nom").on('click', function(event) {
        $("html").animate({ scrollTop : $("#nom6").offset().top}, 5000);
    });
    $("#btn5nom").on('click', function(event) {
        $("html").animate({ scrollTop : $("#nom7").offset().top}, 5000);
    });
    $("#btn6nom").on('click', function(event) {
        $("html").animate({ scrollTop : $("#nom8").offset().top}, 5000);
    });
    $("#btn7nom").on('click', function(event) {
        $("html").animate({ scrollTop : $("#nom9").offset().top}, 5000);
    });   
}

function iniciarMenuSIX(){
    $("#btn1SIX").hover(function(){TweenMax.to("#btn1TagSIX", .5, {css:{opacity:1}});});
    $("#btn1SIX").mouseout(function(){TweenMax.to("#btn1TagSIX", .5, {css:{opacity:1}});});
    $("#btn2SIX").hover(function(){TweenMax.to("#btn2TagSIX", .5, {css:{opacity:1}});});
    $("#btn2SIX").mouseout(function(){TweenMax.to("#btn2TagSIX", .5, {css:{opacity:1}});});
    $("#btn3SIX").hover(function(){TweenMax.to("#btn3TagSIX", .5, {css:{opacity:1}});});
    $("#btn3SIX").mouseout(function(){TweenMax.to("#btn3TagSIX", .5, {css:{opacity:1}});});
    $("#btn4SIX").hover(function(){TweenMax.to("#btn4TagSIX", .5, {css:{opacity:1}});});
    $("#btn4SIX").mouseout(function(){TweenMax.to("#btn4TagSIX", .5, {css:{opacity:1}});});
    $("#btn5SIX").hover(function(){TweenMax.to("#btn5TagSIX", .5, {css:{opacity:1}});});
    $("#btn5SIX").mouseout(function(){TweenMax.to("#btn5TagSIX", .5, {css:{opacity:1}});});
    $("#btn6SIX").hover(function(){TweenMax.to("#btn6TagSIX", .5, {css:{opacity:1}});});
    $("#btn6SIX").mouseout(function(){TweenMax.to("#btn6TagSIX", .5, {css:{opacity:1}});});
    $("#btn7SIX").hover(function(){TweenMax.to("#btn7TagSIX", .5, {css:{opacity:1}});});
    $("#btn7SIX").mouseout(function(){TweenMax.to("#btn7TagSIX", .5, {css:{opacity:1}});});
    $("#btn8SIX").hover(function(){TweenMax.to("#btn8TagSIX", .5, {css:{opacity:1}});});
    $("#btn8SIX").mouseout(function(){TweenMax.to("#btn8TagSIX", .5, {css:{opacity:1}});});
    
   

    $("#btn1SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six3").offset().top}, 5000);
    });
    $("#btn2SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six5").offset().top}, 5000);
    });
    $("#btn3SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six6").offset().top}, 5000);
    });
    $("#btn4SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six7").offset().top}, 5000);
    });
    $("#btn5SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six9").offset().top}, 5000);
    });
    $("#btn6SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six11").offset().top}, 5000);
    });
    $("#btn7SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six13").offset().top}, 5000);
    }); 
   $("#btn8SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six15").offset().top}, 5000);
    });   
}

function iniciarMenuRetail(){
    $("#btn1Retail").hover(function(){TweenMax.to("#btn1TagRetail", .5, {css:{opacity:1}});});
    $("#btn1Retail").mouseout(function(){TweenMax.to("#btn1TagRetail", .5, {css:{opacity:1}});});
    $("#btn2Retail").hover(function(){TweenMax.to("#btn2TagRetail", .5, {css:{opacity:1}});});
    $("#btn2Retail").mouseout(function(){TweenMax.to("#btn2TagRetail", .5, {css:{opacity:1}});});
    $("#btn3Retail").hover(function(){TweenMax.to("#btn3TagRetail", .5, {css:{opacity:1}});});
    $("#btn3Retail").mouseout(function(){TweenMax.to("#btn3TagRetail", .5, {css:{opacity:1}});});
    $("#btn4Retail").hover(function(){TweenMax.to("#btn4TagRetail", .5, {css:{opacity:1}});});
    $("#btn4Retail").mouseout(function(){TweenMax.to("#btn4TagRetail", .5, {css:{opacity:1}});});
    $("#btn5Retail").hover(function(){TweenMax.to("#btn5TagRetail", .5, {css:{opacity:1}});});
    $("#btn5Retail").mouseout(function(){TweenMax.to("#btn5TagRetail", .5, {css:{opacity:1}});});
    $("#btn6Retail").hover(function(){TweenMax.to("#btn6TagRetail", .5, {css:{opacity:1}});});
    $("#btn6Retail").mouseout(function(){TweenMax.to("#btn6TagRetail", .5, {css:{opacity:1}});});
    $("#btn7Retail").hover(function(){TweenMax.to("#btn7TagRetail", .5, {css:{opacity:1}});});
    $("#btn7Retail").mouseout(function(){TweenMax.to("#btn7TagRetail", .5, {css:{opacity:1}});});
    $("#btn8Retail").hover(function(){TweenMax.to("#btn8TagRetail", .5, {css:{opacity:1}});});
    $("#btn8Retail").mouseout(function(){TweenMax.to("#btn8TagRetail", .5, {css:{opacity:1}});});
    $("#btn9Retail").hover(function(){TweenMax.to("#btn9TagRetail", .5, {css:{opacity:1}});});
    $("#btn9Retail").mouseout(function(){TweenMax.to("#btn9TagRetail", .5, {css:{opacity:1}});});
   

    $("#btn1Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail3").offset().top}, 5000);
    });
    $("#btn2Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail5").offset().top}, 5000);
    });
    $("#btn3Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail6").offset().top}, 5000);
    });
    $("#btn4Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail7").offset().top}, 5000);
    });
    $("#btn5Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail9").offset().top}, 5000);
    });
    $("#btn6Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail11").offset().top}, 5000);
    });
    $("#btn7Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail2").offset().top}, 5000);
    });
    $("#btn8Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail13").offset().top}, 5000);
    });
    $("#btn9Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail14").offset().top}, 5000);
    });   
}
/*
    sin menu =0
    nom = 1
    six = 2
    retail = 3
*/
function colocarMenuPorMarca(marca){
    var Nom="";
    if(marca==0){
        animacion_salida($("#contenedorMenunom"),"default", 0);
        animacion_salida($("#contenedorMenuSIX"),"default", 0);
        animacion_salida($("#contenedorMenuRetail"),"default", 0);
    }else if(marca==1){
        Nom="#contenedorMenunom";
        animacion_salida($("#contenedorMenuSIX"),"default", 0);
        animacion_salida($("#contenedorMenuRetail"),"default", 0);
    }else if(marca==2){
        Nom="#contenedorMenuSIX";
        animacion_salida($("#contenedorMenunom"),"default", 0);
        animacion_salida($("#contenedorMenuRetail"),"default", 0);
    }else if(marca==3){
        Nom="#contenedorMenuRetail";
        animacion_salida($("#contenedorMenunom"),"default", 0);
        animacion_salida($("#contenedorMenuSIX"),"default", 0);
    }
    if(marca != vista){
        if(marca !=0){
            animacion_entrada($(Nom),"izquierda_derecha", 0.5);
        }
        vista = marca;
    }
}

function animacion_entrada(objeto, tipo, retardo, funcion_sigue) {
    //tipos de animación: "default", "arriba_abajo", "abajo_arriba", "izquierda_derecha", "derecha_izquierda", "ampliar", "reducir" */
    TweenMax.killTweensOf(objeto);
    var animaciones = new Array("default", "arriba_abajo", "abajo_arriba", "izquierda_derecha", "derecha_izquierda");
    var tiempo_animacion = 0.5;
    if (tipo == undefined) {
      tipo = "default";
    }
    if (retardo == undefined) {
      retardo = 0;
    }
    if (tipo == "aleatorio") {
      tipo = animaciones[Math.floor(Math.random() * animaciones.length)];
    }
    objeto.css("display", "block");
    if (funcion_sigue == undefined) {
      switch (tipo) {
        case "default":
          TweenMax.to(objeto, tiempo_animacion, { alpha: 1, ease: Quart.easeOut, delay: retardo });
          break;
        case "arriba_abajo":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage + 80 },
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { top: parseInt(objeto.attr("_origeny")) * scalePage - 80 },
              { top: parseInt(objeto.attr("_origeny")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          }
          break;
        case "abajo_arriba":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage - 80 },
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { top: parseInt(objeto.attr("_origeny")) * scalePage + 80 },
              { top: parseInt(objeto.attr("_origeny")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          }
          break;
        case "izquierda_derecha":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { right: parseInt(objeto.attr("_origenx")) * scalePage + 150 },
              { right: parseInt(objeto.attr("_origenx")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { left: parseInt(objeto.attr("_origenx")) * scalePage - 150 },
              { left: parseInt(objeto.attr("_origenx")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          }
          break;
        case "derecha_izquierda":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { right: parseInt(objeto.attr("_origenx")) * scalePage - 150 },
              { right: parseInt(objeto.attr("_origenx")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { left: parseInt(objeto.attr("_origenx")) * scalePage + 150 },
              { left: parseInt(objeto.attr("_origenx")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          }
          break;
      }
    } else {
      switch (tipo) {
        case "default":
          TweenMax.to(objeto, tiempo_animacion, {
            alpha: 1,
            ease: Quart.easeOut,
            delay: retardo,
            onComplete: funcion_sigue
          });
          break;
        case "arriba_abajo":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage + 80 },
              {
                bottom: parseInt(objeto.attr("_origeny")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { top: parseInt(objeto.attr("_origeny")) * scalePage - 80 },
              {
                top: parseInt(objeto.attr("_origeny")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          }
          break;
        case "abajo_arriba":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage - 80 },
              {
                bottom: parseInt(objeto.attr("_origeny")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { top: parseInt(objeto.attr("_origeny")) * scalePage + 80 },
              {
                top: parseInt(objeto.attr("_origeny")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          }
          break;
        case "izquierda_derecha":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { right: parseInt(objeto.attr("_origenx")) * scalePage + 150 },
              {
                right: parseInt(objeto.attr("_origenx")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { left: parseInt(objeto.attr("_origenx")) * scalePage - 150 },
              {
                left: parseInt(objeto.attr("_origenx")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          }
          break;
        case "derecha_izquierda":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { right: parseInt(objeto.attr("_origenx")) * scalePage - 150 },
              {
                right: parseInt(objeto.attr("_origenx")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { left: parseInt(objeto.attr("_origenx")) * scalePage + 150 },
              {
                left: parseInt(objeto.attr("_origenx")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          }
          break;
      }
    }
  }

  function animacion_salida(objeto, tipo, retardo, funcion_sigue) {
    var animaciones = new Array("default", "arriba_abajo", "abajo_arriba", "izquierda_derecha", "derecha_izquierda");
    var tiempo_animacion = 1;
    if (tipo == undefined) {
      tipo = "default";
    }
    if (retardo == undefined) {
      retardo = 0;
    }
    if (tipo == "aleatorio") {
      tipo = animaciones[random(animaciones.length - 1)];
    }
    if (funcion_sigue == undefined) {
      switch (tipo) {
        case "default":
          TweenMax.to(objeto, tiempo_animacion, { alpha: 0, ease: Quart.easeOut, delay: retardo, display: "none" });
          break;
        case "arriba_abajo":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.to(objeto, tiempo_animacion, {
              bottom: parseInt(objeto.css("bottom")) - 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              top: parseInt(objeto.css("top")) + 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          }
          break;
        case "abajo_arriba":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.to(objeto, tiempo_animacion, {
              bottom: parseInt(objeto.css("bottom")) + 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              top: parseInt(objeto.css("top")) - 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          }
          break;
        case "izquierda_derecha":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.to(objeto, tiempo_animacion, {
              right: parseInt(objeto.css("right")) - 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              left: parseInt(objeto.css("left")) + 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          }
          break;
        case "derecha_izquierda":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.to(objeto, tiempo_animacion, {
              right: parseInt(objeto.css("right")) + 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              left: parseInt(objeto.css("left")) - 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          }
          break;
      }
    } else {
      switch (tipo) {
        case "default":
          TweenMax.to(objeto, tiempo_animacion, {
            alpha: 0,
            ease: Quart.easeOut,
            delay: retardo,
            onComplete: funcion_sigue
          });
          break;
        case "arriba_abajo":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.to(objeto, tiempo_animacion, {
              bottom: parseInt(objeto.css("bottom")) - 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              top: parseInt(objeto.css("top")) + 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          }
          break;
        case "abajo_arriba":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.to(objeto, tiempo_animacion, {
              bottom: parseInt(objeto.css("bottom")) + 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              top: parseInt(objeto.css("top")) - 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          }
          break;
        case "izquierda_derecha":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.to(objeto, tiempo_animacion, {
              right: parseInt(objeto.css("right")) - 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              left: parseInt(objeto.css("left")) + 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          }
          break;
        case "derecha_izquierda":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.to(objeto, tiempo_animacion, {
              right: parseInt(objeto.css("right")) + 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              left: parseInt(objeto.css("left")) - 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          }
          break;
      }
    }
  }