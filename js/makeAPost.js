var moment = require("moment");

exports.makeAPost = function(title, body) {
  console.log("MAKE A POST");
  var hiddenpost = $(".hiddenpost");

  hiddenpost.find("h2").html(title);
  hiddenpost.find("p").html(body);
  hiddenpost.find("span").first().html("Count of the words hath entered by yee: " + (title.split(" ").length + body.split(" ").length));
  hiddenpost.find("span").last().html("On this moment in timeth: " + moment().format('MMM Do YYYY') + "eth");
  $(".content").prepend(hiddenpost.html());
}
