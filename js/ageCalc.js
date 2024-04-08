//It loops just becuase I can't find a way to make it work otherwise
function ageCalc(){
    setTimeout(function() {
        var dateVar = new Date();
        var text;

        if(dateVar.getMonth() < 11)
            text = (dateVar.getFullYear() - 2005) - 1;
        else
            text = dateVar.getFullYear() - 2005;

        document.getElementById('age').textContent = "I'm " + text + " years old.";
    }, 100);
}