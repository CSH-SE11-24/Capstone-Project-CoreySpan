let newimg = ["https://repskiller.org/wp-content/uploads/2023/04/2webp2-2.webp, https://repskiller.org/wp-content/uploads/2023/04/2webp2.webp, https://repskiller.org/wp-content/uploads/2023/04/2webp3.webp"]
let oldimg = ["https://s3.amazonaws.com/img.repskiller.co/wp-content/uploads/2023/04/28211714/1443.webp", "https://s3.amazonaws.com/img.repskiller.co/wp-content/uploads/2023/04/28211706/1121.webp", "https://s3.amazonaws.com/img.repskiller.co/wp-content/uploads/2023/04/28211717/773.webp"]

let imageElements = document.querySelectorAll(".card-img-top")


for (let i = 0; i < imageElements.length; i++) {
        imageElements[i].addEventListener("mouseover", function(event){
        imageElements[i].src = newimg[i]
})	
}


for (let i = 0; i < imageElements.length; i++) {
        imageElements[i].addEventListener("mouseover", function(event){
        imageElements[i].src = oldimg[i]
})	
}
