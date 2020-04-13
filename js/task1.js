
function addContentFromTemplate() {
    var template = document.getElementById("template");

    var templatePlace = document.getElementById("placeForTemplated");
    var clone = document.importNode(template.content, true);
    templatePlace.appendChild(clone);
}
