const tabButtons = document.querySelectorAll("button");
const tabs = document.querySelectorAll(".tab__content");

function onTabClick(item) {
    item.addEventListener("click", function() {
        let tabId = item.getAttribute("data-tab");
        let currenTab = document.querySelector(tabId);

        if (currenTab.style.display === "" || currenTab.style.display === "none") {
            
            tabButtons.forEach(function(item) {
                item.style.color = "#bfc9de";
            });

            tabs.forEach(function(item) {
                item.style.display = "none";
            });
            
            item.style.color = "#fe520c";
            currenTab.style.display = "flex";
        }
    });
}

tabButtons.forEach(onTabClick);
document.querySelectorAll("button")[1].click();
