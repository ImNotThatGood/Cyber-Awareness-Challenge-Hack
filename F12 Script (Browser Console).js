var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'lesson_18/js/disacac18_02_army_static.js';
document.head.appendChild(script);

var divTag = document.createElement("div");
var formTag = document.createElement( 'form' );

divTag.appendChild( formTag );
document.body.appendChild(divTag);
formTag.id = 'form-verify';

var btn = document.createElement("BUTTON");
btn.id = 'btn-verify'
formTag.appendChild(btn);

setTimeout(function(){
    verifyTraining();
}, 2000);
