menuListArray = ["Pizza Vegetariana",
                  "Pizza de frango",
                  "Pizza de Calabresa",
                  "Pizza Portuguesa",
                  "Pizza Marguerita",
                  "Pizza Quatro queijos"
                  "Pizza de chocolate"  ];

function getMenu(){
var htmldata;
menuListArray.sort();
for(var i=0;i<menuListArray;i++){
     htmldata=htmldata+ menuListArray[i] +    "<br>"
    }
document.getElementById("displayMenu").innerHTML = htmldata
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
var imgtags= "<img id= im1 src="images/pizzaImg.png"/>"
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+"<br>";

}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.punsh(item);
addItem();
}