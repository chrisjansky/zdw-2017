var
  $body = $("body");

var
  endDate = moment("2017-01-31"),
  deadDate = endDate.fromNow();

$("[data-countdown]").text("Uzávěrka " + deadDate);

new Waypoint({
  element: "[data-menu]",
  handler: function(direction) {
    $body.toggleClass("nav--is-pinned", direction == "down");
  }
});

$("[data-carousel]").flickity({
  contain: true,
  imagesLoaded: true,
  pageDots: false
});

$("[data-nav-toggle]").on("click", function() {
  $body.toggleClass("nav--is-open");
});
