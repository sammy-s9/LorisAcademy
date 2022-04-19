function chatBubblesEnter(child){
  $(".chat-bubble:nth-child("+child+")").animate({ top:"0px", opacity:"0.2" });
  $(".chat-bubble:nth-child("+child+")").animate({ top:"0px", opacity:"1" });
}
function chatBubblesWriting(){
  $(".chat-bubble.writing").animate({ opacity:"1" });
  $(".chat-bubble.writing").animate({ opacity:"0" });
}
function chatBubblesOut(){
  $(".chat-bubble").animate({ opacity:"0" });
  $(".chat-bubble").animate({ top:"500px" });
}
function chatBubblesPlay(){
  setTimeout(function(){chatBubblesWriting();});
  setTimeout(function(){chatBubblesEnter(1);}, 1000);
  setTimeout(function(){chatBubblesEnter(2);}, 3000);
  setTimeout(function(){chatBubblesWriting();}, 4000);
  setTimeout(function(){chatBubblesEnter(3);}, 5000);
  setTimeout(function(){chatBubblesEnter(4);}, 7000);
  setTimeout(function(){chatBubblesWriting();}, 7000);
  setTimeout(function(){chatBubblesEnter(5);}, 9000);
  setTimeout(function(){chatBubblesOut();}, 10000);
}
$(document).ready(function(){
  chatBubblesPlay();
  setInterval(function(){chatBubblesPlay();}, 9500);
});
