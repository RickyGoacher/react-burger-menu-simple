# React Simple Burger Menu Component

Simple off-canvas react burger menu component navigation wrapper with alignment config. This component wraps around a menu to allow for a full custom navigation in the burger menu.

## How to use

### Install

Installation: `npm install react-burger-menu-simple`

### Usage

Import the package into your app:

`import { BurgerMenuComponent } from "react-burger-menu-simple";`

#### Component options:
```
        <BurgerMenuComponent
            menuPostionFromTop={"80px"}
            menuWidth={"200px"} 
            menuPadding={"2rem"} 
            menuSlideIn={"left"} 
            menuTransition={'.8s'}
            menuBackgroundColour={"#33658A"}
            overlayStyling={{backgroundColor: 'grey', opacity: .5}}
            iconContainerWidth={"80px"}
            iconContainerHeight={"80px"}
            iconColour={'white'}
        >
            <nav>
                <ul>
                    <li>
                        Menu Item
                    </li>
                    <li>
                        Menu Item
                    </li>
                    <li>
                        Menu Item
                    </li>
                    <li>
                        Menu Item
                    </li>
                </ul>
            </nav>
        </BurgerMenuComponent>

    The <BurgerMenuComponent> can accept any element between the opening and closing tag. 

    -  menuPostionFromTop={"80px"}
        Set the position from the top, used to offset from the header.

    -  menuWidth={"200px"}
        Set the width of the slideout menu.

    -  menuPadding={"2rem"}
        Set the padding for the menu.

    -  menuSlideIn={"left"}
        Set the direction the menu slides in from (left or right).

    -  menuTransition={'.8s'}
        Menu transition timing.

    - menuBackgroundColour={"#33658A"}
        Menu background colour.

    - overlayStyling={{backgroundColor: 'grey', opacity: .5}}
        Takes an object of styles following standard react inline styling.

    - iconContainerWidth={"80px"}
        Icon container width.

    - iconContainerHeight={"80px"}
        Icon container height.

    - iconColour={'white'}
        Burger menu icon colour.
    
```
 ## Example

### Burger menu left

![Load more example](https://raw.githubusercontent.com/RickyGoacher/react-burger-menu-simple/main/assets/images/burger-menu-example-left.png)

### Burger menu right

![Mobile device emulation example](https://raw.githubusercontent.com/RickyGoacher/react-burger-menu-simple/main/assets/images/burger-menu-example-right.png)