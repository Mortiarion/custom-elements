const swipeMenu = document.querySelector(".swipe-menu");

swipeMenu.addEventListener("wheel", function (event) {
    event.preventDefault();
    swipeMenu.scrollLeft += event.deltaY;
});

swipeMenu.addEventListener("mousedown", function (event) {
    if (event.button === 0) {
        event.preventDefault();
        const startX = event.clientX;
        const scrollLeft = swipeMenu.scrollLeft;

        function onMouseMove(moveEvent) {
            const delta = moveEvent.clientX - startX;
            swipeMenu.scrollLeft = scrollLeft - delta;
        }

        function onMouseUp() {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    }
});
