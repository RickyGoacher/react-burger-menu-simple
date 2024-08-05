import { CSSProperties, ReactNode, useState } from "react";

interface BurgerNavigationInterface {
    menuPostionFromTop: string;
    menuWidth: string;
    menuPadding: string;
    menuSlideIn:string;
    menuTransition: string;
    menuBackgroundColour: string;
    overlayStyling: CSSProperties;
    iconContainerWidth: string;
    iconContainerHeight: string;
    iconColour: string;
    children: ReactNode;
}

const BurgerMenuComponent = (props:BurgerNavigationInterface) => {

    const [getMenuState, setMenuState] = useState(false);
    const isActiveLeft = (props.menuSlideIn === "left") ? `${getMenuState ? '0px' : '-' + props.menuWidth}` : "unset";
    const isActiveRight = (props.menuSlideIn === "right") ? `${getMenuState ? '0px' : '-' + props.menuWidth}` : "unset";

    const MenuStyling = {
        left: isActiveLeft,
        right: isActiveRight,
        top: props.menuPostionFromTop, 
        height: `calc(100vh - ${props.menuPostionFromTop})`,
        width: props.menuWidth, padding: props.menuPadding,
        transition: props.menuTransition,
        backgroundColor: props.menuBackgroundColour,
    }

    const MenuOverlayStyling = {
        display: (getMenuState) ? 'block' : 'none',
        top: props.menuPostionFromTop, 
        height: `calc(100vh - ${props.menuPostionFromTop})`,
        ...props.overlayStyling
    }

    return (
        <>
            <div className="icon" onClick={() => setMenuState(!getMenuState)} style={{width: props.iconContainerWidth, height: props.iconContainerHeight}}>
                <div id="nav-icon" className={getMenuState ? "open" : ''}>
                    <span style={{backgroundColor: props.iconColour}}></span>
                    <span style={{backgroundColor: props.iconColour}}></span>
                    <span style={{backgroundColor: props.iconColour}}></span>
                    <span style={{backgroundColor: props.iconColour}}></span>
                </div>
            </div>
            <div onClick={() => setMenuState(!getMenuState)}
                className="burger-menu-overlay" 
                style={MenuOverlayStyling}>
            </div>
            <div className={(getMenuState) ? `menu ${props.menuSlideIn} active` : `menu ${props.menuSlideIn}`} 
                style={MenuStyling}>
                {props.children}
            </div>
        </>
    );
}

export default BurgerMenuComponent;