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
  countBT1();
  countBT2();
  countBT3();
  countBT4();
  countBT5();
  countBT6();
  countBT7();
  countBT8();
  countEX1();
  countPromo();
}

function countBT1() {
  var amount = $("#bt1 .selected").length;
  var total = $("#bt1 .flair").length;

  $('#counterbt1').html("<span class='cl'>Booster [BT-01] NEW EVOLUTION <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countBT2() {
  var amount = $("#bt2 .selected").length;
  var total = $("#bt2 .flair").length;

  $('#counterbt2').html("<span class='cl'>Booster [BT-02] ULTIMATE POWER <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countBT3() {
  var amount = $("#bt3 .selected").length;
  var total = $("#bt3 .flair").length;

  $('#counterbt3').html("<span class='cl'>Booster [BT-03] UNION IMPACT <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countBT4() {
  var amount = $("#bt4 .selected").length;
  var total = $("#bt4 .flair").length;

  $('#counterbt4').html("<span class='cl'>Booster [BT-04] GREAT LEGEND <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countBT5() {
  var amount = $("#bt5 .selected").length;
  var total = $("#bt5 .flair").length;

  $('#counterbt5').html("<span class='cl'>Booster [BT-05] BATTLE OF OMEGA <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countBT6() {
  var amount = $("#bt6 .selected").length;
  var total = $("#bt6 .flair").length;

  $('#counterbt6').html("<span class='cl'>Booster [BT-06] DOUBLE DIAMOND <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countBT7() {
  var amount = $("#bt7 .selected").length;
  var total = $("#bt7 .flair").length;

  $('#counterbt7').html("<span class='cl'>Booster [BT-07] NEXT ADVENTURE <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countBT8() {
  var amount = $("#bt8 .selected").length;
  var total = $("#bt8 .flair").length;

  $('#counterbt8').html("<span class='cl'>Booster [BT-08] NEW AWAKENING <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countEX1() {
  var amount = $("#ex1 .selected").length;
  var total = $("#ex1 .flair").length;

  $('#counterex1').html("<span class='cl'>Booster [EX-01] CLASSIC COLLECTION <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countPromo() {
  var amount = $("#promo .selected").length;
  var total = $("#promo .flair").length;

  $('#counterpromo').html("<span class='cl'>Promotional <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
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
  enablePageFunctions();
});