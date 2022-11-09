
var day = dayjs().format("MM/DD/YYYY");
var hour = dayjs().format("H");
var main = $("div").eq(0);
var mainChildren = main.children();

for (let i = 0; i < $(".btn").length; i++) {
  $("textarea").eq(i).text(localStorage.getItem([i]));
}

$(function () {
  console.log(hour);
  function timeBlockColor() {
    $(".time-block").each(function () {
      var sectionId = $(this).attr("id");

      if (sectionId < hour) {
        $(this).addClass("past");
      }
      if (sectionId > hour) {
        $(this).addClass("future");
      }
      if (sectionId == hour) {
        $(this).addClass("present");
      }
    });
  }

  $(function () {
    function setText() {
      $(".btn").on("click", function setText(event) {
        event.preventDefault();
        localStorage.setItem([i], $("textarea").eq(i).val());
      });
    }
  });

  timeBlockColor();
  console.log($(".btn"));
  for (let i = 0; i < $(".btn").length; i++) {
    $(".btn")
      .eq(i)
      .on("click", function (event) {
        event.preventDefault();
        localStorage.setItem([i], $("textarea").eq(i).val());
      });
  }

  $("#currentDay").text(day);
});


