/*  ---------------------------------------------------
    Author: Josh
    Author URI: https://twitter.com/HodJosias
---------------------------------------------------------  */

(function ($) {

    $(document).ready(function() {
       $("#auth-side")

       for (let i = 0; i < 55; i++) {
            var $div = $('<div  class="flex space-x-10 px-4 band" />')
            for (let i = 0; i < 40; i++) {
                
                $name = $('<span class="font-light"/>').text('utero')
                $div.append($name)
            }

           $div.appendTo('#auth-side')
       }
    });
    
})(jQuery);