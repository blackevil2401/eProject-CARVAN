/*------------------------------------>  Menu 2 in product site <-----------------------------------*/

function sticky_menu(menupt, sticky) {
  
    if (typeof sticky === 'undefined' || !jQuery.isNumeric(sticky)) sticky = 0;
    if ($(window).scrollTop() >= sticky) {
        if ($('#just-for-height').length === 0) {
            menupt.after('<div id="just-for-height" style="height:' + menupt.height() + 'px"></div>')
        }
        menupt.addClass("sticky");
    } else {
        menupt.removeClass("sticky");
        $('#just-for-height').remove();
    }
}
$(function() {
    
	var menupt = $("#menu2");
    if (menupt.length) {
        var sticky = menupt.offset().top + 1;
        if ($(window).width() > 767) {
            sticky_menu(menupt, sticky);
            $(window).on('scroll', function () {
                sticky_menu(menupt, sticky);
            });
        }
    }
	
});
/*------------------------------------>  Button Scroll Top <-----------------------------------*/
function scrolltop() {
  var id_button = '#scrolltop';
  // scroll down at 220px show button
  var offset = 220;
  // Time transition
  var duration = 500;
  // check hide/show button
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {

        jQuery(id_button).fadeIn(duration);
    } else {

        jQuery(id_button).fadeOut(duration);
    }
  });

  // Add event when  button is clicked, the page scroll to Top
  jQuery(id_button).click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
  });
}
$(function(){
  scrolltop();
});


/*--------------------------------> Menu Sort <---------------------------------*/
	var container = $('.grid').isotope({
		itemSelector: '.col-xs-12',
		getSortData: {
			name: '.name',
			price: '.price parseInt'
		}
	});
	$('.alphSort').on('click', function(e){
		e.preventDefault();
		container.isotope({ sortBy: 'name'});
	});
	$('.prcBtnH').on('click', function(e){
		e.preventDefault();
		container.isotope({ sortBy: 'price', sortAscending: false});
	});
	$('.prcBtnL').on('click', function(e){
		e.preventDefault();
		container.isotope({ sortBy: 'price', sortAscending: true});
	});
	$('.prcBtnR').on('click',function(e){
		e.preventDefault();
		container.isotope({sortBy:'random'});
	});
	$('.prcBtnO').on('click',function(e){
		e.preventDefault();
		container.isotope({sortBy:'original-order'});
	});

