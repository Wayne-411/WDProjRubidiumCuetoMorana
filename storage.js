const currentPage = {
    url: window.location.href,
    title: document.title
};

// OPTIONAL: skip storing the form page itself
if (!currentPage.url.includes("RecentlyVisited")) {

    let history = JSON.parse(localStorage.getItem("pageHistory")) || [];

    // REMOVE duplicate (UPDATE behavior)
    history = history.filter(page => page.url !== currentPage.url);

    // ADD new page to front (CREATE)
    history.unshift(currentPage);

    // DELETE oldest if > 3
    if (history.length > 3) {
        history.pop();
    }

    localStorage.setItem("pageHistory", JSON.stringify(history));
}
