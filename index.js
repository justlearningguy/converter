//category onclick
const vars = document.querySelectorAll('.converter_menu_item');
for(var i in vars) {
    vars[i].onclick = function() {
        localStorage.setItem('unit_type', this.id);
        window.location = `convertscreen.html`;
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
function averageGrade() {
  window.location = `averagegrade.html`;
}