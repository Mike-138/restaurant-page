const contactPage = (() => {

    const _contactNumberPrompt = (() => {
        const container = base.makeHeader();
        container.classList.add("contact-number-prompt");
        container.textContent = "Give us a call at:";
        return container;
    })();

    const _contactNumber = (() => {
        const container = base.makeHeader();
        container.classList.add("contact-number");
        container.textContent = "000-000-0000";
        return container;
    })();

    const _contactEmailPrompt = (() => {
        const container = base.makePara();
        container.classList.add("contact-email-prompt");
        container.textContent = "Or email us at:";
        return container;
    })();

    const _contactEmail = (() => {
        const container = base.makePara();
        container.classList.add("contact-email");
        container.textContent = "datruck@food.com";
        return container;
    })();

    const _contactGrid = (() => {
        const container = base.makeDiv();
        container.classList.add("contact-grid");
        container.append(_contactNumberPrompt, _contactNumber, _contactEmailPrompt, _contactEmail);
        return container;
    })();

    const _contactContainer = (() => {
        const container = base.makeDiv();
        container.classList.add("contact-container");
        container.append(_contactGrid);
        return container;
    })();

    const render = () => {
        base.contentContainer.replaceChildren(_contactContainer);
    }

    return { render };

})();