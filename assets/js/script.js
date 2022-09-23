let dayTime = $("#currentDay");
let timecards = $(".submit");


// Time display
let currentHour = moment().format("HH:mm");

dayTime.text(moment().format("dddd, MMMM Do, YYYY HH:mm A")); // Displays date and time

setInterval(function () { // Reloads date and time every minute.
  dayTime.text (moment().format("dddd, MMMM Do, YYYY HH:mm A"));
}, 60000)

let content = []; // Initiate data storage

// Initiate local storage
if (localStorage.getItem("slot-0") === null) {
  for (i = 0; i < 8; i++) {
    let new_store_key = "slot-"+i;
    localStorage.setItem(new_store_key," a");
  }
} else { // Or obtain local storage
  for (i = 0; i < 8; i++) {
    content.push(localStorage.getItem("slot-"+i));
  }
}
console.log(content)
fill_spaces(content);

function fill_spaces(content) {
  for (i = 0; i< 8; i++) {
    let index = 9+i;
    let tag = "#"+index;
    if (index<moment().format("H")) {
      let box = tag+"-box";
      $(box).addClass("past");
    } else if (index == moment().format("H")) {
      let box = tag+"-box";
      $(box).addClass("present");
    } else {
      let box = tag+"-box";
      $(box).addClass("future");
    }
    console.log(tag)
    $(tag).text(content[i]);
  }
}

timecards.on("click", function(event) {
  let timesave = event.target.id;
}) 