var date_of_publication = document.querySelectorAll("div.views-field.views-field-nothing > span > span:nth-child(1) > font > font")[0].innerText

var Object = document.querySelectorAll('div.views-field.views-field-nothing > span > p:nth-child(6) > font')[0].innerText

var BiddingDate = document.querySelectorAll("div.views-field.views-field-nothing > span:nth-child(1) > span > font ")[3].innerText
var links = document.querySelectorAll('td > div:nth-child(1) a')


console.log("Date of Publication:",date_of_publication);
console.log("Object: ",Object);
console.log("Bidding Date:",BiddingDate);

for(let i=0;i<links.length;i++)
{ 
	console.log(`Link ${i}:`, links[i].href);
}



