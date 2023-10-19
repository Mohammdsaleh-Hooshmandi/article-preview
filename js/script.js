$.noConflict();
jQuery($ => {
    $('.share-btn').click(() => {
        $('.share-links-wrapper').toggleClass('show')
    });
});