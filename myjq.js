$('#one').click(function(){
  var oldVal = parseInt($("p").text());
  $('p').text(oldVal+1)
})

$('#two').click(function(){
  var oldVal = parseInt($("p").text());
  $('p').text(oldVal-1)
})
