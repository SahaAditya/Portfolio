$(window).load(function () {
    var height = window.innerHeight,
      x = 0,
      y = height / 2,
      curveX = 10,
      curveY = 0,
      targetX = 0,
      xitteration = 0,
      yitteration = 0,
      menuExpanded = false;
  
    (blob = $("#blob")),
      (blobPath = $("#blob-path")),
      (hamburger = $(".hamburger"));
  
    $(this).on("mousemove", function (e) {
      x = e.pageX;
  
      y = e.pageY;
    });
  
    $(".hamburger, .menu-inner").on("mouseenter", function () {
      $(this).parent().addClass("expanded");
      menuExpanded = true;
    });
  
    $(".menu-inner").on("mouseleave", function () {
      menuExpanded = false;
      $(this).parent().removeClass("expanded");
    });
  
    function easeOutExpo(
      currentIteration,
      startValue,
      changeInValue,
      totalIterations
    ) {
      return (
        changeInValue *
          (-Math.pow(2, (-10 * currentIteration) / totalIterations) + 1) +
        startValue
      );
    }
  
    var hoverZone = 150;
    var expandAmount = 20;
  
    function svgCurve() {
      if (curveX > x - 1 && curveX < x + 1) {
        xitteration = 0;
      } else {
        if (menuExpanded) {
          targetX = 0;
        } else {
          xitteration = 0;
          if (x > hoverZone) {
            targetX = 0;
          } else {
            targetX = -(((60 + expandAmount) / 100) * (x - hoverZone));
          }
        }
        xitteration++;
      }
  
      if (curveY > y - 1 && curveY < y + 1) {
        yitteration = 0;
      } else {
        yitteration = 0;
        yitteration++;
      }
  
      curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
      curveY = easeOutExpo(yitteration, curveY, y - curveY, 100);
  
      var anchorDistance = 200;
      var curviness = anchorDistance - 40;
  
      var newCurve2 =
        "M60," +
        height +
        "H0V0h60v" +
        (curveY - anchorDistance) +
        "c0," +
        curviness +
        "," +
        curveX +
        "," +
        curviness +
        "," +
        curveX +
        "," +
        anchorDistance +
        "S60," +
        curveY +
        ",60," +
        (curveY + anchorDistance * 2) +
        "V" +
        height +
        "z";
  
      blobPath.attr("d", newCurve2);
  
      blob.width(curveX + 60);
  
      hamburger.css("transform", "translate(" + curveX + "px, " + curveY + "px)");
  
      $("h2").css("transform", "translateY(" + curveY + "px)");
      window.requestAnimationFrame(svgCurve);
    }
  
    window.requestAnimationFrame(svgCurve);
  });


  //Greetings speech peragraph
  // set up text to print, each item in array is new line
  var aText = new Array(
    "...I am a dynamic and creative professional with more than two years", 
    "of priceless hands-on experience managing multiple concurrent ",
    "creative design projects, concept generation, and graphic design.",
    "Possessing the abilities necessary to increase brand awareness in the ",
    "creative sector, as well as the capacity to see possibilities and get over",
    "objections while forming long-lasting, mutually beneficial",
    "relationships with clients, vendors, and employees to build a",
    "prosperous business. The key to great ideas is not having them, it is ",
    "executing them. And great ideas come from problems.",
    "As designers we call problems, briefs and we call reactions to ",
    "problems, concepts.",
    " ",
    " ",
    "I am your designer. My name is Saha Aditya Kushal Orion."
    );
    var iSpeed = 20; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();