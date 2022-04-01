// This code is based on code from https://github.com/BLE-LTER/Lunr-Index-and-Search-for-Static-Sites
// Adapted by Brian Bird, winter 2022, revised sprint 2022

"use strict";

var LUNR_CONFIG = {
    "resultsElementId": "searchResults", // Element to contain results
    "countElementId": "resultCount" // Element showing number of results
};


// Get URL arguments
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


// Parse search results into HTML
function parseLunrResults(results) {
    var html = [];
    for (var i = 0; i < results.length; i++) {
        var id = results[i]["ref"];
        var item = PREVIEW_LOOKUP[id]
        var time = item["time"];
        var heading = item["h"];
        var material = item["m"];
        //  var title = item["t"]; // currently unused
        var preview = item["p"];
        var link = item["l"];
        var result = ('<p><span class="result-title"><a href="' + link + '">' +
            heading + '</a></span><br><span class="result-preview">' + material +
            (material == "" ? "" : ". ") + time + (time == "" ? "" : ". ") +
            preview + '</span></p>');
        html.push(result);
    }
    if (html.length) {
        return html.join("");
    } else {
        return "<p>Your search returned no results.</p>";
    }
}


function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function showResultCount(query, total, domElementId) {
    if (total == 0) {
        return;
    }

    var s = "";
    if (total > 1) {
        s = "s";
    }
    var found = "<p>Found " + total + " result" + s;
    if (query != "" && query != null) {
        query = escapeHtml(query);
        var forQuery = ' for <span class="result-query">' + query + '</span>';
    } else {
        var forQuery = "";
    }
    var element = document.getElementById(domElementId);
    element.innerHTML = found + forQuery + "</p>";
}


function searchLunr(query) {
    var idx = lunr.Index.load(LUNR_DATA);
    // Get search results
    var results = idx.search(query);
    var resultHtml = parseLunrResults(results);
    var elementId = LUNR_CONFIG["resultsElementId"];
    document.getElementById(elementId).innerHTML = resultHtml;
    var count = results.length;
    showResultCount(query, count, LUNR_CONFIG["countElementId"]);
}

// When the window loads, read query parameters and perform search
window.onload = function() {
    // Get the query from the index page (if there is a query)
    var queryParam = location.search;
    if (queryParam != "" && queryParam != null) {
        document.forms.lunrSearchForm.q.value = queryParam;
    }
    // Use the query from the index page or a new one entered by the user
    var query = getParameterByName("q");
    if (query != "" && query != null) {
        document.forms.lunrSearchForm.q.value = query;
        searchLunr(query);
    }
};