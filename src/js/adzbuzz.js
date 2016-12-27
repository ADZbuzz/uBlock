/*
* add ADZbuzz unique tag to determine if the extension installed in the browser
*
*/

var tag = 'adzbuzzisagreatsocialmediayouwanttoearnthenjoin';

document.addEventListener("DOMContentLoaded", function(event) {
                        
   var tag = 'adzbuzzisagreatsocialmediayouwanttoearnthenjoin';
                        
    if(document.getElementById(tag)) {
        document.getElementById(tag).remove();
    }

    var classes = document.getElementsByTagName('html')[0].className;

    document.getElementsByTagName('html')[0].className = classes+' '+tag;

    var adzscript = document.createElement('script');

    adzscript.id = tag;

    var adzscript_str = String.raw`

    var adzbuzzisagreatsocialmediayouwanttoearnthenjoin = true;`;

    adzscript.innerHTML = adzscript_str;

    document.getElementsByTagName('head')[0].appendChild(adzscript); 
 });
