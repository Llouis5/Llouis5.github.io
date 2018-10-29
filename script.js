function greet(){
    window.alert("The best flowers are peonies!\nClick ok to get redirected to images of peony");
    window.open("https://www.google.pl/search?q=peony&rlz=1C1CHBD_frFR794FR795&source=lnms&tbm=isch&sa=X&ved=0ahUKEwig0Z7EpareAhUohaYKHYaKDUwQ_AUIDigB&biw=958&bih=959");
}

function init()
{
    document.getElementById("task1").src = "Icons/flower2.png";
    let images = document.getElementById("task2").getElementsByTagName("img");
    images[1].src = "Icons/flower2.png";
    images[3].src = "Icons/flower2.png";
    document.getElementById("task3").innerHTML = "<div><p>Your are doing great!</p></div>";
    let image = document.createElement("img");
    image.setAttribute("src", "Icons/flower2.png");
    document.getElementById("task4").appendChild(image);
    let spans = document.getElementById("rainbow").getElementsByTagName("span");
    let colors = ["red", "orange","yellow","green","blue","purple","pink"];

    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i];
}

}