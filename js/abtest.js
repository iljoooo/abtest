var path = "https://gitcdn.link/repo/iljoooo/abtest/master/css/";

if (Date.now() % 2 == 0) {
    option = "A";
    var css = "style_v1.css";
    document.write("<link rel=\"stylesheet\" href=\"" + path + css + "\">");
} else {
    option = "B";
    var css = "style_v2.css";
    document.write("<link rel=\"stylesheet\" href=\"" + path + css + "\">");
}

function getCookie(name) {
    console.log('getCookie');
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    console.log('cookie:' + cookieValue);
    return cookieValue;
}

function log() {
    var form = document.createElement("form");
    form.setAttribute("charset", "UTF-8");
    form.setAttribute("method", "Post");
    form.setAttribute("action", "http://147.46.67.251:37090/click/click");

    var hiddenField1 = document.createElement("input");
    hiddenField1.setAttribute("type", "hidden");
    hiddenField1.setAttribute("name", 'csrfmiddlewaretoken');
    hiddenField1.setAttribute("value", getCookie('csrftoken'));
    form.appendChild(hiddenField1);

    var hiddenField2 = document.createElement("input");
    hiddenField2.setAttribute("type", "hidden");
    hiddenField2.setAttribute("name", "option");
    hiddenField2.setAttribute("value", option);
    form.appendChild(hiddenField2);

    document.body.appendChild(form);
    form.submit();
}
