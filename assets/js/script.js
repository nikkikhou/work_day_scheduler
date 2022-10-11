// current date
var today = moment();
$("#currentDay").text(today.format("LLLL"));

// timeblocks
for (let index = 9; index < 18; index++) {
  //past,present,future color changes
  var rowClass = "";
  if (today.hour() > index) {
    rowClass = "past";
  }
  if (today.hour() === index) {
    rowClass = "present";
  }
  if (today.hour() < index) {
    rowClass = "future";
  }
  var hourDivEl = $(
    `<div id="hour-${index}" class="row time-block ${rowClass}"></div>`
  );
  // getting saved text from local storage
  var savedText = localStorage.getItem("hour-" + index)
  if (!savedText) {
    savedText = ""
  }
  // to know what current hour it is
  var formatedTime = moment(index, "hh").format("LT");
  // adding text area
  hourDivEl.append(`<div class="col-md-1 hour">${formatedTime}</div>`);
  hourDivEl.append(
    `<textarea class="col-md-10 description">${savedText}</textarea>`
  );
  var saveBtnEl = $(
    '<button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>'
  );
  // saves to local storage
  hourDivEl.append(saveBtnEl);
  saveBtnEl.click(function (event) {
    var hourEl = $(this).parent();
    var hourId = $(this).parent().attr("id");
    var hourText = hourEl.find("textarea").val();
    console.log(hourId);
    console.log(hourText);
    localStorage.setItem(hourId, hourText);
  });
  $(".container").append(hourDivEl);
}
