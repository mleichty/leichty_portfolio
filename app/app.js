function addListeners() {

    $(".navBar__logoDiv").click( function (e) {
        let linkId = e.currentTarget.id;
        let sectionId = linkId + "Section";
        // console.log(sectionId);

        $("html, body").animate({
            scrollTop: $("#" + sectionId).offset().top
        }, 1500);

    });

    $(".navBar__link").click( function (e) {
        let linkId = e.currentTarget.id;
        let sectionId = linkId + "Section";
        // console.log(sectionId);

        $("html, body").animate({
            scrollTop: $("#" + sectionId).offset().top
        }, 1500);

    });
}

$(document).ready(function() {
    addListeners();
});