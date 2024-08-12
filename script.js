console.log("Script running...");

let dropdown = document.querySelectorAll(".accordion-header");

dropdown.forEach(dropdown => {
  dropdown.addEventListener("mouseover", function(event){
    console.log("mouseover")
  dropdown.style.color = "red";
})


dropdown.addEventListener("mouseout", function(event){
dropdown.style.color = "grey";
})
  }); 
//Dropdown buttons(Description, Location, Hours)turn from grey to red


let body = document.querySelector(".accordion-body")

body.addEventListener("click",function(event){
body.style.fontSize = "150%";
}); 
//Makes the dropdown text bigger, Accessibilty

let jordan = document.querySelector("#jor")

  for (let i = 0; i < jordan.length; i++) {
      jordan[i].addEventListener("mouseover", function(event){
    jordan[i].src = "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/059/084/573/original/767449_03.jpg.jpeg?action=crop&width=600"
  })	
  }



  for (let i = 0; i < jordan.length; i++) {
      jordan[i].addEventListener("mouseout", function(event){
    jordan[i].src = "https://s3.amazonaws.com/img.repskiller.co/wp-content/uploads/2023/03/28215635/AJ1-46.webp"

  })	
  }

let balanciaga = document.querySelector("#bal")

for (let i = 0; i < balanciaga.length; i++) {
      balenciaga[i].addEventListener("mouseover", function(event){
      balenciaga[i].src = "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/042/251/528/original/534217_W2CA1_1000.png.png?action=crop&width=600"
})	
}



for (let i = 0; i < balanciaga.length; i++) {
        balenciaga[i].addEventListener("mouseout", function(event){
      balenciaga[i].src = "https://s3.amazonaws.com/img.repskiller.co/wp-content/uploads/2023/08/28143659/Balenciaga-Triple-s-Nylon-Black-6.webp"

})	
}

let lanvins = document.querySelector("#lan")

for (let i = 0; i < lanvins.length; i++) {
        lanvins[i].addEventListener("mouseover", function(event){
        lanvins[i].src = "https://repskiller.org/wp-content/uploads/2023/04/2webp2-2.webp"
})	
}



for (let i = 0; i < lanvins.length; i++) {
          lanvins[i].addEventListener("mouseout", function(event){
        lanvins[i].src = "https://s3.amazonaws.com/img.repskiller.co/wp-content/uploads/2023/04/28211714/1443.webp"

})	
}

//Changes the image when hovering over it