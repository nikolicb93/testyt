const t = document.getElementById("test");
window.localStorage.setItem("1", "jedan");
t.innerHTML = window.localStorage.getItem("1")
