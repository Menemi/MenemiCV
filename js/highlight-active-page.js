function handleLocationChange(location) {
    let element = document.querySelectorAll(".tab");

    for (let i = 0; i < element.length; i++) {
        if (location === element[i].href) {
            element[i].classList.add("active");
        }
    }
}

document.addEventListener("DOMContentLoaded",
    () => handleLocationChange(document.location.href));