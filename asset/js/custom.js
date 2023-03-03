function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myViewall() {
    var hide = document.getElementById("hide");
    var viewAll = document.getElementById("viewall");
    var btnView = document.getElementById("myView");
  
    if (hide.style.display === "none") {
      hide.style.display = "contents";
      btnView.innerHTML = "Lihat Semua";
      viewAll.style.display = "none";
    } else {
      hide.style.display = "none";
      btnView.innerHTML = "...";
      viewAll.style.display = "contents";
    }
  }