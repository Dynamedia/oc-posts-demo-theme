/*
 * Application
 */
(function($) {
    "use strict";

    jQuery(document).ready(function($) {
        /*-------------------------------
        OCTOBERCMS FLASH MESSAGE HANDLING
        ---------------------------------*/
        $(document).on('ajaxSetup', function(event, context) {
            // Enable AJAX handling of Flash messages on all AJAX requests
            context.options.flash = true;

            // Enable the StripeLoadIndicator on all AJAX requests
            context.options.loading = $.oc.stripeLoadIndicator;

            // Handle Flash Messages
            context.options.handleFlashMessage = function(message, type) {
                $.oc.flashMsg({ text: message, class: type });
            };

            // Handle Error Messages
            context.options.handleErrorMessage = function(message) {
                $.oc.flashMsg({ text: message, class: 'error' });
            };
        });

        // Materialize
        $('.sidenav').sidenav();

    }); // end of document ready
}(jQuery)); // End jQuery namespace

if (typeof(gtag) !== 'function') {
    gtag = function() { console.log('GoogleAnalytics not present.'); }
}

// set card-deck aspect ratios.

resizeCardDecks();

$( window ).resize(function() {
    resizeCardDecks();
});

function resizeCardDecks()
{
    $('.card-deck img').each(function() {
        //$(this).height($(this).width() * 0.5625);
        $(this).height($(this).width() * 0.65);
    });
}

function resizeJumbotron()
{
    $('.jumbotron img').each(function() {
        //$(this).height($(this).width() * 0.5625);
        $(this).height($(this).width() * 0.65);
    });
}
