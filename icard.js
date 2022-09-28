




$('.form-inline').on('input',function() {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var fnVal = 'FN%3A'+firstName+'+'+lastName+'%0A';
    var nVal = 'N%3A'+lastName+'%3B'+firstName+'%0A';  
    var posTitle = $('#posTitle').val();
    var posTitleVal = 'TITLE%3A'+posTitle+'%0A';  
    var phoneMobile = $('#phoneMobile').val();
    var phoneMobileVal = 'TEL%3BCELL%3A'+phoneMobile+'%0A';
    var phoneBusiness = $('#phoneBusiness').val();
    var phoneBusinessVal = 'TEL%3BWORK%3BVOICE%3A'+phoneBusiness+'%0A';
    var phonePersonal = $('#phonePersonal').val();
    var phonePersonalVal = 'TEL%3BHOME%3BVOICE%3A'+phonePersonal+'%0A';  
    var emailPersonal = $('#emailPersonal').val();
    var emailPersonalVal = 'EMAIL%3BHOME%3BINTERNET%3A'+emailPersonal+'%0A';
    var emailBusiness = $('#emailBusiness').val();
    var emailBusinessVal = 'EMAIL%3BWORK%3BINTERNET%3A'+emailBusiness+'%0A';  
    var website = $('#website').val();  
    var websiteVal = 'URL%3A'+website+'%0A';   
    var addyStreet = $('#addyStreet').val();
    var addyStreetVal = addyStreet+'%3B';
    var addyCity = $('#addyCity').val();
    var addyCityVal = addyCity+'%3B';
    var addyState = $('#addyState').val();
    var addyStateVal = addyState+'%3B';
    var addyZip = $('#addyZip').val();
    var addyZipVal = addyZip+'%3B';
    var addyCountry = $('#addyCountry').val();  
    var adrVal = 'ADR%3A%3B%3B'+addyStreetVal+addyCityVal+addyStateVal+addyZipVal+addyCountry+'%0A';  
    var coName = $('#coName').val();
    var coNameVal = 'ORG%3A'+coName+'%0A';  
    var qrUrlStart = 'https://api.qrserver.com/v1/create-qr-code/?data=BEGIN%3AVCARD%0AVERSION%3A2.1%0A';
    var qrUrlEnd = 'END%3AVCARD%0A';  
    var qrURL = qrUrlStart + fnVal + nVal + posTitleVal + phoneMobileVal + phoneBusinessVal + phonePersonalVal + emailPersonalVal + emailBusinessVal + websiteVal + adrVal + coNameVal + qrUrlEnd;  
    $('.qr-img').attr('src',qrURL);  
    $('.biscard-out').html('<div class="biscard-img"><h3>'+firstName+' '+lastName+'</h3><div>'+posTitle+' | '+coName+'</div><div class="phone">w: <a href="tel:+1-'+phoneBusiness+'">'+phoneBusiness+'</a> | c: <a href="tel:+1-'+phoneMobile+'">'+phoneMobile+'</a></div><div class="email"><a href="mailto:'+emailBusiness+'">'+emailBusiness+'</a></div></div>');
  });



// document.querySelector("#btnpreveiw").addEventListener("click", myFunction);
// function myFunction() {
//     const elm= document.querySelector(".convert");
//     let getCanvas;
//     document.getElementById("btnpreveiw").addEventListener('click',(e)=>{
//     html2canvas(elm,{onrendered:function(canvas) {
//     document.querySelector(".result").append(canvas);
//     getCanvas = canvas;
// }
//     });
// });
    
//   }


 
 