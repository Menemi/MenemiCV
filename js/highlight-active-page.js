function handleLocationChange(location) {
    let element = document.querySelectorAll(".tab");
    const homePage = "MenemiCV/";
    const partUrl = `${document.location.protocol}//${document.location.host}/`

    if (location.replace(partUrl, "") === homePage) {
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