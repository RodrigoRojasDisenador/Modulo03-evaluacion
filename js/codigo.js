$(document).ready(inicio);

function inicio(){

    $('#Show').click(function(){
        $('#parrafo').show();
    });

    $('#Hide').click(function(){
        $('#parrafo').hide();
    });

    $('#color').click(function(){
        $('#parrafoClass').addClass("Letracolor");
    });

    $('#toggle').click(function(){
        $('#imgToggle').slideToggle();
    });

    $('#slideDown').click(function(){
        $('#slide').slideDown(1000);
    });

    $('#slideUp').click(function(){
        $('#slide').slideUp(1000);
    });

    $('#fadeIn').click(function(){
        $('#fInfOut').fadeIn(2000);
    });

    $('#fadeOut').click(function(){
        $('#fInfOut').fadeOut(2000);
    });

    $('#inputVal').click(function(){
        var text =$('#text').val();
        $('#feedback').text(text);
    });

    $('#appendB').click(function(){
        $('#texto1').append(' Texto de Ejemplo');
    });

    $('#nombre').focus(function(){
        $('#focusP').text('El input Nombre tiene el focus');
    });

    

    $('#Obtener').click(function(){
            var text00=$('#dataA').data('name');
        
        console.log(text00);
    });

    $('#Adjuntar').click(function(){
        var text00=$('#dataA').data('name');
        $('#dataA').append(text00)
    });

}