appList = [
    {
        img: "/img/apps/1.png",
        name: "Fitbit",
        category: "Activity Trackers",
    },
    {
        img: "/img/apps/2.png",
        name: "Garmin Connect",
        category: "Activity Trackers",
        tag: "featured",
    },
    {
        img: "/img/apps/3.png",
        name: "MapMyFitness",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/4.png",
        name: "MapMyWalk",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/5.png",
        name: "MapMyRide",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/6.png",
        name: "MapMyRun",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/7.png",
        name: "Withings Health Mate",
        category: "Activity Trackers",
        tag: "featured",
    },
    {
        img: "/img/apps/8.png",
        name: "Strava",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/9.png",
        name: "RunKeeper",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/10.png",
        name: "Runtastic",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/11.png",
        name: "Polar Flow",
        category: "Activity Trackers",
        tag: "featured",
    },
    {
        img: "/img/apps/12.png",
        name: "xID",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/13.png",
        name: "TrainingPeaks",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/14.png",
        name: "Misfit",
        category: "Activity Trackers",
    },
    {
        img: "/img/apps/15.png",
        name: "Glow",
        category: "Fertility",
    },
    {
        img: "/img/apps/16.png",
        name: "Accupedo Pedometer",
        category: "Accupedo",
    },
    {
        img: "/img/apps/17.png",
        name: "Walkmeter",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/18.png",
        name: "Runmeter",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/19.png",
        name: "Cyclemeter",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/20.png",
        name: "Digifit",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/21.png",
        name: "LFconnect",
        category: "Exercise Equipment",
    },
    {
        img: "/img/apps/22.png",
        name: "RunDouble C25K",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/23.png",
        name: "Wahoo Balance Scale",
        tag: "featured",
        category: "Scales",
    },
    {
        img: "/img/apps/24.png",
        name: "Expresso Exercise Bike",
        category: "Exercise Equipment",
        tag: "featured",
    },
    {
        img: "/img/apps/25.png",
        name: "5K Runmeter",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/26.png",
        name: "Sworkit - Circuit Training",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/27.png",
        name: "FINIS Swimsense",
        category: "Wearables",
        tag: "featured",
    },
    {
        img: "/img/apps/28.png",
        name: "RHYTHM+ Heart Rate Monitor",
        category: "Wearables",
    },
    {
        img: "/img/apps/29.png",
        name: "Tictrac",
        category: "Lifestyle"
    },
    {
        img: "/img/apps/30.png",
        name: "Goji Play",
        category: "Wearables",
        tag: "featured",
    },
    {
        img: "/img/apps/31.png",
        name: "Boot Camp Challenge",
        category: "Fitness Apps",
    },
    {
        img: "/img/apps/32.png",
        name: "C25K - 5K Trainer",
        category: "Fitness Apps",
        tag: "featured",
    },
    {
        img: "/img/apps/33.png",
        name: "Wahoo RFLKT",
        category: "Wearables"
    },
    {
        img: "/img/apps/34.png",
        name: "Wahoo TICKR",
        category: "Wearables"
    },
    {
        img: "/img/apps/35.png",
        name: "PEAR Sports Training Intelligence",
        category: "Fitness Apps"
    },
    {
        img: "/img/apps/36.png",
        name: "FitStar",
        category: "Fitness Apps"
    },
    {
        img: "/img/apps/37.png",
        name: "Fitstar Yoga",
        category: "Fitness Apps"
    },
    {
        img: "/img/apps/38.png",
        name: "qardio",
        category: "Scales"
    },
    {
        img: "/img/apps/39.png",
        name: "VeSync",
        category: "Fitness Apps"
    }
]

let sliderImg = [
    'img/app-page/1.png',
    'img/app-page/2.png',
    'img/app-page/3.png',
    'img/app-page/4.jpeg',
    'img/app-page/5.png',
    'img/app-page/6.png',
    'img/app-page/7.png'
]

let leftBtn = document.querySelector("#left-btn");
let rightBtn = document.querySelector("#right-btn");
let images = document.querySelector("#slider-image");

let sliderState = 0;

rightBtn.addEventListener("click", function () {
    sliderState++;
    if (sliderState == sliderImg.length) {
        sliderState = 0;
    }
    images.src = sliderImg[sliderState];
})

leftBtn.addEventListener("click", function () {
    sliderState--;
    if (sliderState < 0) {
        sliderState = sliderImg.length - 1;
    }
    images.src = sliderImg[sliderState];
})

// Featured App

let featured = [];


appList.map(function (ele) {

    if (ele.tag == "featured") {

        let box = document.createElement("div");
        let details = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.img;
        let name = document.createElement("p");
        name.innerText = ele.name;
        let category = document.createElement("p");
        category.innerText = ele.category;
        let button = document.createElement("button");
        button.innerText = "GET";

        details.append(name, category, button);
        box.append(img, details);
        document.querySelector("#fApp-grid").append(box);

    }
});
appList.map(function (ele) {

    let box = document.createElement("div");
    let details = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.img;
    let name = document.createElement("p");
    name.innerText = ele.name;
    let category = document.createElement("p");
    let button = document.createElement("button");
    button.innerText = "GET";

    details.append(name, category, button);
    box.append(img, details);
    document.querySelector("#allApp-grid").append(box);

});









