$(document).ready(function(){
    
    $('<span><img src="img/arr-left.png"></span>').prependTo('#openSlider').css({ position:'absolute', top:'43%',cursor:'pointer'});
    $('<span><img src="img/arr-right.png"></span>').prependTo('#openSlider').css({ position:'absolute', top:'43%',right:'0',cursor:'pointer'});
    $('#openSlider > img').hide();
    $('#openSlider > img:first').show();
    
    
    var countImg = $('#openSlider > img').length - 1;
    var i = 0;
    var kompas = true;
    var speed = 3000;
    
    function nextSlide () {
        if (i < countImg){
            $('#openSlider > img:eq(' + i + ')').hide();
            $('#openSlider > img:eq(' + (i+1) + ')').show();
            i++;
        } else {
            i = 0;
            $('#openSlider > img:last').hide();
            $('#openSlider > img:first').show();
        }
        kompas = true;
        return kompas;
    };
    
    function prevSlide () {
        if (i != 0){
            $('#openSlider > img:eq(' + i + ')').hide();
            $('#openSlider > img:eq(' + (i-1) + ')').show();
            i--;
        } else {
            i = countImg;
            $('#openSlider > img:first').hide();
            $('#openSlider > img:last').show();
        }
        kompas = false;
        return kompas;
    }
    
    function royal () {
        setInterval(function(){
            if(kompas){
                nextSlide();
            } else { prevSlide ()};
                
        },speed) 
    };
    
    royal();
    
    
    $('#openSlider > span:first').click(nextSlide);
    $('#openSlider > span:last').click(prevSlide);

});

