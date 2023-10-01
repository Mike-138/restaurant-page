import "./style.css";
import Icon from "./food.svg";

const base = (() => {

    const header = document.createElement("header");

    const nav = document.createElement("nav");

    const main = document.createElement("main");

    const makeDiv = () => document.createElement("div");

    const makeHeader = () => document.createElement("h1");

    const contentContainer = (() => {

        const container = makeDiv();
        container.id = "content";
        return container;

    })();

    return {  header, nav, main, contentContainer, makeDiv, makeHeader };

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
        container.textContent = "Welcome to The Food Truck!";
        return container;
    })();

    const _truckImage = (() => {
        const container = base.makeDiv();
        const image = new Image();
        image.src = Icon; // placeholder
        container.appendChild(image);
        return container;
    })();

    const _landingDescription = (() => {
        const container = base.makeDiv();
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

    const render = () => {
        base.contentContainer.append(_landingTitle, _truckImage, _landingDescription);
        base.main.appendChild(base.contentContainer);
        document.body.appendChild(base.main);
    }

    return { render };

})();

const menuPage = (() => {

    return;

})();

const contactPage = (() => {

    return;

})();

const displayController = (() => {

    const render = () => {
        navBar.render();
        landingPage.render();
    }

    return { render };

})();

displayController.render();