var sorting = 0;

loadPage = function () {
    //SPECIAL FLAIRS
    loadIcons = function () {
        var categories = [
            //Change
            ['bt1', getBT1(), 'BT1/BT1-', -3, 'flair'],
            ['bt2', getBT2(), 'BT2/BT2-', -3, 'flair'],
            ['bt3', getBT3(), 'BT3/BT3-', -3, 'flair'],
            ['bt4', getBT4(), 'BT4/BT4-', -3, 'flair'],
            ['bt5', getBT5(), 'BT5/BT5-', -3, 'flair'],
            ['bt6', getBT6(), 'BT6/BT6-', -3, 'flair'],
            ['bt7', getBT7(), 'BT7/BT7-', -3, 'flair'],
            ['bt8', getBT8(), 'BT8/BT8-', -3, 'flair'],
            ['bt9', getBT9(), 'BT9/BT9-', -3, 'flair'],
            ['ex1', getEX1(), 'EX1/EX1-', -3, 'flair'],
            ['ex2', getEX2(), 'EX2/EX2-', -3, 'flair'],
            ['promo', getPromo(), 'Promo/P-', -3, 'flair']
        ];

        //creates HTML for everything
        for (var cat in categories) {
            var contain = document.getElementById(categories[cat][0]);

            contain.innerHTML = '';

            for (var x in categories[cat][1]) {
               
                if (categories[cat][1][x] === -1) {
                    var icon_hr = document.createElement('hr');

                    contain.appendChild(icon_hr);
                }
                else {
                    var icon = document.createElement('img');
                    icon.setAttribute('class', categories[cat][4]);
                    icon.setAttribute('id', categories[cat][0] + categories[cat][1][x]);
                    icon.setAttribute('src', 'images/' + categories[cat][2] + (('000' + categories[cat][1][x]).substr(categories[cat][3])) + '.png');
                    
                    icon.addEventListener('dblclick', function () {
                        var img = $(this);
                        var character = $('<img class="modalimage"/>');
                        character.attr({
                            src: img.attr('src'),
                            alt: img.attr('alt'),
                            title: img.attr('title')
                        });

                        var over = $('<div class="modalBackground"/>').text(' ').append(character).bind('click', function () {
                            $(this).fadeOut(300, function () {
                                $(this).remove();
                            });
                        }).insertAfter(this).animate({
                            'opacity': 1
                        }, 300);
                    });
                    contain.appendChild(icon);
                }
            }
        }
    }
    loadIcons();
}

//waits for DOM to load before executing function
document.addEventListener('DOMContentLoaded', loadPage, false);