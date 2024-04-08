var count = 0;

//It loops just becuase I can't find a way to make it work otherwise
function ageCalc(){
    setTimeout(function() {
        count++;
        var dateVar = new Date();
        var text;

        if(dateVar.getMonth() < 11)
            text = (dateVar.getFullYear() - 2005) - 1;
        else
            text = dateVar.getFullYear() - 2005;

        document.getElementById('age').textContent = "I'm " + text + " years old.";

        if(count == 5)
            return;
    }, 100);
}