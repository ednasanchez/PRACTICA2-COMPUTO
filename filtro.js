$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let equipo = $('#acercade').offset().top,
        servicio = $('#informacion').offset().top,
        trabajo = $('#galeria').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let equipo = $('#acercade').offset().top,
        servicio = $('#informacion').offset().top,
        trabajo = $('#galeria').offset().top,
        contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-acercade').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: equipo -100
        },600);
    });

    $('#enlace-informacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio -100
        },600);
    });

    $('#enlace-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajo -100
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
});