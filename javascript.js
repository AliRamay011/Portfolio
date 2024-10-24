function openCity(evt, cityName,buttonId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
      
  const toggleButton =document.getElementById('show')
  const content =document.getElementById('navbarSupportedContent')
  toggleButton.addEventListener('click', function() {
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } 
    else{
      content.style.display ='block'
    }
});