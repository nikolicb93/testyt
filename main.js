document.addEventListener('DOMContentLoaded', () => {
  setEnv()
});

function setEnv(){
  let vplayer = document.getElementById('vplayer');
  let url = prompt('URL:');
  //alert(url);
  vplayer.setAttribute("src",`${url}`)
}
