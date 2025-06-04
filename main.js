document.addEventListener('DOMContentLoaded', () => {
  setEnv()
});

function setEnv(){
  const p = document.getElementById('test');
  let url = prompt('URL:');
  //alert(url);
  p.innerHTML = url;
}
