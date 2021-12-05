import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import '@components/Row/Row.sass';

function SliderPrevArrow({onClick}) {
    return (
        <div
        className="slick-arrow slick-prev"
        onClick={onClick}
        >
            <ChevronLeftIcon />
        </div>
    );
}


export default SliderPrevArrow