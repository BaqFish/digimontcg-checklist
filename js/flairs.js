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
            ['ex1', getEX1(), 'EX1/EX1-', -3, 'flair'],
            ['st1', getST1(), 'ST1/ST1-', -2, 'flair'],
            ['st2', getST2(), 'ST2/ST2-', -2, 'flair'],
            ['st3', getST3(), 'ST3/ST3-', -2, 'flair'],
            ['st4', getST4(), 'ST4/ST4-', -2, 'flair'],
            ['st5', getST5(), 'ST5/ST5-', -2, 'flair'],
            ['st6', getST6(), 'ST6/ST6-', -2, 'flair'],
            ['st7', getST7(), 'ST7/ST7-', -2, 'flair'],
            ['st8', getST8(), 'ST8/ST8-', -2, 'flair'],
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

                    contain.appendChild(icon);
                }
            }
        }
    }
    loadIcons();
}

//waits for DOM to load before executing function
document.addEventListener('DOMContentLoaded', loadPage, false);