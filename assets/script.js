var date= moment().format("dddd, MMMM Do, YYYY ");
$("#currentDay").text(date).addClass("font-weight-bolder");

var color = function(i) {
    var hour= new Date().getHours();
    i+=9;
    console.log(hour);
    while(i>=9){
        if(i==hour){
            $(`#taskText${i-9}`).css("background","#ff6961");
        }else if(i<hour){
            // console.log("else if",i);
            $(`#taskText${i-9}`).css("background","#d3d3d3");
        }else{  
            // console.log("else",i);
            $(`#taskText${i-9}`).css("background","#77dd77");
        }
        i--;
    }
};

var getData = function(i){
    var data=localStorage.getItem(i);
    $(`input#taskText${i}`).val(data);
};

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
    var columnDisc=$(`<div class='col-sm-9 '><input id="taskText${i}" class="text" type="text" name="input"></div>`);
    var columnSave=$(`<div class='col-sm-1 rounded'><button data-id="${i}" type="button" class="btn btn-success"><i class="fas fa-save"> Save</i></button></div>`);
    row.append(columnTime);
    row.append(columnDisc);
    row.append(columnSave);
    $(".container").append(row);
    getData(i);    
};

$("button.btn.btn-success").click(function(e){
    var id=$(this).data("id");
    var data=$(this).parent().siblings().find("input").val();
    localStorage.setItem(id,data);
 
});

setInterval(function(){color(8)},1000*60*5);
color(8);