console.log("test");

$(() => {

    currentImageIndex = 0
    numOfImages = $(".carousel-images").children().length - 1
    $(".next").on("click", () =>{
        $(".carousel-images").children().eq(currentImageIndex).css("display", "none")
        if (currentImageIndex < numOfImages) {
            currentImageIndex++
        } else {
            currentImageIndex = 0
        }
        $(".carousel-images").children().eq(currentImageIndex).css("display", "block")
    })

    $(".previous").on("click", () => {
        $(".carousel-images").children().eq(currentImageIndex).css("display", "none")
        if (currentImageIndex > 0) {
            currentImageIndex--
        } else {
        currentImageIndex = numOfImages
        }
        $(".carousel-images").children().eq(currentImageIndex).css("display", "block")
    })

});
