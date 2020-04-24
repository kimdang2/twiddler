$(document).ready(function(){

  var $newsfeed = $('.newsfeed');

  $(".btn").click(function(){
    displayFeed(streams.home);
  });

  // generates a new tweet
  var generateTweet = function(tweet){
    var $tweet = $('<div class=tweet></div>');
    var $user = $('<p class=user></p>');
    var $message = $('<p class=message></p>');
    var $icons = $('<div class=icons></div>');

    $tweet.prependTo($newsfeed);
    $user.html('<a href="#' + tweet.user + '">@'+ tweet.user + '</a> '+ ' ~ ' +moment(tweet.created_at).fromNow()).prependTo($tweet);
    $message.text(tweet.message).appendTo($tweet);
    $icons.html('<i id="icon-img" class="far fa-comment">17</i>' + '<i id="icon-img" class="fas fa-retweet"> 5</i>' + '<i id="icon-img" class="far fa-heart"> 1238 </i>' + '<i id="icon-img" class="far fa-bookmark"></i>').appendTo($tweet);
  }

  // display feed
  var displayFeed = function(collection){
    // adding a counter to allow for randomized tweet
    var index = collection.length - 1;
    var counter = 3;
    while(counter >= 0){
      var tweet = collection[index];
      generateTweet(tweet);
      index -= 1;
      counter -=1;
    }

    //click on user to display their timeline
    $("a").click(function(e){
      e.preventDefault();
      var username = this.getAttribute('href').slice(1);
      console.log(username);
      $('section').html("");
      $(".btn").remove();
      $("h1").text(username);

      displayFeed(streams.users[username]);
    });

  }
  displayFeed(streams.home);

  // allow user to tweet
  $(".btn-submit-tweet").on('click', function(){
    var $tweet = $('<div class=tweet></div>');
    var $user = $('<p class=user></p>');
    var $message = $('<p class=message></p>');
    var $icons = $('<div class=icons></div>');
    var $guestName = $("#guestName").val();
    var $messageInput = $("#input").val();
    var date = new Date().toString();
    console.log($messageInput);
    console.log($userName);

    $tweet.prependTo($newsfeed);
    $user.html('<a href="#' + $guestName  + '">@' + $guestName  + '</a> '+ ' ~ ' + moment(date).fromNow()).prependTo($tweet);
    $message.text($messageInput).appendTo($tweet);
    $icons.html('<i id="icon-img" class="far fa-comment">17</i>' + '<i id="icon-img" class="fas fa-retweet"> 5</i>' + '<i id="icon-img" class="far fa-heart"> 1238 </i>' + '<i id="icon-img" class="far fa-bookmark"></i>').appendTo($tweet);
  });

});