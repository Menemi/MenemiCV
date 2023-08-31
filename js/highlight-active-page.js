function handleLocationChange(location) {
    let element = document.querySelectorAll(".tab");
    const homePage = "MenemiCV/";

    if (location.replace(document.location.protocol, "").replace(document.location.host, "").replace("///", "") === homePage) {
        element[0].classList.add("active");
        return;
    }

    for (let i = 0; i < element.length; i++) {
        if (location === element[i].href) {
            element[i].classList.add("active");
        }
    }
}

document.addEventListener("DOMContentLoaded",
    () => handleLocationChange(document.location.href));