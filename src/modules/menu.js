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