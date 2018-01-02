function GetQuote(){
  var arr = new Array
  (
    "Stay positive and happy. Work hard and don't give up hope. Be open to criticism and keep learning. Surround yourself with happy, warm and genuine people.",           "Yesterday is not ours to recover, but tomorrow is ours to win or lose.", 
    "Love yourself. It is important to stay positive because beauty comes from the inside out.", 
    "I believe if you keep your faith, you keep your trust, you keep the right attitude, if you're grateful, you'll see God open up new doors.",
    "A strong, positive self-image is the best possible preparation for success.",
    "Keep your face to the sunshine and you cannot see a shadow.",
    "Your smile will give you a positive countenance that will make people feel comfortable around you.",
    "A positive attitude can really make dreams come true - it did for me."
  );
  
var randomQuote = arr[Math.floor(Math.random()*arr.length)]; document.getElementById("box").innerHTML = "\" " + randomQuote + " \"";
  
}

document.getElementById("tweet").addEventListener("click", function(){
  var randomText = document.getElementById('box').textContent;
   var tweetUrl = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(randomText);

   window.open(tweetUrl);
});

