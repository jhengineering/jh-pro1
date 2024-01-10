// lang

function changeLanguage() {
    var language = document.getElementById("language").value;
    if (language == "en") {
      // Change to English
        window.location.href = "/index.html";
    }else if (language == "es") {
      // Change to Español
        window.location.href = "public/es/index.html";
    }else if (language == "ge") {
        // Change to Germany
        window.location.href = "public/ge/index.html";
    }else if (language == "fr") {
      // Change to Français
        window.location.href = "public/fr/index.html";
    }
      
  }
  
  
