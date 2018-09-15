let tourSchedule = {
    tourInformation: [
        {date: "September 12th", venue: "Bridgestone Arena", locations:"Nashville,TN", tickets: 'www.ticketmaster.com'},
        {date: "September 13th", venue: "House of Blues", locations:"Chicago, IL", tickets: 'www.ticketmaster.com'},
        {date: "September 14th", venue: "Wells Fargo Center", locations:"Philadelphia, PA", tickets: 'www.ticketmaster.com'},
        {date: "September 15th", venue: "American Airlines Arena", locations:"Miami, FL", tickets: 'www.ticketmaster.com'},
        {date: "September 16th", venue: "Smoothie King Center", locations:"New Orleans, LA", tickets: 'www.ticketmaster.com'},
        {date: "September 17th", venue: "Ryman Auditorium", locations:"Nashville,TN", tickets: 'www.ticketmaster.com'},
        {date: "September 18th", venue: "Toyota Center", locations:"Houston, TX", tickets: 'www.ticketmaster.com'},
        {date: "September 19th", venue: "MGM Grand Garden Arena", locations:"Las Vegas, NV", tickets: 'www.ticketmaster.com'},
        {date: "September 20th", venue: "Staples Center", locations:"Los Angeles, CA", tickets: 'www.ticketmaster.com'},
        {date: "September 21st", venue: "The Forum", locations:"Inglewood, CA", tickets: 'www.ticketmaster.com'},
        {date: "September 22nd", venue: "Gila River Arena", locations:"Glendale, AZ", tickets: 'www.ticketmaster.com'},
        

    ],



};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const tourStringBuilder = () => {
    
    let newString = '';
    for(let i=0; i<tourSchedule.tourInformation.length; i++){
        newString += `<div id="tour">`
        newString += `<h3 class="concert">${tourSchedule.tourInformation[i].date}</h3>`
        newString += `<h3 class="concert">${tourSchedule.tourInformation[i].venue}</h3>`
        newString += `<h3 class="concert">${tourSchedule.tourInformation[i].locations}</h3>`
        newString += `<a href="https://${tourSchedule.tourInformation[i].tickets}" target ="_blank">Tickets</a>`
        newString += `</div>`
    }
    printToDom(newString, "tour")
};

tourStringBuilder();