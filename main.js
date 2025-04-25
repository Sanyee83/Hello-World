$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      $('#scrollTopArrow').addClass('shown');
    } else {
      $('#scrollTopArrow').removeClass('shown');
    }
  });
  
  $(document).ready(function() {
    $('#scrollTopArrow').click(function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return false;
    });
  });