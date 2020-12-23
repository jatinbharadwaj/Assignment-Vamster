var date_of_publication = document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 > div > div.views-field.views-field-nothing > span > span:nth-child(1) > font")[0].innerText

var Object = document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 > div >  div.views-field.views-field-nothing > span > p:nth-child(6) > font")[0].innerText

var BiddingDate = document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 > div >div.views-field.views-field-nothing > span > span:nth-child(19) > font ")[0].innerText

var links = document.querySelectorAll("a")


console.log("Date of Publication:",date_of_publication);
console.log("Object",Object);
console.log("Bidding Date",BiddingDate);

for(let i=0;i<links.length;i++)
{ 
console.log(`Link No${i}`, links[i].href);
}


