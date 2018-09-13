let tourSchedule = {
    tourInformation: [
        {date: "September 12th", venue: "Bridgestone Arena", location:"Nashville,TN", tickets: ' www.ticketmaster.com'},
        


    ],



};

const writeToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const tourStringBuilder = () => {
    
    let newString = '';
    for(let i=0; i<tourSchedule.tourInformation.length; i++){
        newString += `<div id="tour">`
        newString += `<h3>${tourSchedule.tourInformation[i].date}</h3>`
        newString += `<h3>${tourSchedule.tourInformation[i].venue}</h3>`
        newString += `<h3>${tourSchedule.tourInformation[i].location}</h3>`
        newString += `<a href="https://${tourSchedule.tourInformation.tickets}" target="_blank">Tickets</a>`
        newString += `</div>`
    }
    writeToDom(newString, "tour")
};

tourStringBuilder();