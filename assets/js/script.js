var today = moment();
$("#currentDay").text(today.format("LLLL"));

for (let index = 9; index < 18; index++) {
  // timeblocks
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
  var savedText = localStorage.getItem("hour-" + index)
  if (!savedText) {
    savedText = ""
  }
  var formatedTime = moment(index, "hh").format("LT");
  hourDivEl.append(`<div class="col-md-1 hour">${formatedTime}</div>`);
  hourDivEl.append(
    `<textarea class="col-md-10 description">${savedText}</textarea>`
  );
  var saveBtnEl = $(
    '<button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>'
  );
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
