var date_of_publication = document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(1) > font > font")[0].innerText

var Object = document.querySelectorAll("document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > p:nth-child(6) > font > font")[0].innerText")

var BiddingDate = document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(19) > font > font")[0].innerText

var links = document.querySelectorAll("a")


console.log(date_of_publication);
console.log(Object);
console.log(BiddingDate);

for(let i=0;i<links.length;i++)
{ 
console.log(links[i].href)
}



