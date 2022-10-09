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
  var hourDivEl = $(`<div class="row time-block ${rowClass}"></div>`);
  var formatedTime = moment(index, "hh").format("LT");
  hourDivEl.append(`<div class="col-md-1 hour">${formatedTime}</div>`);
  hourDivEl.append('<textarea class="col-md-10 description"></textarea>');
  hourDivEl.append(
    '<button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>'
  );
  $(".container").append(hourDivEl);
}
