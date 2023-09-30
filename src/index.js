const base = (() => {

    const component = () => document.createElement("div");

    return { component };

})();

const landingPage = (() => {

    return;

})();

const menuPage = (() => {

    return;

})();

const contactPage = (() => {

    return;

})();

const displayController = (() => {
    
    const contentContainer = (() => {
        const container = base.component();
        container.id = "content";
        return container;
    })();

})();

document.body.appendChild(contentContainer);