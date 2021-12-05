import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '@components/Row/Row.sass';

function SliderNextArrow({onClick}) {
    return (
        <div
        className="slick-arrow slick-next"
        onClick={onClick}
        >
            <ChevronRightIcon />
        </div>
    );
}


export default SliderNextArrow
