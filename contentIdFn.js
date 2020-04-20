function contentIdFn(contentUrl) {
    var l = document.createElement("a");
    l.href = contentUrl;
    return l.pathname;
}
