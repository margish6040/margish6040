function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $("#name").text(profile.getName());
  $("#email").text(profile.getEmail());
  $("#profile").attr("src", profile.getImageUrl());
  $(".data").css("display", "block");
  $(".g-signin2").css("display", "none");
  $("#navbar").css("display", "block");
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    alert("Successfully logged-out");
    $(".g-signin2").css("display", "block");
    $(".data").css("display", "none");
    $("#navbar").css("display", "none");
  });
}
