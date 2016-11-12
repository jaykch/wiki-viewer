/**
 * Created by Jay on 11/12/2016.
 */

$("document").ready(function () {
    var searchSelector = $("#search");
    var searchOutputSelector = document.getElementById("results");
    search(searchSelector, searchOutputSelector);
});


function log(x) {
    console.log(x);
}

function search(searchSelector, searchOutputSelector) {
    searchSelector.keyup(function (event) {
        if (event.keyCode == 13) {
            log("Searching for: " + searchSelector.val());
            getSearchResults(searchSelector.val(), searchOutputSelector);
        }
    });
}

function renderResults(results, searchOutput) {
    searchOutput.innerHTML = "";
    var description = "";
    for (var i in results) {
        if (results[i].terms.description) {
            description = results[i].terms.description[0]
        }
        else
            description = "";
        searchOutput.innerHTML += "<a class='result col-md-12' href='" + results[i].fullurl + "' target='_blank'>" + "<span class='result-title'><strong>" + results[i].title + "</strong></span><br><span>" + description + "</span></a>";
    }
}

function getSearchResults(searchInput, searchOutput) {
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=" + searchInput + "&format=json&srprop=snippet&prop=pageterms|info&inprop=url&callback=?",
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "json",
        success: function (data) {
            renderResults(data.query.pages, searchOutput);
        },
        error: function (error) {
            throw error;
        }
    });

}
