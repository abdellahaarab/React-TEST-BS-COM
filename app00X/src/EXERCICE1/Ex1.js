
const tableau = ["alami","idrissi","karimi","bejelloun","essalmi","hamdi"]


// EX1 - A
    function afficher(ptb){
            tb = ptb.reverse()
            for (let i = 0; i < tb.length; i++) {
                const element = tb[i];
                console.log(element)
            }
        }

// EX1 - B
function inserer(p_Value,index){
    for (let i = 0; i < tableau.length; i++) {
        if(i === index){
            tableau[i]=p_Value
        }  
    }
    console.log(tableau)
}




// apple
// afficher(tableau)
inserer("ABAB",2)