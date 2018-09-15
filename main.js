const bandMembers = {
    joey: [
        {name:'Joey', instrument:'vocals', hometown:'Nashville, TN'}
    ],
    tom: [
        {name:'Tom', instrument:'guitar', hometown:'New York, NY'}
    ],
    jim: [
        {name:'Jim', instrument:'drums', hometown:'Austin, TX'}
    ]
};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const membersStringBuilder1 = () => {
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
const membersStringBuilder2 = () => {
    let newString = '';
    for(let i=0; i<bandMembers.tom.length; i++) {
        newString+= `<div class="memberCard">`
        newString+= `<h3>${bandMembers.tom[i].name}</h3>`
        newString+= `<p>${bandMembers.tom[i].instrument}</p>`
        newString+= `<span>${bandMembers.tom[i].hometown}</span>`
        newString+= `</div>`
    }
    printToDom(newString, 'memberInfo2');
  };
const membersStringBuilder3 = () => {
    let newString = '';
    for(let i=0; i<bandMembers.jim.length; i++) {
        newString+= `<div class="memberCard">`
        newString+= `<h3>${bandMembers.jim[i].name}</h3>`
        newString+= `<p>${bandMembers.jim[i].instrument}</p>`
        newString+= `<p>${bandMembers.jim[i].hometown}</p>`
        newString+= `</div>`
    }
    printToDom(newString, 'memberInfo3');
  };

  membersStringBuilder1();
  membersStringBuilder2();
  membersStringBuilder3();
