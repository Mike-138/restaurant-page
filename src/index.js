const component = () => {
    const element = document.createElement("div");
    element.innerHTML = "Hello webpack";
    return element;
}

const contentContainer = (() => {
    const container = document.createElement("div");
    container.id = "content";
    return container;
})();

document.body.appendChild(contentContainer);