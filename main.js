function hideTabContent() {
    // set up vars
    var i, tabcontent, tablinks;

    // Sets default CSS style --> display: none;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks"); // returns list of elems of properties with class tablinks
    //  console.log(tablinks)

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
}

function openCity(evt, cityName) {
    // Hide all of the other lessons
    hideTabContent()

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}