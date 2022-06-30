function changeLink (id, url) {
    document.getElementById(id).innerHTML = "Visitar " + url;
    document.getElementById(id).href = url;
}