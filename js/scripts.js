function updateStorage(key, value, save) {
  if (save) {
    localStorage.setItem(key, value);
  }
  else {
    localStorage.removeItem(key);
  }
}

function readStorageValue(key) {
  return localStorage.getItem(key);
}

function readAllStorage() {
  const nbItem = localStorage.length;
  const store = [];
  let i;
  let storeKey;
  for (i = 0; i < nbItem; i += 1) {
    storeKey = localStorage.key(i);
    store.push({
      "key": storeKey,
      "value": readStorageValue(storeKey)
    });
  }
  return store;
}

function updatePage() {
  //check local storage
  const store = readAllStorage();
  //restore the selected class
  $.each(store, function (index, elem) {
    $("#" + elem.key).addClass("selected");
  });
}

function selectPage() {
  //adds selected class to every icon
  $(".flair:not(.disabled)").addClass("selected");

  var className = document.getElementsByClassName('selected');
  var idStore = new Array();

  //loops every ID and stores key into array
  for (var i = 0; i < className.length; i++) {
    idStore.push({ "key": className[i].id, "value": className[i].className });
  }

  //add IDs from array to local storage
  for (var j = 0; j < idStore.length; j++) {
    updateStorage(idStore[j]['key'], null, true);
  }
}

// Change
function countEverything() {
  countSet('#bt1', '#counterbt1', 'Booster [BT-01] NEW EVOLUTION ');
  countSet('#bt2', '#counterbt2', 'Booster [BT-02] ULTIMATE POWER ');
  countSet('#bt3', '#counterbt3', 'Booster [BT-03] UNION IMPACT ');
  countSet('#bt4', '#counterbt4', 'Booster [BT-04] GREAT LEGEND ');
  countSet('#bt5', '#counterbt5', 'Booster [BT-05] BATTLE OF OMEGA ');
  countSet('#bt6', '#counterbt6', 'Booster [BT-06] DOUBLE DIAMOND ');
  countSet('#bt7', '#counterbt7', 'Booster [BT-07] NEXT ADVENTURE ');
  countSet('#bt8', '#counterbt8', 'Booster [BT-08] NEW AWAKENING ');
  countSet('#bt9', '#counterbt9', 'Booster [BT-09] X RECORD ');

  countSet('#ex1', '#counterex1', 'Booster [EX-01] CLASSIC COLLECTION ');
  countSet('#ex2', '#counterex2', 'Booster [EX-02] DIGITAL HAZARD ');

  countSet('#promo', '#counterpromo', 'Promotional ');
}

function countSet(tagname, countername, setname)
{
  var amount = $(tagname + " .selected").length;
  var total = $(tagname + " .flair").length;

  $(countername).html("<span class='cl'>" + setname + "<div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}


function enableSelect() {
  $(".container2 img").mousedown(function (e) {
    const $obj = $(this);

    $obj.toggleClass("selected");

    //creates object if selected class is present
    const save = $obj.hasClass("selected");

    //update the key
    updateStorage($obj.attr("id"), null, save);

    countEverything();
  });
}

function enablePageFunctions() {
  //restore previous state
  updatePage();

  //legend counterbt
  countEverything();

  //main function for selecting icons
  enableSelect();
}

jQuery(document).ready(function ($) {
  // wait for all promises to be resolved
  Promise.all([
    fetch('https://api.github.com/repos/BaqFish/digimontcg-checklist/contents/images/BT1?ref=GLB-Version').then(value => value.json()), //fetch API then convert to JSON format
    fetch('https://api.github.com/repos/BaqFish/digimontcg-checklist/contents/images/BT2?ref=GLB-Version').then(value => value.json()),
    fetch('https://api.github.com/repos/BaqFish/digimontcg-checklist/contents/images/BT3?ref=GLB-Version').then(value => value.json()),
    fetch('https://api.github.com/repos/BaqFish/digimontcg-checklist/contents/images/BT4?ref=GLB-Version').then(value => value.json()),
    fetch('https://api.github.com/repos/BaqFish/digimontcg-checklist/contents/images/BT5?ref=GLB-Version').then(value => value.json()),
    fetch('https://api.github.com/repos/BaqFish/digimontcg-checklist/contents/images/BT6?ref=GLB-Version').then(value => value.json()),
    fetch('https://api.github.com/repos/BaqFish/digimontcg-checklist/contents/images/BT7?ref=GLB-Version').then(value => value.json()),
    fetch('https://api.github.com/repos/BaqFish/digimontcg-checklist/contents/images/BT8?ref=GLB-Version').then(value => value.json()),
    fetch('https://api.github.com/repos/BaqFish/digimontcg-checklist/contents/images/BT9?ref=GLB-Version').then(value => value.json()),
    fetch('https://api.github.com/repos/BaqFish/digimontcg-checklist/contents/images/EX1?ref=GLB-Version').then(value => value.json()),
    fetch('https://api.github.com/repos/BaqFish/digimontcg-checklist/contents/images/EX2?ref=GLB-Version').then(value => value.json()),
    fetch('https://api.github.com/repos/BaqFish/digimontcg-checklist/contents/images/Promo?ref=GLB-Version').then(value => value.json())
    ])
    .then((value) => {
      // initialize array
      var bt1 = [];
      // loop through API to create set-specific array
      for (i in value[0]) {
        // first value pushes the set name, second value the file name, third the file path
        bt1.push(["bt1", value[0][i].name, value[0][i].path])
      }

      var bt2 = [];
      for (i in value[1]) {
        bt2.push(["bt2", value[1][i].name, value[1][i].path])
      }

      var bt3 = [];
      for (i in value[2]) {
        bt3.push(["bt3", value[2][i].name, value[2][i].path])
      }

      var bt4 = [];
      for (i in value[3]) {
        bt4.push(["bt4", value[3][i].name, value[3][i].path])
      }

      var bt5 = [];
      for (i in value[4]) {
        bt5.push(["bt5", value[4][i].name, value[4][i].path])
      }

      var bt6 = [];
      for (i in value[5]) {
        bt6.push(["bt6", value[5][i].name, value[5][i].path])
      }

      var bt7 = [];
      for (i in value[6]) {
        bt7.push(["bt7", value[6][i].name, value[6][i].path])
      }

      var bt8 = [];
      for (i in value[7]) {
        bt8.push(["bt8", value[7][i].name, value[7][i].path])
      }

      var bt9 = [];
      for (i in value[8]) {
        bt9.push(["bt9", value[8][i].name, value[8][i].path])
      }

      var ex1 = [];
      for (i in value[9]) {
        ex1.push(["ex1", value[9][i].name, value[9][i].path])
      }

      var ex2 = [];
      for (i in value[10]) {
        ex2.push(["ex2", value[10][i].name, value[10][i].path])
      }

      var promo = [];
      for (i in value[11]) {
        promo.push(["promo", value[11][i].name, value[11][i].path])
      }

      // new array to nest all previous arrays
      var allSets = [];
      allSets.push(bt1,bt2,bt3,bt4,bt5,bt6,bt7,bt8,bt9,ex1,ex2,promo);

      //creates HTML for everything
      for (var cat in allSets) {
        // targets the set name
        var contain = document.getElementById(allSets[cat][0][0]);

        contain.innerHTML = '';

        for (var x in allSets[cat]) {

          // targets only the filename
          var num = allSets[cat][x][1];

          // the base card number, e.g. 001 - to be replaced again below
          var base = num.replace(/.*-|\.png/g,"");

          // function to generate icons
          function createIcon() {
            var icon = document.createElement('img');

            icon.setAttribute('class', 'flair');
            icon.setAttribute('id', allSets[cat][0][0] + base.replace(/^0+/,""));
            icon.setAttribute('src', allSets[cat][x][2]);

            contain.appendChild(icon);

            // double click modal handling
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
          }

          // adds horizontal rule for special set of cards in the 300 range
          if (base == 301) {
              var icon_hr = document.createElement('hr');

              contain.appendChild(icon_hr);

              createIcon();
          }
          // adds horizontal rule for special set of cards in the 200 range
          else if (base == 201) {
            var icon_hr = document.createElement('hr');

            contain.appendChild(icon_hr);

            createIcon();
          }
          else {
            // call function to generate icons
            createIcon();

          }
      }
  }
  // call core functionality after icons generated
  enablePageFunctions();
})
  .catch((err) => {
      console.log(err);
  });
});
