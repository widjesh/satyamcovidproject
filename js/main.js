$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        stepsOrientation: "vertical",
        autoFocus: true,
        transitionEffectSpeed: 500,
        enableFinishButton:false,
        disablePreviousButton:true,
        titleTemplate : '<div class="title">#title#</div>',
        onStepChanged: function (event, current, next) {
                $('.actions > ul > li:first-child').attr('style', 'display:none');
        },
        labels: {
            finish: 'Sign Up <i class="fa fa-chevron-right"></i>',
            next: 'Next <i class="fa fa-chevron-right"></i>',
            previous: '<i class="fa fa-chevron-left"></i> Previous'
        }
      
    })

});
