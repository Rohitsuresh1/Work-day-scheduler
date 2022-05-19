var date= moment().format("dddd, MMMM Do, YYYY ");
$("#currentDay").text(date).addClass("font-weight-bolder");

var times = function(i){
    var ampm = "";
    if(i<=2){
        ampm="AM";
    } else {
        ampm="PM";
    }
    var time=i+9;
    if (time>12)
     time=time-12;
    return time+" "+ampm;
};

for ( var i=0; i<9; i++){
    var row= $("<div class='row'>");
    var columnTime=$(`<div class='col-sm-1 bg-light time border-top border-secondary'>${times(i)}</div>`);
    var columnDisc=$(`<div class='col-sm-9 bg-secondary'></div>`);
    var columnSave=$(`<div class='col-sm-1 bg-success save rounded'><buttom id="saveBtn${i} class="savebtn "><i class="fas fa-save"> Save</i></button></div>`);
    row.append(columnTime);
    row.append(columnDisc);
    row.append(columnSave);
    $(".container").append(row);
    
};

