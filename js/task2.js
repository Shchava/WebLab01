organizeSectionLists();

function organizeSectionLists() {
    const sectionsLists = document.getElementsByClassName("sections");
    let totalSize = 0;
    for (let list of sectionsLists) {
        list.setAttribute("start", totalSize + 1);
        totalSize = totalSize + list.getElementsByTagName("li").length;
    }
}