const days = [
  "Sunday",
  "Monday",
  "Tuseday",
  "Wensday",
  "Thursday",
  "Friday",
  "Saturday",
];
function hourConverter(hour) {
  if (hour > 12) {
    return hour - 12;
  } else if (hour == 0) {
    return 12;
  } else {
    return hour;
  }
}
function zeroplacer(minute) {
  if (minute > 9) return minute;
  else return `0${minute}`;
}
function AmOrPm(hour) {
  if (hour > 0 && hour < 13) {
    return "AM";
  } else return "PM";
}
function localDate() {
  const time = new Date();
  const hour = hourConverter(time.getHours());
  const minute = zeroplacer(time.getMinutes());
  let result = `${days[time.getDay()]} ${hour}:${minute} ${AmOrPm(
    time.getHours
  )}`;
  $(".local-time").text(result);
}

$(document).ready(() => {
  localDate();
  setInterval(localDate, 1000);
  $("#subscribe").hover(
    function () {
      $(this).css({ color: "blue", textDecoration: "underline" });
    },
    function () {
      $(this).css({ color: "unset", textDecoration: "none" });
    }
  );
  if (window.location.pathname !== "/") {
    return;
  } else {
    $(".bxslider").bxSlider({ mode: "fade", auto: "true", captions: "true" });
  }
});
