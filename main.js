const bandMembers = {
    joey: [
        {name:'Joey', instrument:'vocals', hometown:'Nashville, TN'}
    ],
    tom: [
        {name:'Tom', instrument:'guitar', hometown:'Kansas City, MO'}
    ],
    jim: [
        {name:'Jim', instrument:'drums', hometown:'Sacramento, CA'}
    ]
};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const membersStringBuilder = () => {
    let newString = '';
    for(let i=0; i<bandMembers.joey.length; i++) {
        newString+= `<div class="memberCard">`
        newString+= `<h3>${bandMembers.joey[i].name}</h3>`
        newString+= `<p>${bandMembers.joey[i].instrument}</p>`
        newString+= `<p>${bandMembers.joey[i].hometown}</p>`
        newString+= `</div>`
    }
    printToDom(newString, 'memberInfo1');
  };

  membersStringBuilder();
