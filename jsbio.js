console.log("test");

$(() => {
    const $openBtn = $("#open-resume")
    const $modal = $("#modal")
    const $closeBtn = $("#close-resume")


    const openResume = () => {
        $modal.css("display", "block")
    }

    const closeResume = () => {
        $modal.css("display", "none")
    }

    $openBtn.on("click", openResume)
    $closeBtn.on("click", closeResume)

    // const $download = $("#download-resume")

    // $download.on("click", )


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


        // $(".proj-1").on("click"), () =>  {
        //     figure out how to open project into $modal, once project completed.. lol
        // or just create new page to house it
        // }



    })

});
