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

          $(document).on("click",".status-title",function(){
            let _this  =  $(this);
            var data = _this.attr("id");
            let task = $('#task_'+data);
            if(task.is(":visible")){
               task.hide();
               _this.html("<i class='fa fa-chevron-right'></i>");
            }else 
            { 
                task.show();
                _this.html("<i class='fa fa-chevron-down'></i>");
             }
          });

          $(document).on("mouseenter",".cell-input",function(){
              $(this).find('input').removeClass('hide').focus();
          }).on("mouseleave",".cell-input",function(){
              let element = $(this).find('input');
              if(element.val()=='')
                element.addClass('hide');
          });
    });

