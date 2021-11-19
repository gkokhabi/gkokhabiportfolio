document.body.style.cursor = 'none';
$(document).keydown(function(e) {
  if (e.keyCode == 27 | e.keyCode == 122) return false;
});

  setInterval(function(){
    w = Math.floor(Math.random()*($(window).outerWidth()-0+ 1))-150;
		h = Math.floor(Math.random()*($(window).outerHeight()-0+ 1))-150;
    $('.mouse').animate({
      top	: h+10,
			left: w+820
		}, 750);
    $('body').append('<div class="error" style="top:' + h + 'px; left:' + w + 'px;"></div>');
	}, 250);

  
  var message = "Right-click disabled"; 
  function clickIE() {if (document.all) {(message);return false;}} 
  function clickNS(e) {if 
  (document.layers||(document.getElementById&&!document.all)) { 
  if (e.which==2||e.which==3) {(message);return false;}}} 
  if (document.layers) {document.captureEvents(Event.MOUSEDOWN);document.onmousedown = clickNS;} 
  else{document.onmouseup = clickNS;document.oncontextmenu = clickIE;} 
  document.oncontextmenu = new Function("return false");
  
  
