function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById("bill").value;
    let serviceQual = document.getElementById("serviceQual").value;
    let numOfPeople = document.getElementById("people").value;
    
    if (bill == "   " | serviceQual == 0) {
        alert('Por favor, Preencha os valores !')
        return;
    }

    if(numOfPeople = "   " | numOfPeople <= 1){
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    let totalTip = (bill * serviceQual) / numOfPeople;
    totalTip = totalTip.toFixed(3);
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("tipsForm").addEventListerner('submit', calculateTip);