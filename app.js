var cancelled =false;
var cancel = false;

function scrollToTop() {
   
    
    if(cancelled == true)
    {
        return;
    }else if(cancelled == false)
    {
        var position =document.body.scrollTop || document.documentElement.scrollTop;
        console.log(position);
        console.log(Math.floor(position / 10));
    if (position>0) {
        window.scrollBy(0,-50);
        scrollAnimation = setTimeout("scrollToTop()",70 );
        
    } else clearTimeout(scrollAnimation);
    }
    
  
} 
   function scrollToBottom() {
    
    if(cancel == true)
    {
        return;
    }else if(cancel== false)
    {
        var location =  document.body.scrollTop || document.documentElement.scrollTop;
    console.log(location);
    console.log(Math.floor(location/ 10));
    if (location<1479) {
        window.scrollBy(0,50);
        var scrollAnimation = setTimeout("scrollToBottom()", 70);
        
    } else clearTimeout(scrollAnimation);
    }
    
    
}


/***************************************************************/

$(document).on('scroll',function()
{
    $('.text').css("top",Math.min(180+0.9*window.scrollY,400)+"px");
})
/*****************************************************************/
function callcancel()
{
    cancel=true;
}
function dropcancel()
{
    cancel=false;
}
function callcancelled()
{
    cancelled=true;
}
function dropcancelled()
{
    cancelled=false;
}

