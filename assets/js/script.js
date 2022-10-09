var today = moment();
$("#currentDay").text(today.format("LLLL"));

for (let index = 9; index < 18; index++) {
  // const element = array[index];

  var hourDivEl = $('<div class="row time-block"></div>');
  hourDivEl.append(`<div class="col-md-1 hour">${index}</div>`);
  hourDivEl.append('<textarea class="col-md-10 description"></textarea>');
  hourDivEl.append(
    '<button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>'
  );
  $(".container").append(hourDivEl);
}
