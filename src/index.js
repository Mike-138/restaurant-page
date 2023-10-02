import "./style.css";
import Icon from "./food.svg";

const base = (() => {

    const header = document.createElement("header");

    const nav = document.createElement("nav");

    const main = document.createElement("main");

    const makeDiv = () => document.createElement("div");

    const makeHeader = () => document.createElement("h1");

    const makePara = () => document.createElement("p");

    const contentContainer = (() => {

        const container = makeDiv();
        container.id = "content";
        return container;

    })();

    return {  header, nav, main, contentContainer, makeDiv, makeHeader, makePara };

})();

const navBar = (() => {

    const _navIcon = (() => {
        const container = base.makeDiv();
        container.classList.add("nav-icon");
        const icon = new Image();
        icon.src = Icon;
        container.appendChild(icon);
        return container;
    })();

    const _navTitle = (() => {
        const container = base.makeHeader();
        container.classList.add("nav-title");
        container.textContent = "The Food Truck";
        return container;
    })();

    const _menuTab = (() => {
        const container = base.makeDiv();
        container.textContent = "Menu";
        return container;
    })();

    const _contactTab = (() => {
        const container = base.makeDiv();
        container.textContent = "Contact";
        return container;
    })();

    const _navContainer = (() => {
        const container = base.makeDiv();
        container.classList.add("nav-buttons");
        container.append(_menuTab, _contactTab);
        return container;
    })();

    const render = () => {
        base.nav.append(_navIcon, _navTitle, _navContainer);
        base.header.appendChild(base.nav);
        document.body.appendChild(base.header);
    }

    return { render };

})();

const landingPage = (() => {

    const _landingTitle = (() => {
        const container = base.makeHeader();
        container.classList.add("landing-title");
        container.textContent = "Welcome to The Food Truck!";
        return container;
    })();

    const _truckImage = (() => {
        const container = base.makeDiv();
        container.classList.add("landing-image");
        const image = new Image();
        image.src = Icon; // placeholder
        container.appendChild(image);
        return container;
    })();

    const _landingDescription = (() => {
        const container = base.makePara();
        container.classList.add("landing-description");
        container.textContent = (
            `The Food Truck has been delivering delish Western pub food to its patrons since 1922.
            Specializing in hot dogs and hamburgers, our manipulation of beef and pork product to create
            masterful food creations has led to over a century of pleasure amonst our fans. Come try our
            Glizzy Dog or GigaBurger today, and you'll see that we are more than just hype. We welcome all people
            from all backgrounds at our truck, and should you impress us by devouring our Giga Googa Combo in under
            12 minutes, we will put you on our Wall of Fame! Visit The Food Truck today!`
        );
        return container;
    })();

    const _landingContainer = (() => {
        const container = base.makeDiv();
        container.classList.add("landing-container");
        container.append(_landingTitle, _truckImage, _landingDescription);
        return container;
    })();

    const render = () => {
        base.contentContainer.append(_landingContainer);
        base.main.appendChild(base.contentContainer);
        document.body.appendChild(base.main);
    }

    return { render };

})();

const menuPage = (() => {

    return;

})();

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
        const container = base.Para();
        container.classList.add("contact-email-prompt");
        container.textContent = "Or email us at:";
        return container;
    })();

    const _contactEmail = (() => {
        const container = base.makeHeader();
        container.classList.add("contact-email");
        container.textContent = "datruck@food.com";
        return container;
    })();

    const _contactContainer = (() => {
        const container = base.makeDiv();
        container.classList.add("contact-container");
        container.append(_contactNumberPrompt, _contactNumber, _contactEmailPrompt, _contactEmail);
        return container;
    })();

    const render = () => {
        base.contentContainer.append(_contactContainer);
        base.main.appendChild(base.contentContainer);
        document.body.appendChild(base.main);
    }

    return { render };

})();

const displayController = (() => {

    const render = () => {
        navBar.render();
        landingPage.render();
    }

    return { render };

})();

displayController.render();