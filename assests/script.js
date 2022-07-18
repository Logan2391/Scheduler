var saveBtn = $(".saveBtn");
var clearBtn = $(".clearBtn");

// presensts the time of day at the top of the pagee 

var today = moment().format("MMMM Do, YYYY");
$("#currentDay").text(today);

// saves the plan and time to local storage on click

saveBtn.on("click", function() {
    var timeOfDay = $(this).siblings(".hour").text();
    var plan = $(this).siblings("textArea").val();
    
    localStorage.setItem(timeOfDay, plan);
})

// changes the color of the time block based on the time of day 

function changeTimeBlock() {
    var hour = moment().hours();

    $(".time-block").each(function (){
        var currentHour =parseInt($(this).attr("id"))

        if(currentHour > hour) {
            $(this).addClass("future")
        }
        else if (currentHour === hour) {
            $(this).addClass("present")
        }
        if (currentHour < hour)
            $(this).addClass("past")
    })
}

// ensures the plans saved in local storage persist 

$("#9 textarea").val(localStorage.getItem("9AM"));
$("#10 textarea").val(localStorage.getItem("10AM"));
$("#11 textarea").val(localStorage.getItem("11AM"));
$("#12 textarea").val(localStorage.getItem("12AM"));
$("#13 textarea").val(localStorage.getItem("1PM"));
$("#14 textarea").val(localStorage.getItem("2PM"));
$("#15 textarea").val(localStorage.getItem("3PM"));
$("#16 textarea").val(localStorage.getItem("4PM"));
$("#17 textarea").val(localStorage.getItem("5PM"));

// clears localStorage and resest values in the textarea so its empty

clearBtn.on("click", function(){
    localStorage.clear(); 
    $("textarea").val('');
})

// calls the color change function

changeTimeBlock();