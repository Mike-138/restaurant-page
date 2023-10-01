import "./style.css";
import Icon from "./food.svg";

const base = (() => {

    const header = document.createElement("header");

    const nav = document.createElement("nav");

    const main = document.createElement("main");

    const makeDiv = () => document.createElement("div");

    const contentContainer = (() => {

        const container = makeDiv();
        container.id = "content";
        return container;

    })();

    return {  header, nav, main, contentContainer, makeDiv };

})();

const navBar = (() => {

    const _iconTab = (() => {
        const container = base.makeDiv();
        const icon = new Image();
        icon.src = Icon;
        container.appendChild(icon);
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

    const render = () => {
        base.nav.append(_iconTab, _menuTab, _contactTab);
        base.header.appendChild(base.nav);
        document.body.appendChild(base.header);
    }

    return { render };

})();

const landingPage = (() => {

    const render = () => {
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