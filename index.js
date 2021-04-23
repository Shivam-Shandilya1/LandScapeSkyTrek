

function scrollToTop() {
    
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
        console.log(position);
        console.log(Math.floor(position / 10));
    if (position>0) {
        window.scrollBy(0,-21);
        scrollAnimation = setTimeout("scrollToTop()",100 );
        
    } else clearTimeout(scrollAnimation);
  
}


function scrollToBottom() {
    var location =  document.body.scrollTop || document.documentElement.scrollTop;
    console.log(location);
    console.log(Math.floor(location/ 10));
    if (location<1479) {
        window.scrollBy(0,21);
        var scrollAnimation = setTimeout("scrollToBottom()", 100);
        
    } else clearTimeout(scrollAnimation);
    
}
/***************************************************************/
