    const imgBox = document.querySelector(".imgBox")
    const btnPrev = document.querySelector(".btnPrev")
    const btnNext = document.querySelector(".btnNext")

    const imgTotal = 7;
    const realImgCount = 5;

    let count =1;
    const imgSize =100 / imgTotal;

    imgBox.style.transition = "none"
    imgBox.style.transform = `translateX(${-imgSize * count}%)`;

    function prevImg(){
        count--;

        imgBox.style.transition = "transform 0.5s ease-in-out";
        imgBox.style.transform = `translateX(${-imgSize * count}%)`;        
    }   
    function nextImg(){
        count++;

        imgBox.style.transition = "transform 0.5s ease-in-out";
        imgBox.style.transform = `translateX(${-imgSize * count}%)`;
    }

    function fixloop(){
        if(count === imgTotal - 1){
        count = 1;

        imgBox.style.transition="none";
        imgBox.style.transform=`translateX(${-imgSize * count}%)`;
            }
        if(count === 0){
            count = realImgCount;
            imgBox.style.transition="none";
            imgBox.style.transform=`translateX(${-imgSize * count}%)`;
            }
    }

    setInterval(nextImg, 10000)