function performSearch(event) {
    event.preventDefault();
    const query = document.getElementById("search-input").value;
    const searchurl = "https://duckduckgo.com/?t=h_&q=" +encodeURIComponent(query);
    window.location.href = searchurl;
}