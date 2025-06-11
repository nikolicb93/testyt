const t = document.getElementById("test");
//const arr = [1,2,3,4]
window.localStorage.setItem("1", "jedan");
let storage2 = JSON.stringify(window.localStorage)
t.innerHTML = storage2



