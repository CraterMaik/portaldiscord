$(function() {
   
    var $body = $('body'),
        $button = $('#butt');
     $('button').on('click', function () {
         if ($body.attr('id') == 'dark') {
             $body.attr('id', 'white');
             $button.text('negro');
         } else {
             $body.attr('id', 'dark');
             $button.text('blanco');
         }

     });

    var $content1 = $('.style-body-areatextContent');
    var $content2 = $('.style-body-areatextContent-2');
    var $optPortal = $('#portalOption');
    var $optAcerdade = $('#acercadeOption');

    /* Arranque General*/
    $content2.hide();
    $optPortal.addClass('bordeado-seleccion');
    /*****************/
    /**Portal**/
    
    $($optPortal).on('click', function () {
        $content2.hide();
        $content1.show();
        $optAcerdade.removeClass('bordeado-seleccion');
        $optPortal.addClass('bordeado-seleccion');
        
    });

    $($optAcerdade).on('click', function () {
        $content1.hide();
        $content2.show();
        $optPortal.removeClass('bordeado-seleccion');
        $optAcerdade.addClass('bordeado-seleccion');
       
    });


});