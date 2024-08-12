let newimg = ["https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/059/084/573/original/767449_03.jpg.jpeg?action=crop&width=600", "https://repskiller.org/wp-content/uploads/2023/03/travis-scottxair-jordan-1-low-og-sp-black-phantom-replica-9.webp", "https://repskiller.org/wp-content/uploads/2023/03/travis-scott-x-air-jordan-1-retro-high-og-mocha-replica-5-1.webp"]
let oldimg = ["https://s3.amazonaws.com/img.repskiller.co/wp-content/uploads/2023/03/28215635/AJ1-46.webp", "https://s3.amazonaws.com/img.repskiller.co/wp-content/uploads/2023/03/28215900/AJ1-1.webp", "https://s3.amazonaws.com/img.repskiller.co/wp-content/uploads/2023/03/28205142/travis-scott-x-air-jordan-1-retro-high-og-mocha-replica-.webp"]

let imageElements = document.querySelectorAll(".card-img-top")
console.log(imageElements)

for (let i = 0; i < imageElements.length; i++) {
        imageElements[i].addEventListener("mouseover", function(event){
        console.log(i)
        imageElements[i].src = newimg[i]
})	
}



for (let i = 0; i < imageElements.length; i++) {
        imageElements[i].addEventListener("mouseout", function(event){
        imageElements[i].src = oldimg[i]
})	
}
