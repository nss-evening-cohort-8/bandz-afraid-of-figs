let tourSchedule = {
    schedule: [
      {date: "September 12th", time: "7:00 pm" , venue: "Bridgestone Arena" , city: "Nashville, TN", tickets: 'www.ticketmaster.com'}  
    ]
}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;

};

const tourStringBuilder = () => {
    let newString = '';
    for(let i=0; i<tourSchedule.lenght; i++){
        newString += `div class="tour">`
        newString += `<h4>${tourSchedule.shedule[i].date}</h4>`
        newString += `<h4>${tourSchedule.shedule[i].time}</h4>`
        newString += `<h4>${tourSchedule.shedule[i].venue}</h4>`
        newString += `<h4>${tourSchedule.shedule[i].city}</h4>`
        newString += `<h4>${tourSchedule.shedule[i].tickets}</h4>`
        newString += `</div>`
    }
    printToDom(newString, 'tour');
}