var saveBtn = $(".saveBtn");


var today = moment().format("MMMM Do, YYYY");
$("#currentDay").text(today);

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

saveBtn.on("click", function() {
    var timeOfDay = $(this).siblings(".hour").text();
    var plan = $(this).siblings("textArea").val();
    
    localStorage.setItem(timeOfDay, plan);
})


function savedPlans() {

}

changeTimeBlock();
savedPlans();