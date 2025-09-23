"use client";

import { useSwiper } from "swiper/react";
import { PicaretLeftBold, PiCaretRightBold } from "react/icons/pi";


export default function WorkSlidersBtns = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper();
    return(
        <>
            <div className={containerStyles}>
                <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                    <PicaretLeftBold className={iconStyles} />
                </button>

                 <button className={btnStyles} onClick={() => swiper.slideNext()}>
                    <PicaretRightBold className={iconStyles} />
                </button>
            </div>
        </>
    )
}