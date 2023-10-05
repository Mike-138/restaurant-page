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

export { header, nav, main, contentContainer, makeDiv, makeHeader, makePara };