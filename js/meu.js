$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});


//
var box1 = document.getElementById('box1');
var drop1 = document.getElementById('drop1');


$(box1).click(function () {
    $(drop1).toggleClass("rotatedrop");
});
//
var box2 = document.getElementById('box2');
var drop2 = document.getElementById('drop2');


$(box2).click(function () {
    $(drop2).toggleClass("rotatedrop");
});
//
var box3 = document.getElementById('box3');
var drop3 = document.getElementById('drop3');


$(box3).click(function () {
    $(drop3).toggleClass("rotatedrop");
});
//
var box4 = document.getElementById('box4');
var drop4 = document.getElementById('drop4');


$(box4).click(function () {
    $(drop4).toggleClass("rotatedrop");
});

var grid = document.getElementById('sidebarCollapse');
var bar = document.getElementById('bar');
$(grid).click(function () {
    $(bar).toggleClass("bar");
});

var barra = document.getElementById('sidebarCollapse');
var content = document.getElementById('content');
$(barra).click(function () {
    $(content).toggleClass("retrait");
});

// BUTTON DESABLE FORM




// BUTTON DESABLE FORM


function imgin() {
    document.getElementById("backleft").src = "./img/backhover.svg";
}

function imgout() {
    document.getElementById("backleft").src = "./img/back.svg";
}

function imgin2() {
    document.getElementById("backright").src = "./img/backhover2.svg";
}

function imgout2() {
    document.getElementById("backright").src = "./img/back2.svg";
}



