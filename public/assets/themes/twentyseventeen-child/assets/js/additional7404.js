// Fade in for news posts

// jQuery(".fade-in-post-container .elementor-post").each(function(i) {
//     jQuery(this).delay(250 * i).fadeIn(1000);
// });

// s

jQuery('.fade-in-post-container .elementor-post').hide();
jQuery('.fade-in-post-container .elementor-post').each(function(i) {
    setTimeout(()=>{jQuery(this).show().addClass('animated fadeInUp')}, 250 * i);
});



// Alphabetical Filter for Products

var $boxes = jQuery('.elementor-posts-container > .elementor-post');

var $btns = jQuery('.alphabet-btn').click(function() {
  var id = this.id;
  if (id == 'all') {
    $boxes.show()
  } else {
    $boxes.hide().filter(function() {
      var re = new RegExp('^' + id, 'i');
      return re.test($(this).text().trim());
    }).show()
  }
  $btns.removeClass('alphabet-active');
  $(this).addClass('alphabet-active');
});


// Alphabetical Filter Count

jQuery('.alphabet-btn').not('#all').each(function() {
  var id = this.id;

  var count =  $boxes.filter(function() {
      var re = new RegExp('^' + id, 'i');
      return re.test($(this).text().trim());
    }).length

  $(this).append('<span class="count">' + count +'</span>')
  $('.alphabet-btn').not('#all');
});





// Add a link to contact box div to enable call on click.

jQuery('.tel-block').wrapInner('<a href="tel:+44 1509 217 705" class="remove-tel-block"></a>');





// Object Fit fallback for Edge and ie.


