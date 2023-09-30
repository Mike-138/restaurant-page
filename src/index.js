const displayController = (() => {

    const _component = () => document.createElement("div");
    
    const contentContainer = (() => {
        const container = _component();
        container.id = "content";
        return container;
    })();

})();

document.body.appendChild(contentContainer);