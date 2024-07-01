var typed = new Typed(".typing",{
 strings :["Junior developer","Web Designer", "Youtuber", "Streamer"],
 typeSpeed:100,
 BackSpeed:60,
loop:true})

var now = new Date();
var datetime = now.toLocaleString();


document.getElementById("datetime").innerHTML = datetime;