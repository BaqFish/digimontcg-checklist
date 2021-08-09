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
  countEX1();
  countST1();
  countST2();
  countST3();
  countST4();
  countST5();
  countST6();
  countST7();
  countST8();
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

function countEX1() {
  var amount = $("#ex1 .selected").length;
  var total = $("#ex1 .flair").length;

  $('#counterex1').html("<span class='cl'>Booster [EX-01] CLASSIC COLLECTION <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countST1() {
  var amount = $("#st1 .selected").length;
  var total = $("#st1 .flair").length;

  $('#counterst1').html("<span class='cl'>Start Deck [ST-1] GAIA RED <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countST2() {
  var amount = $("#st2 .selected").length;
  var total = $("#st2 .flair").length;

  $('#counterst2').html("<span class='cl'>Start Deck [ST-2] COCYTUS BLUE  <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countST3() {
  var amount = $("#st3 .selected").length;
  var total = $("#st3 .flair").length;

  $('#counterst3').html("<span class='cl'>Start Deck [ST-3] HEAVEN'S YELLOW <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countST4() {
  var amount = $("#st4 .selected").length;
  var total = $("#st4 .flair").length;

  $('#counterst4').html("<span class='cl'>Start Deck [ST-4] GIGA GREEN <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countST5() {
  var amount = $("#st5 .selected").length;
  var total = $("#st5 .flair").length;

  $('#counterst5').html("<span class='cl'>Start Deck [ST-5] MUGEN BLACK <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countST6() {
  var amount = $("#st6 .selected").length;
  var total = $("#st6 .flair").length;

  $('#counterst6').html("<span class='cl'>Start Deck [ST-6] VENOM VIOLET <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countST7() {
  var amount = $("#st7 .selected").length;
  var total = $("#st7 .flair").length;

  $('#counterst7').html("<span class='cl'>Start Deck [ST-7] GALLANTMON <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
}

function countST8() {
  var amount = $("#st8 .selected").length;
  var total = $("#st8 .flair").length;

  $('#counterst8').html("<span class='cl'>Start Deck [ST-8] ULFORCEVEEDRAMON <div class='counter'>" + amount + "/" + (total) + "</div> </span>");
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