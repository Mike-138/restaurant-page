import "./styles/style.css";
import Icon from "./assets/images/food.svg";

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

    const navIcon = (() => {
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

    const menuTab = (() => {
        const container = base.makeDiv();
        container.textContent = "Menu";
        return container;
    })();

    const contactTab = (() => {
        const container = base.makeDiv();
        container.textContent = "Contact";
        return container;
    })();

    const _navButtons = (() => {
        const container = base.makeDiv();
        container.classList.add("nav-buttons");
        container.append(menuTab, contactTab);
        return container;
    })();

    const render = () => {
        base.nav.append(navIcon, _navTitle, _navButtons);
    }

    return { navIcon, menuTab, contactTab, render };

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
        base.contentContainer.replaceChildren(_landingContainer);
    }

    return { render };

})();

const menuPage = (() => {

    const _menuList = [];

    const _makeMenuItem = (name, price, image, description) => {

        const itemName = base.makeHeader();
        itemName.classList.add("menu-item-name");
        itemName.textContent = name;

        const itemPrice = base.makeHeader();
        itemPrice.classList.add("menu-item-price");
        itemPrice.textContent = price;

        const itemImage = new Image();
        itemImage.classList.add("menu-item-image");
        itemImage.src = image;

        const itemDescription = base.makePara();
        itemDescription.classList.add("menu-item-description");
        itemDescription.textContent = description;

        const container = base.makeDiv();
        container.classList.add("menu-item");
        container.append(itemName, itemPrice, itemImage, itemDescription);
        return container;
    }

    const _publishMenuItem = (name, price, image, description) => {
        const menuItem = _makeMenuItem(name, price, image, description);
        _menuList.push(menuItem);
        return menuItem;
    }

    // Icon is a placeholder for images

    const _hamburger = _publishMenuItem(
        "Classic Hamburger",
        8.99,
        Icon,
        "This classic homestyle hamburger is sure to quell whatever cravings you may have!"
    );

    const _hotDog = _publishMenuItem(
        "Jumbo Glizzy",
        5.99,
        Icon,
        "You can never go wrong with one of our flame-grilled glizzies!"
    );

    const _macAndCheese = _publishMenuItem(
        "Mac 'n' Cheese",
        7.99,
        Icon,
        "For the more sophisticated among you."
    );

    const _frenchFries = _publishMenuItem(
        "French Fries",
        2.99,
        Icon,
        "No fast food feast is complete without a few of these!"
    );

    const _softDrink = _publishMenuItem(
        "Pop",
        1.99,
        Icon,
        "To quench your thirst."
    );

    const _menuContainer = (() => {
        const container = base.makeDiv();
        container.classList.add("menu-container");
        container.append(..._menuList);
        return container;
    })();

    const render = () => {
        base.contentContainer.replaceChildren(_menuContainer);
    }

    return { render };

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

const displayController = (() => {

    const _setNav = () => {
        navBar.render();
        base.header.appendChild(base.nav);
    }

    const _setHeader = () => {
        document.body.appendChild(base.header);
    }

    const _renderHeader = () => {
        _setNav();
        _setHeader();
    }

    const _renderMain = () => {
        base.main.appendChild(base.contentContainer);
        document.body.appendChild(base.main);
    }

    const render = () => {
        _renderHeader();
        landingPage.render();
        _renderMain();
    }

    navBar.navIcon.addEventListener("click", landingPage.render);

    navBar.menuTab.addEventListener("click", menuPage.render);

    navBar.contactTab.addEventListener("click", contactPage.render);

    return { render };

})();

displayController.render();