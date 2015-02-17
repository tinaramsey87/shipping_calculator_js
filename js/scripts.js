var calculate = function(parcel) {
  var rate = 0;

  if (parcel.to < 97231) {
    rate += 50;
  } else {
    rate += 25;
  }

  rate += (parcel.weight * 50);

  if (parcel.packageType === "small-box") {
    rate += 20;
  } else if (parcel.packageType === "medium-box") {
    rate += 30;
  } else if (parcel.packageType === "large-box") {
    rate += 40;
  } else if (parcel.packageType === "envelope") {
    rate += 50;
  } else {
    rate += 100;
  }

  // if (parcel.shipDate.getMonth() === 11) {
  // debugger;
  //   rate += 2000
  // }


  rate += (parcel.declaredValue * 25);


  return rate;
};


$(document).ready(function() {
  $("form#package-info").submit(function(event) {
    var from = parseInt($("input#from").val());
    var to = parseInt($("input#to").val());
    var weight = parseInt($("input#weight").val());
    var e = document.getElementById("package-type");
    var packageType = e.options[e.selectedIndex].value;
    var shipDate = Date.parse($("input#ship-date").val());
    var declaredValue = parseInt($("input#declared-value").val());
    var parcel = { from: from, to: to, weight: weight, packageType: packageType, shipDate: shipDate, declaredValue: declaredValue };
    var shippingCost = calculate(parcel);


    $("#shipping-cost").show();

      $(".cost").text(shippingCost);

    event.preventDefault();
  });

  // if (parcel.packageType === yourBox) {
  //   $("#dimensions").show();
  // }
});
