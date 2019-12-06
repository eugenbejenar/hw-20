function htmlMethod() {
    document.getElementById('resultText').innerHTML = "You clicked First button";
};

document.getElementById('cta2').addEventListener("click", function() {
    document.getElementById('resultText').innerHTML = "You clicked Second button";
});

cta1.onclick = function() {
    document.getElementById('resultText').innerHTML = "You clicked Third button";
};