function updateStorage(key, value, save) {
  if (save) {
    localStorage.setItem(key, value);
  } else {
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
      key: storeKey,
      value: readStorageValue(storeKey),
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

  var className = document.getElementsByClassName("selected");
  var idStore = new Array();

  //loops every ID and stores key into array
  for (var i = 0; i < className.length; i++) {
    idStore.push({ key: className[i].id, value: className[i].className });
  }

  //add IDs from array to local storage
  for (var j = 0; j < idStore.length; j++) {
    updateStorage(idStore[j]["key"], null, true);
  }
}

// Change
const sets = [
  { id: "BT1", name: "Booster [BT-01] NEW EVOLUTION" },
  { id: "BT2", name: "Booster [BT-02] ULTIMATE POWER" },
  { id: "BT3", name: "Booster [BT-03] UNION IMPACT" },
  { id: "BT4", name: "Booster [BT-04] GREAT LEGEND" },
  { id: "BT5", name: "Booster [BT-05] BATTLE OF OMEGA" },
  { id: "BT6", name: "Booster [BT-06] DOUBLE DIAMOND" },
  { id: "BT7", name: "Booster [BT-07] NEXT ADVENTURE" },
  { id: "BT8", name: "Booster [BT-08] NEW AWAKENING" },
  { id: "BT9", name: "Booster [BT-09] X RECORD" },
  { id: "EX1", name: "Booster [EX-01] CLASSIC COLLECTION" },
  { id: "EX2", name: "Booster [EX-02] DIGITAL HAZARD" },
  { id: "Promo", name: "Promotional" },
];
function countEverything() {
  sets.forEach((set) => countSet(set));
}

function countSet(set) {
  var amount = $("#" + set.id.toLowerCase() + " .selected").length;
  var total = $("#" + set.id.toLowerCase() + " .flair").length;

  $("#counter" + set.id.toLowerCase()).html(
    "<span class='cl'>" +
      set.name +
      " <div class='counter'>" +
      amount +
      "/" +
      total +
      "</div> </span>"
  );
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
  Promise.all(
    sets.map(
      (set) =>
        fetch(
          "https://api.github.com/repos/BaqFish/digimontcg-checklist/contents/images/" +
            set.id +
            "?ref=GLB-Version"
        ).then((value) => value.json()) //fetch API then convert to JSON format
    )
  )
    .then((value) => {
      //creates HTML for everything
      for (var cat in value) {
        // targets the set name
        var contain = document.getElementById(
          value[cat][0].path.substr(7).toLowerCase().replace(/\/.*/, "")
        );
        if (!contain) {
          continue;
        }
        for (var x in value[cat]) {
          // targets only the filename
          var num = value[cat][x].name;

          // the base card number, e.g. 001 - to be replaced again below
          var base = num.replace(/.*-|\.png/g, "");

          // function to generate icons
          function createIcon() {
            var icon = document.createElement("img");

            icon.setAttribute("class", "flair");
            icon.setAttribute("id", contain + base.replace(/^0+/, ""));
            icon.setAttribute("src", value[cat][x].path);

            contain.appendChild(icon);

            // double click modal handling
            icon.addEventListener("dblclick", function () {
                var img = $(this);
                var character = $('<img class="modalimage"/>');
                character.attr({
                src: img.attr("src"),
                alt: img.attr("alt"),
                title: img.attr("title"),
                });

              var over = $('<div class="modalBackground"/>')
                .text(" ")
                .append(character)
                .bind("click", function () {
                    $(this).fadeOut(300, function () {
                        $(this).remove();
                    });
                })
                .insertAfter(this)
                .animate(
                  {
                    opacity: 1,
                  },
                  300
                );
            });
          }

          // adds horizontal rule for special set of cards in the 300 range
          if (base == 301) {
            var icon_hr = document.createElement("hr");

              contain.appendChild(icon_hr);

              createIcon();
          }
          // adds horizontal rule for special set of cards in the 200 range
          else if (base == 201) {
            var icon_hr = document.createElement("hr");

            contain.appendChild(icon_hr);

            createIcon();
          } else {
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
