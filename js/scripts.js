selectr = $('.demo-card')

fisrt_image = selectr.first().find('img')
scnd_image = selectr.slice(1, 2).find('img')
thrd_image = selectr.slice(2, 3).find('img')
frd_image = selectr.slice(3, 4).find('img')

// function get_attr(at){

// }

fisrt_image.hover(
    function(){
        atr = $(this).attr('src')
        $(this).attr('src', 'images/yoga-41-2.svg')},
    function(){
        $(this).attr('src', atr)
    })

scnd_image.hover(
    function(){
        atr = $(this).attr('src')
        $(this).attr('src', 'images/yoga-44-2.svg')},
    function(){
        $(this).attr('src', atr)
    })