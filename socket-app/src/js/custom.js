    $( document ).ready(function() {
        $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
            $("body").toggleClass("sidebar-toggled");
            $(".sidebar").toggleClass("toggled");
            if ($(".sidebar").hasClass("toggled")) {
              $('.sidebar .collapse').collapse('hide');
            };
          });

          $(document).on("click", "td", function() {
            $('.dialog-content').addClass('hideMe');
             $(this).find('.dialog-content').removeClass('hideMe');
          });

    });

