import { nav, makeDiv, makeHeader } from "./base.js";
import Icon from "../assets/images/food.svg";


const navIcon = (() => {
    const container = makeDiv();
    container.classList.add("nav-icon");
    const icon = new Image();
    icon.src = Icon;
    container.appendChild(icon);
    return container;
})();

const _navTitle = (() => {
    const container = makeHeader();
    container.classList.add("nav-title");
    container.textContent = "The Food Truck";
    return container;
})();

const menuTab = (() => {
    const container = makeDiv();
    container.textContent = "Menu";
    return container;
})();

const contactTab = (() => {
    const container = makeDiv();
    container.textContent = "Contact";
    return container;
})();

const _navButtons = (() => {
    const container = makeDiv();
    container.classList.add("nav-buttons");
    container.append(menuTab, contactTab);
    return container;
})();

const renderNav = () => {
    nav.append(navIcon, _navTitle, _navButtons);
}

export { navIcon, menuTab, contactTab, renderNav };