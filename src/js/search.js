function performSearch(event) {
    event.preventDefault();
    const query = document.getElementById("search-input").value;
    const searchurl = "https://search.brave.com/search?q=" +encodeURIComponent(query);
    window.location.href = searchurl;
}