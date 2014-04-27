
// /* Twitter initilize */
// $(function () {
//         // start jqtweet!
//         JQTWEET.loadTweets();
//     });



$(document).ready(function(){


// Joinus Email submit action

  $("#joinus_submit").click(function() {

    $('#reply_joinus_message').removeClass();
    $('#reply_joinus_message').html('');
    var regEx = "";

    // validate Email
    var email = $("input#joinus_email").val();
    regEx=/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (email == "" || email == "JOIN OUR NEWS LETTER" || !regEx.test(email)) {
      $("input#joinus_email").val('');
      $("input#joinus_email").focus();
      return false;
    }

    var dataString = 'joinus_email=' + $("input#joinus_email").val();
    $('#reply_joinus_message').addClass('email_loading');


    // Send form data to mailer.php
    $.ajax({
      type: "POST",
      url: "php/mailer.joinus.php",
      data: dataString,
      success: function() {
        $('#reply_joinus_message').removeClass('email_loading');
        $('#reply_joinus_message').addClass('list3');
        $('#reply_joinus_message').html("Added sucessfully")
        .hide()
        .fadeIn(1500);
          }
        });
    return false;
  });




// Email submit action
  $("#email_submit").click(function() {

    $('#reply_message').removeClass();
    $('#reply_message').html('')
    var regEx = "";

    // validate Name
    var name = $("input#name").val();
    regEx=/^[A-Za-z .'-]+$/;
    if (name == "" || name == "Name"  || !regEx.test(name)) {
      $("input#name").val('');
      $("input#name").focus();
      return false;
    }

    // validate Email
    var email = $("input#email").val();
    regEx=/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (email == "" || email == "Email" || !regEx.test(email)) {
      $("input#email").val('');
      $("input#email").focus();
      return false;
    }

    // validate comment
    var comments = $("textarea#comments").val();
    if (comments == "" || comments == "Comments..." || comments.length < 2) {
      $("textarea#comments").val('');
      $("textarea#comments").focus();
      return false;
    }

    var dataString = 'name='+ $("input#name").val() + '&email=' + $("input#email").val() + '&comments=' + $("textarea#comments").val();
    $('#reply_message').addClass('email_loading');

    // Send form data to mailer.php
    $.ajax({
      type: "POST",
      url: "php/mailer.php",
      data: dataString,
      success: function() {
        $('#reply_message').removeClass('email_loading');
        $('#reply_message').addClass('list3');
        $('#reply_message').html("Mail sent sucessfully")
        .hide()
        .fadeIn(1500);
          }
        });
    return false;
  });






});
