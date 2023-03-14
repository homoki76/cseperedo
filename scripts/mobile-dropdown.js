//Mobile Dropdown
$('#ham-icon').css('cursor', 'pointer');
$('#close-icon').css('cursor', 'pointer');

$('#ham-icon').click(function () {
    $("#ham-icon").css({ "display": "none" });
    $("#close-icon").css({ "display": "block" });
    $('#mobile-dropdown').slideToggle("slow");
    });

$('#close-icon').click(function () {
    $("#close-icon").css({ "display": "none" });
    $("#ham-icon").css({ "display": "block" });
    $('#mobile-dropdown').slideToggle("slow");
    });