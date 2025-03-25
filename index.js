//category onclick
const vars = document.querySelectorAll('.converter_menu_item');
for(var i in vars) {
    vars[i].onclick = function() {
        localStorage.setItem('unit_type', this.id);
        if (window.innerWidth <700) {
          document.querySelector('.main').style.display = 'none';
        }
        menu_maker()
    }
}


//about menu
function info() {
    document.querySelector('.modal_box_bg').style.display = 'flex';
    setTimeout(function() {
      document.querySelector('.modal_box_bg').style.opacity = '1';
    }, 0);
}
function infoBack() {
  document.querySelector('.modal_box_bg').style.opacity = '0';
  setTimeout(function() {
    document.querySelector('.modal_box_bg').style.display = 'none';
  }, 300);
  
}
document.querySelector('.modal_box_bg').addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(document.querySelector(".modal_box_focus"));
	if ( ! withinBoundaries ) {
		infoBack()
	}
})
function changeTheme() {
  document.querySelector('body').classList.toggle('darkstyle');
  window.localStorage.setItem('theme', document.querySelector('body').classList)
  if(document.querySelector('body').classList == 'darkstyle') {
      document.querySelector('.theme_change_btn').innerText = 'DARK';    
  }
  else {
      document.querySelector('.theme_change_btn').innerText = 'LIGHT';
  }}

if(window.localStorage.getItem('theme') === 'darkstyle') {
    changeTheme();
}