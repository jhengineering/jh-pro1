//selang

var language = localStorage.getItem("language");
if (language) {
    document.getElementById("language").value = language;
}
document.getElementById("language").addEventListener("change", function () {
    localStorage.setItem("language", this.value);
    changeLanguage();
});