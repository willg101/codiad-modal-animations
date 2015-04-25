/*
 *  Place copyright or other info here...
 */

(function(global, $){
    
    // Define core
    var codiad = global.codiad,
        scripts= document.getElementsByTagName('script'),
        path = scripts[scripts.length-1].src.split('?')[0],
        curpath = path.split('/').slice(0, -1).join('/')+'/';

    // Instantiates plugin
    $(function() {    
        codiad.modalAnimations.init();
    });

    $.loadScript( curpath + 'jquery.transit.js' );

    codiad.modalAnimations = {
        
        // Allows relative `this.path` linkage
        path: curpath,

        init: function() {

            codiad.modal.onLoadAnimation = function(){
		$( "#modal" ).transit({
                    scale: 1.15,
                    opacity: 0,
                    duration: 0, 
               }).transit({
                    scale: 1,
                    opacity: 1,
               });
            };
        },
    };

})(this, jQuery);
