function formats(ele, e) {
  ele.value = ele.value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
}
function numberValidation(e) {
  e.target.value = e.target.value.replace(/[^\d ]/g, "");
}

$("#month").on("keyup keydown change", function (e) {
  if ($(this).val() > 12 && e.keyCode !== 46 && e.keyCode !== 8) {
    e.preventDefault();
    $(this).val(12);
  }
  if ($(this).val() < 1 && e.keyCode !== 46 && e.keyCode !== 8) {
    e.preventDefault();
    $(this).val(1);
  }
});

const Cname = document.getElementById("Cname");
const Cnumber = document.getElementById("Cnumber");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");

document.getElementById("confirm").addEventListener("click", () => {
  if (
    Cname.value == "" ||
    Cnumber.value == "" ||
    month.value == "" ||
    year.value == "" ||
    cvc.value == "" ||
    Cnumber.value.length < 19 ||
    cvc.value.length < 3
  ) {
    if (Cname.value == "") {
      document.getElementById("Cnameer").style.display = "block";
      Cname.classList.add("errorborder");
    } else {
      document.getElementById("creCname").innerHTML = Cname.value;
      document.getElementById("Cnameer").style.display = "none";
      Cname.classList.remove("errorborder");
    }
    if (Cnumber.value == "" || Cnumber.value.length < 19) {
      document.getElementById("Cnumer").style.display = "block";
      Cnumber.classList.add("errorborder");
    } else {
      document.getElementById("creCnumber").innerHTML = Cnumber.value;
      document.getElementById("Cnumer").style.display = "none";
      Cnumber.classList.remove("errorborder");
    }
    if (month.value == "") {
      document.getElementById("Cmoner").style.display = "block";
      month.classList.add("errorborder");
    } else {
      if (month.value.length < 2) {
        document.getElementById("creMonth").innerHTML = "0" + month.value;
      } else {
        document.getElementById("creMonth").innerHTML = month.value;
      }
      document.getElementById("Cmoner").style.display = "none";
      month.classList.remove("errorborder");
    }
    if (year.value == "") {
      document.getElementById("Cyearer").style.display = "block";
      year.classList.add("errorborder");
    } else {
      if (year.value.length < 2) {
        document.getElementById("creYear").innerHTML = "0" + year.value;
      } else {
        document.getElementById("creYear").innerHTML = year.value;
      }
      document.getElementById("Cyearer").style.display = "none";
      year.classList.remove("errorborder");
    }
    if (cvc.value == "" || cvc.value.length < 3) {
      document.getElementById("Cvcer").style.display = "block";
      cvc.classList.add("errorborder");
    } else {
      document.getElementById("creCVC").innerHTML = cvc.value;
      document.getElementById("Cvcer").style.display = "none";
      cvc.classList.remove("errorborder");
    }
  } else {
    document.getElementById("creCname").innerHTML = Cname.value;
    document.getElementById("creCnumber").innerHTML = Cnumber.value;
    document.getElementById("creMonth").innerHTML = month.value;
    document.getElementById("creYear").innerHTML = year.value;
    document.getElementById("creCVC").innerHTML = cvc.value;
    document.getElementById("form").style.display = "none";
    document.getElementById("completebox").style.display = "block";
  }
});

document.getElementById("continue").addEventListener("click", () => {
  Cname.value = "";
  Cnumber.value = "";
  month.value = "";
  year.value = "";
  cvc.value = "";
  document.getElementById("Cnameer").style.display = "none";
  document.getElementById("Cnumer").style.display = "none";
  document.getElementById("Cmoner").style.display = "none";
  document.getElementById("Cyearer").style.display = "none";
  document.getElementById("Cvcer").style.display = "none";
  Cname.classList.remove("errorborder");
  Cnumber.classList.remove("errorborder");
  month.classList.remove("errorborder");
  year.classList.remove("errorborder");
  cvc.classList.remove("errorborder");
  document.getElementById("form").style.display = "block";
  document.getElementById("completebox").style.display = "none";
});
