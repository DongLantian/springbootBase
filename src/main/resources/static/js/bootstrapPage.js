var Pager = function Pager(obj) {
    var totalCount = parseInt(obj.totalCount || 0), pageSize = parseInt(obj.pageSize || 10),
        buttonSize = parseInt(obj.buttonSize || 10), pageParam = obj.pageParam || "page",
        className = obj.className || "pagination", prevButton = obj.prevButton || "&laquo;",
        nextButton = obj.nextButton || "&raquo;", firstButton = obj.firstButton || "",
        lastButton = obj.lastButton || "";
    if (Pager.getParam = function (a) {
            var t = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i"), e = window.location.search.substr(1).match(t);
            return null != e ? unescape(e[2]) : null
        }, Pager.replaceUrl = function (name, value) {
            var oUrl = window.location.href.replace(window.location.hash, ""),
                reg = new RegExp("(^|&)(" + name + "=)([^&]*)(&|$)", "i"),
                r = window.location.search.substr(1).match(reg);
            return null != r ? oUrl.replace(eval("/" + r[0] + "/g"), r[1] + r[2] + value + r[4]) : oUrl + (oUrl.indexOf("?") > 0 ? "&" : "?") + name + "=" + value
        }, 0 == totalCount || totalCount <= pageSize) return "";
    var page = parseInt(Pager.getParam(pageParam)) || 0;
    page = page > 1 ? page : 1;
    var str = '<ul class="' + className + '">';
    firstButton && (str += '<li class="page-item"><a class="page-link" href="' + Pager.replaceUrl(pageParam, 1) + '">' + firstButton + "</a></li>"), str += page <= 1 ? '<li class="page-item disabled"><span class="page-link">' + prevButton + "</span></li>" : '<li class="page-item"><a class="page-link" href="' + Pager.replaceUrl(pageParam, page - 1) + '">' + prevButton + "</a></li>";
    var max = Math.ceil(totalCount / pageSize), start = Math.floor((page - 2) / (buttonSize - 2)) * (buttonSize - 2);
    start = start + buttonSize > max ? max - buttonSize : start, start = start >= 0 ? start : 0;
    for (var i = start + 1; i <= start + buttonSize && !(i > max || buttonSize < 3); i++) str += "<li" + (i == page ? ' class="active"' : "") + '><a class="page-link" href="' + Pager.replaceUrl(pageParam, i) + '">' + i + "</a></li>";
    return str += page >= max ? '<li class="page-item disabled"><span class="page-link">' + nextButton + "</span></li>" : '<li class="page-item"><a class="page-link" href="' + Pager.replaceUrl(pageParam, page + 1) + '">' + nextButton + "</a></li>", lastButton && (str += '<li class="page-item"><a class="page-link" href="' + Pager.replaceUrl(pageParam, max) + '">' + lastButton + "</a></li>"), str + "</ul>"
};