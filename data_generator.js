/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */
$(document).ready(function() {

  // set up data structures
  window.streams = {};
  streams.home = [];
  streams.users = {};
  streams.users.shawndrost = [];
  streams.users.sharksforcheap = [];
  streams.users.mracus = [];
  streams.users.douglascalhoun = [];
  window.users = Object.keys(streams.users);

  // utility function for adding tweets to our data structures
  var addTweet = function(newTweet){
    var username = newTweet.user;
    streams.users[username].push(newTweet);
    streams.home.push(newTweet);
  };

  // utility function
  var randomElement = function(array, exceptions){
    var randomIndex = function() {
      return Math.floor(Math.random() * (array.length - (exceptions || 0)) );
    };
    return array[randomIndex()];
  };

  // random tweet generator
  var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
  var verbs = ['drank', 'drunk', 'deployed', 'got', 'developed', 'built', 'invented', 'experienced', 'fought off', 'hardened', 'enjoyed', 'developed', 'consumed', 'debunked', 'drugged', 'doped', 'made', 'wrote', 'saw'];
  var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
  var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
  var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

  var randomMessage = function(){
    return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
  };

  // Set exceptUserFromRandomTweets so that when a user is created in index.html, it can be
  // modified so that the username is not used for generating random tweets.
  window.exceptUserFromRandomTweets = 0;

  // generate random tweets on a random schedule
  var generateRandomTweet = function(){
    var tweet = {};
    tweet.user = randomElement(users, exceptUserFromRandomTweets);
    tweet.message = randomMessage();
    tweet.created_at = moment();
    addTweet(tweet);
  };

  for(var i = 0; i < 10; i++){
    generateRandomTweet();
  }

  var scheduleNextTweet = function(){
    generateRandomTweet();
    setTimeout(scheduleNextTweet, Math.random() * 5000);
  };
  scheduleNextTweet();

  // global utility function for letting students add "write a tweet" functionality
  window.writeTweet = function(message){
    if(!visitor){
      throw new Error('set the global visitor property!');
    }
    var tweet = {};
    tweet.user = visitor;
    tweet.message = message;
    addTweet(tweet);
  };

});