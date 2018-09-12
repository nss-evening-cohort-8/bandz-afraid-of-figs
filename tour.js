let tourSchedule = {
    schedule: [
      {date: "September 12th", venue: "Bridgestone Arena", city: "Nashville, TN"},
      {date: "September 12th", venue: "Bridgestone Arena", city: "Nashville, TN"}   
    ],
};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;

};

const tourStringBuilder = () => {
    let newString = '';
    for(let i=0; i<tourSchedule.schedule.length; i++){
        newString += `<div id="tour">`
        newString += `<h4>${tourSchedule.schedule[i].date}</h4>`
        newString += `<h4>${tourSchedule.schedule[i].time}</h4>`
        newString += `<h4>${tourSchedule.schedule[i].venue}</h4>`
        newString += `<h4>${tourSchedule.schedule[i].city}</h4>`
        newString += `</div>`
    }
    printToDom(newString, "tour");
};

tourStringBuilder();





// tourStringBuilder();