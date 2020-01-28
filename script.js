$('include').each(function() {
    var filePath = $(this).attr('src');
    fetch(filePath).then(file => {
        file.text().then(content => {
            $(content).insertAfter(this)
            $(this).remove();
        });
    });
});

// Vanilla version:
// (() => {
//     const includes = document.getElementsByTagName('include');
//     [].forEach.call(includes, i => {
//         let filePath = i.getAttribute('src');
//         fetch(filePath).then(file => {
//             file.text().then(content => {
//                 i.insertAdjacentHTML('afterend', content);
//                 i.remove();
//             });
//         });
//     });
// })();