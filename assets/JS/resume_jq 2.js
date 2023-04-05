$(document).ready(function () {
    setInterval(function () {
        $('#titles li:first-child').slideUp(function () {
            $(this).appendTo($('#titles')).slideDown();
        });
    }, 3000);
});

$(document).ready(function () {
    $("#timeline").show();
    $("#club").hide();
    $("#project").hide();
});

$(function () {
    $("#active").click(function () {
        $("#timeline").show();
        $("#club").hide();
        $("#project").hide();
    });
});


$(function () {
    $("#project_bottom").click(function () {
        $("#timeline").hide();
        $("#club").hide();
        $("#project").show();
    });
});

$(function () {
    $("#club_bottom").click(function () {
        $("#timeline").hide();
        $("#club").show();
        $("#project").hide();
    });
});