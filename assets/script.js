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
    var columnTime=$(`<div class='col-sm-2 bg-light'>${times(i)}</div>`);
    var columnDisc=$("<div class='col-sm-8 bg-secondary'></div>");
    var columnSave=$("<div class='col-sm-2 bg-success'></div>");
    row.append(columnTime);
    row.append(columnDisc);
    row.append(columnSave);
    $(".container").append(row);
    console.log(row,columnTime,columnDisc,columnSave,$(".container"));
    
};

