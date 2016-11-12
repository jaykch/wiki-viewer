/**
 * Created by Jay on 11/12/2016.
 */

function log(x){
    console.log(x);

}

function getResults(){
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&callback=?",
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function (errorMessage) {
            log(errorMessage);
        }
    });

}
