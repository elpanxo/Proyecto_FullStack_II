function showContent(sectionId){
    document.querySelectorAll("main section").forEach(sec => sec.classList.add("hidden"));

    document.getElementById(sectionId).classList.remove("hidden");
}