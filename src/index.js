import { header, nav, main, contentContainer } from "./modules/base";
import { navIcon, menuTab, contactTab, renderNav } from "./modules/nav";
import renderHome from "./modules/home";
import renderMenu from "./modules/menu";
import renderContact from "./modules/contact";
import "./styles/style.css";


const _setNav = () => {
    renderNav();
    header.appendChild(nav);
}

const _setHeader = () => {
    document.body.appendChild(header);
}

const _renderHeader = () => {
    _setNav();
    _setHeader();
}

const _renderMain = () => {
    main.appendChild(contentContainer);
    document.body.appendChild(main);
}

const render = () => {
    _renderHeader();
    renderHome();
    _renderMain();
}

navIcon.addEventListener("click", renderHome);

menuTab.addEventListener("click", renderMenu);

contactTab.addEventListener("click", renderContact);

render();