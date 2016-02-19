$(document).ready(function(){
    $('nav a').on('click',function(){
        //current class assignment
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');
        
        //Set heading text
        $('h1#heading').text($(this).text());
        
        //Get & Filter link text
        var category=$(this).text().toLocaleLowerCase().replace(' ','-');
        
        //Remove hidden class if all-projects is selected
        if(category == 'all-projects'){
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        }else{
            $('ul#gallery li').each(function(){
                if(!$(this).hasClass(category)){
                    $(this).hide().addClass('hidden');
                }else{
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        
    //Stop Link behavior
    return false;
    });
    
    //mouseenter overlay
    $('ul#gallery li').on('mouseenter',function(){
        //Get data attribute value
        var title=$(this).children().data('title');
        var desc=$(this).children().data('desc');
        
        //validation
        if(desc==null){
            desc = 'Click To Enlarge';
        }
        if(title==null){
            title = '';
        }
        
        //Create overlay div
        $(this).append('<div class="overlay"></div>');
        
        //Get overlay div
        var overlay=$(this).children('.overlay');
        
        //Add html to overlay
        overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
        
        //Fade in overlay
        overlay.fadeIn(800);
    });
    
    //mouseleave overlay
    $('ul#gallery li').on('mouseleave',function(){
        //Create overlay div
        $(this).append('<div class="overlay"></div>');
        
        //Get overlay div
        var overlay=$(this).children('.overlay');
        
        //Fade Out overlay
        overlay.fadeOut(500);
    });
})