let newimg = ["https://repskiller.org/wp-content/uploads/2023/10/Balenciaga-Runner-Nylon-Grey-3webp24.webp, https://repskiller.org/wp-content/uploads/2023/08/Balenciaga-Triple-s-Nylon-Black-4.webp, https://repskiller.org/wp-content/uploads/2023/08/Blenciaga-Runner-Blue-White-8.webp"]
let oldimg = ["https://s3.amazonaws.com/img.repskiller.co/wp-content/uploads/2023/10/28094520/Balenciaga-Runner-Nylon-Grey-2webp23.webp", "https://s3.amazonaws.com/img.repskiller.co/wp-content/uploads/2023/08/28143659/Balenciaga-Triple-s-Nylon-Black-6.webp", "https://s3.amazonaws.com/img.repskiller.co/wp-content/uploads/2023/08/28145822/Blenciaga-Runner-Blue-White-1.webp"]

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
