const output = document.getElementById("output");

function loadHistory() {
    const history = JSON.parse(localStorage.getItem("pageHistory")) || [];

    output.innerHTML = "";

    if (history.length === 0) {
        output.innerHTML = "<p>No recently visited pages.</p>";
        return;
    }

    history.forEach(page => {
        const link = document.createElement("a");
        link.href = page.url;
        link.textContent = page.title;
        link.className = "item";

        output.appendChild(link);
    });
}

window.onload = loadHistory;
