document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button')
        .addEventListener('click', main);
});
 
function main() {
    chrome.tabs.executeScript(null, {
        file: "gpa_calc.js"
    });
};
