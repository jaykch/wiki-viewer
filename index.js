/**
 * Created by Jay on 11/12/2016.
 */

function log(x){
    console.log(x);

}

var settings = {

};

function getSearchResults(){
    var searchText = "laster";
    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchText + "&callback=?",
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
