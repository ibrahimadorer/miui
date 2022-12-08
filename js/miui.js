//<![CDATA[

function findFurthestPoint(t,e,i,n,o,l){let p=t-i>e/2?0:e,s=n-l>o/2?0:o;return Math.hypot(p-(t-i),s-(n-l))}$(".mi-ripple").on("pointerdown",(function(t){let e=this.getBoundingClientRect(),i=findFurthestPoint(t.clientX,this.offsetWidth,e.left,t.clientY,this.offsetHeight,e.top),n=document.createElement("span");n.classList.add("ripple"),n.style.left=t.clientX-e.left-i+"px",n.style.top=t.clientY-e.top-i+"px",n.style.width=n.style.height=2*i+"px",$(this).append(n)})),$(".mi-ripple").on("pointerup mouseleave dragleave touchmove touchend touchcancel",(function(){let t=$(this).find(".ripple");0!=t.lenght&&(t.css("opacity","0"),setTimeout((()=>{t.remove()}),300))}));



function findFurthestPoint(t,e,i,n,o,l){let p=t-i>e/2?0:e,s=n-l>o/2?0:o;return Math.hypot(p-(t-i),s-(n-l))}$(".mi-ripple-fixed").on("pointerdown",(function(t){let e=this.getBoundingClientRect(),i=findFurthestPoint(t.clientX,this.offsetWidth,e.left,t.clientY,this.offsetHeight,e.top),n=document.createElement("span");n.classList.add("ripple"),n.style.left=t.clientX-e.left-i+"px",n.style.top=t.clientY-e.top-i+"px",n.style.width=n.style.height=2*i+"px",$(this).append(n)})),$(".mi-ripple-fixed").on("pointerup mouseleave dragleave touchmove touchend touchcancel",(function(){let t=$(this).find(".ripple");0!=t.lenght&&(t.css("opacity","0"),setTimeout((()=>{t.remove()}),300))}));



//]]>









$(document).ready(function(){ 
"use strict";
var miuiATNaddNumeration = function(miuiATN){
  var miuiATNtable = document.querySelector('table.' + miuiATN);
  var miuiATNtrs = miuiATNtable.querySelectorAll('tr');
  var miuiATNcounter = 1;
  
  Array.prototype.forEach.call(miuiATNtrs, function(x,i){
    var miuiATNfirstChild = x.children[0]
    if (miuiATNfirstChild.tagName === 'TD') {
      var miuiATNcell = document.createElement('td')
      miuiATNcell.textContent = (miuiATNcounter ++).toLocaleString('bn-BD')
      x.insertBefore(miuiATNcell,miuiATNfirstChild)
    } else {
      miuiATNfirstChild.setAttribute('colspan',2)
    }
  })
}
miuiATNaddNumeration("mi-auto-table-numbering");
});


















$(document).ready(function(){ 
    $('.mi-tab-a').click(function(){  
      $(".mi-tab").removeClass('mi-tab-active');
      $(".mi-tab[data-id='"+$(this).attr('data-id')+"']").addClass("mi-tab-active");
      $(".mi-tab-a").removeClass('mi-active-a');
      $(this).parent().find(".mi-tab-a").addClass('mi-active-a');
     });
});





$(document).ready(function(){ 
    $('.mi-vertical-tab-a').click(function(){  
      $(".mi-vertical-tab").removeClass('mi-vertical-tab-active');
      $(".mi-vertical-tab[data-id='"+$(this).attr('data-id')+"']").addClass("mi-vertical-tab-active");
      $(".mi-vertical-tab-a").removeClass('mi-vertical-active-a');
      $(this).parent().find(".mi-vertical-tab-a").addClass('mi-vertical-active-a');
     });
});







const mitabs = document.querySelector(".mi-tab");
const tabButton = document.querySelectorAll(".mi-tab-btn");
const mitabcontents = document.querySelectorAll(".mi-tab-content");

mitabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("mi-tab-active");
    });
    e.target.classList.add("mi-tab-active");

    mitabcontents.forEach(content => {
      content.classList.remove("mi-tab-active");
    });
    const element = document.getElementById(id);
    element.classList.add("mi-tab-active");
  }
} 












// Dark Mode Setup
var divdarkMode;
if (localStorage.getItem('div-dark-mode')) {  
  // if dark mode is in storage, set variable with that value
  divdarkMode = localStorage.getItem('div-dark-mode');  
} else {  
  // if dark mode is not in storage, set variable to 'light'
  divdarkMode = 'light';  
}

// set new localStorage value
localStorage.setItem('div-dark-mode', divdarkMode);

if (localStorage.getItem('div-dark-mode') == 'dark') {
  // if the above is 'dark' then apply .dark to the body
  $('.miui-div-dark-mode-ppo').addClass('miui-div-dark-mode-dark');  
  // hide the 'dark' button
  $('.miui-div-dark-mode-dark-button').hide();
  // show the 'light' button
  $('.miui-div-dark-mode-light-button').show();
}

// Toggle dark UI

$('.miui-div-dark-mode-dark-button').on('click', function() {  
  $('.miui-div-dark-mode-dark-button').hide();
  $('.miui-div-dark-mode-light-button').show();
  $('.miui-div-dark-mode-ppo').addClass('miui-div-dark-mode-dark');  
  // set stored value to 'dark'
  localStorage.setItem('div-dark-mode', 'dark');
});

$('.miui-div-dark-mode-light-button').on('click', function() {  
  $('.miui-div-dark-mode-light-button').hide();
  $('.miui-div-dark-mode-dark-button').show();
  $('.miui-div-dark-mode-ppo').removeClass('miui-div-dark-mode-dark');
  // set stored value to 'light'
  localStorage.setItem('div-dark-mode', 'light');   
});

























const bodysetTheme = () => {
  const bodycurrentTheme = localStorage.getItem('theme');
  
  // Default to light theme
  if (!bodycurrentTheme) {
    localStorage.setItem('theme', 'light');
    document.documentElement.dataset.theme = 'light';
    return;
  }
  
  document.documentElement.dataset.theme = bodycurrentTheme;
}

// Set theme on page load
bodysetTheme();

const bodytransition = () => {
  document.documentElement.classList.add('transition');
  
  setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000)
}

// Handle theme toggle
const themeToggleBtn = document.querySelector('.mi-body-toggle-theme');

themeToggleBtn.addEventListener('click', () => {  
  const { theme } = document.documentElement.dataset;
  const themeTo = theme === 'light' ? 'dark' : 'light';
  const themeLabel = `Activate ${theme} mode`;
  
  document.documentElement.dataset.theme = themeTo;
  localStorage.setItem('theme', themeTo);
  
  themeToggleBtn.setAttribute('aria-label', themeLabel);
  themeToggleBtn.setAttribute('title', themeLabel);
  
  bodytransition();
});

























$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#mi-back-to-top').fadeIn(); 
        } else { 
            $('#mi-back-to-top').fadeOut(); 
        } 
    }); 
    $('#mi-back-to-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
















if ($('#mi-back-to-top-slide').length) {
    var miuiscrollTrigger = 100, // px
        miuibackToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > miuiscrollTrigger) {
                $('#mi-back-to-top-slide').addClass('mi-back-to-top-slide-show');
            } else {
                $('#mi-back-to-top-slide').removeClass('mi-back-to-top-slide-show');
            }
        };
    miuibackToTop();
    $(window).on('scroll', function () {
        miuibackToTop();
    });
}
$("#mi-back-to-top-slide").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
 });














var MiAccordionAcc = document.getElementsByClassName("mi-accordion");
var MiAccordionI;
for (MiAccordionI = 0; MiAccordionI < MiAccordionAcc.length; MiAccordionI++) {
  MiAccordionAcc[MiAccordionI].addEventListener("click", function() {
    this.classList.toggle("mi-accordion-active");
    var MiAccordionPanel = this.nextElementSibling;
    if (MiAccordionPanel.style.maxHeight) {
      MiAccordionPanel.style.maxHeight = null;
    } else {
      MiAccordionPanel.style.maxHeight = MiAccordionPanel.scrollHeight + "px";
    } 
  });
}

















/*<![CDATA[*/ 
/* Read Mode */
function MireadMode() {
  localStorage.setItem("miread", "mireadmode" === localStorage.getItem("miread") ? "miunreadmode" : "mireadmode"), "mireadmode" === localStorage.getItem("miread") ? document.querySelector("body").classList.add("mi-reading-mode") : document.querySelector("body").classList.remove("mi-reading-mode")
};
(localStorage.getItem('miread')) === 'mireadmode' ? document.querySelector('body').classList.add('mi-reading-mode'): document.querySelector('body').classList.remove('mi-reading-mode')
/*]]>*/



















  // Main Highlight
  $(function () {
    $("#mi-search-highlight-text-search").bind("keyup change", function () {
      var MiBoxsearchTerm = $(this).val();

      $(".mi-search-highlight-box").removeHighlight();

      if (MiBoxsearchTerm) {
        $(".mi-search-highlight-box").highlight(MiBoxsearchTerm);
      }

      //my-pp-highlight
      if (MiBoxsearchTerm.length > 0) {
        $(".mi-search-highlight-box").each(function (index) {

          $(".mi-search-result-length").html(
            "Total " +
              $(this).find(".mi-search-highlight").length +
              " Result Found."
          );
 
        });
      } else {
        $(".mi-search-result-length").html("");
      }
    });
  });





//<![CDATA[
 (jQuery.fn.highlight = function (a) {
    function b(a, e) {
      var g = 0;

      if (3 == a.nodeType) {
        var h = a.data.toUpperCase().indexOf(e);

        if (h >= 0) {
          var f = document.createElement("span");
          f.className = "mi-search-highlight";

          var c = a.splitText(h);
          c.splitText(e.length);

          var i = c.cloneNode(!0);
          f.appendChild(i), c.parentNode.replaceChild(f, c), (g = 1);
        }
      } else if (
        1 == a.nodeType &&
        a.childNodes &&
        !/(script|style)/i.test(a.tagName)
      )
        for (var d = 0; d < a.childNodes.length; ++d)
          d += b(a.childNodes[d], e);
      return g;
    }

    return this.each(function () {
      b(this, a.toUpperCase());
    });
  }),
    (jQuery.fn.removeHighlight = function () {
      function a(c) {
        for (var d = 0, f = c.childNodes, g = f.length; d < g; d++) {
          var b = f[d];

          if (1 == b.nodeType) {
            a(b);
            continue;
          }

          if (3 == b.nodeType) {
            var e = b.nextSibling;

            if (null != e && 3 == e.nodeType) {
              var h = b.nodeValue + e.nodeValue;

              (new_node = c.ownerDocument.createTextNode(h)),
                c.insertBefore(new_node, b),
                c.removeChild(b),
                c.removeChild(e),
                d--,
                g--;
            }
          }
        }
      }
      return this.find("span.mi-search-highlight")
        .each(function () {
          var b = this.parentNode;

          b.replaceChild(this.firstChild, this), a(b);
        })
        .end();
    });
    
 //]]>























var miFullscreenFact = document.documentElement;
function miopenFullscreen() {
  if (miFullscreenFact.requestFullscreen) {
    miFullscreenFact.requestFullscreen();
  } else if (miFullscreenFact.webkitRequestFullscreen) { /* Safari */
    miFullscreenFact.webkitRequestFullscreen();
  } else if (miFullscreenFact.msRequestFullscreen) { /* IE11 */
    miFullscreenFact.msRequestFullscreen();
  }
}

function micloseFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}































function misearchtable() {
  var miFTinput, miFTfilter, miFTtable, miFTtr, miFTtd, miFTi, miFTtxtValue;
  miFTinput = document.getElementById("myInput");
  miFTfilter = miFTinput.value.toUpperCase();
  miFTtable = document.getElementById("myTable");
  miFTtr = miFTtable.getElementsByTagName("tr");
  for (miFTi = 0; miFTi < miFTtr.length; miFTi++) {
    miFTtd = miFTtr[miFTi].getElementsByTagName("td")[0];
    if (miFTtd) {
      miFTtxtValue = miFTtd.textContent || miFTtd.innerText;
      if (miFTtxtValue.toUpperCase().indexOf(miFTfilter) > -1) {
        miFTtr[miFTi].style.display = "";
      } else {
        miFTtr[miFTi].style.display = "none";
      }
    }       
  }
}



































(function($) {
    $('.mi-accordion-2 > li:eq(0) a').addClass('mi-accordion-2-active').next().slideDown();

    $('.mi-accordion-2 a').click(function(j) {
        var miATwodropDown = $(this).closest('li').find('p');

        $(this).closest('.mi-accordion-2').find('p').not(miATwodropDown).slideUp();

        if ($(this).hasClass('mi-accordion-2-active')) {
            $(this).removeClass('mi-accordion-2-active');
        } else {
            $(this).closest('.mi-accordion-2').find('a.mi-accordion-2-active').removeClass('mi-accordion-2-active');
            $(this).addClass('mi-accordion-2-active');
        }

        miATwodropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);
























$('#show-hide-password').click(function(){
  if(document.getElementById('show-hide-password').checked) {
    $('.mi-show-hide-pass-input').get(0).type = 'text';
  } else {
      $('.mi-show-hide-pass-input').get(0).type = 'password';
  }
});









$("body").on('click', '.toggle-password', function() {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $("#mi-hide-show-password");
  if (input.attr("type") === "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});













