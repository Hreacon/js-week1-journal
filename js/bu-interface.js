var makeAPost = require("./../js/makeAPost.js").makeAPost;

$(document).ready(function() {
  $("#ouramazingblogform").submit(function(e) {
    e.preventDefault();
    var title = $("[name=title]").val();
    var body = $("[name=body]").val();
    console.log("STUFF" + title + body);
    makeAPost(title,body);
  })
});
