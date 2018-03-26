$(document).ready(function(){

    $('.zooMera img').each(function () {
        $(this).parent().append('<div class="dvscxi"> <img src='+ $(this).attr('src') + '> </div>');
        $(this).remove();
    });

    $('.zooMera .dvscxi').css({
        width : '100%',
        position : 'relative',
        display : 'inline-block'
    });
    $('.zooMera img').css({
        height : '100%',
        width : '100%'
    });

    $('.zooMera .dvscxi').hover(function () {
        $('img', this).css({
            'cursor' : 'pointer',
            'opacity': 0.3,
            'transition-property': 'opacity',
            'transition-duration': '1s'

            // 'position' : 'relative',
            // display : 'inline-block'
        });
        $(this).css({

        });
        $(this).append('<span></span>');
        $('.zooMera span').css({
            'background-image': 'url(lib/zooMera/zoom-in.png)',
            'background-repeat' : 'no-repeat',
            // 'z-index' : '5',
            width : '200px',
            height : '200px',
            display : 'block',
            'position' : 'absolute',
            top : '50%',
            left: '50%',
            'cursor' : 'pointer',
            marginTop : '-50px',
            marginLeft : '-50px'
        });

    },function () {
        $('.zooMera img').css({
            'opacity' : '1',
            'transition-property': 'opacity',
            'transition-duration': '2s'
        });
        $('.zooMera span').remove();
    });

    $('.zooMera div').click(function () {

        $('body').append('<div class="dvscx"><span class="dvsc"></span></div>');

        $('.dvscx').css(
            {
                height : '100vh',
                width : '100vw',
                position : 'fixed',
                top: '0',
                left : '0',
                'background-color' : 'rgba(223, 197, 28, 0.2)'
            }
        );

        $('body div .dvsc').css({
            display : 'block',
            width : '100vw',
            height : '100vh',
            position : 'fixed',
            top : '0',
            'z-index' : 5,
            left : '0',
            // 'margin-left' : '-250px',
            'background-image': 'url("'+ $('img',this).attr('src') +'")',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'contain'
        });

        $('.dvscx').click(function () {
            $('.dvscx').remove()
        });
    });



    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
            $('.dvscx').remove()
        }
    });






});

