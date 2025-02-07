import { React } from "react";
import MobileMenu from "../../components/Header/MobileMenu";


const BurgerButton = ({ isOpen, clicked }) => {


    if (clicked) {
        return (
            <>
                <div className="burger-box">
                    <div className={`line-1 ${isOpen ? 'change-to-close-1' : 'change-to-normal-1'}`}></div>
                    <div className={`line-2 ${isOpen ? 'change-to-close-2' : 'change-to-normal-2'}`}></div>
                    <div className={`line-3 ${isOpen ? 'change-to-close-3' : 'change-to-normal-3'}`}></div>


                </div>
                <MobileMenu isOpen={isOpen} />
            </>
        )
    } else {
        return (
            <>
                <div className="burger-box">
                    <div className={`line-1`}></div>
                    <div className={`line-2`}></div>
                    <div className={`line-3`}></div>


                </div>
                <MobileMenu isOpen={isOpen} />
            </>
        )
    }

}

export default BurgerButton;