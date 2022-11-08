    //메인 영상 사운드
    $(function() {
        var video01Player = new Vimeo.Player('video01');
        $(".sound_off").on('click', function(){
          $(this).removeClass('view');
          $(".sound_on").addClass('view');
          video01Player.setVolume(0.5);
        });
        $(".sound_on").on('click', function(){
          $(this).removeClass('view');
          $(".sound_off").addClass('view');
          video01Player.setVolume(0);
        });
      });