$(document).ready(function(){
  var url = 'https://hn.algolia.com/api/v1/search?query=javascript';
  $.getJSON(url, function(data) {
    var currentQuote = '';
    var quotes = data.hits;

    $('.read').on('click', function(){
      currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
      console.log(currentQuote);
      $('#qoutBody').hide();
      $('#quotBodyLink').html(currentQuote.title);
      $('p').html(currentQuote.author);
      $('a').css('pointerEvents','visible');
      $('a').attr('href', currentQuote.url).attr('target', '_blank').css({cursor : "pointer", textDecoration:'none'});
      $('.read').html('Show me one more').attr('href',currentQuote.url);

    });

  });
});