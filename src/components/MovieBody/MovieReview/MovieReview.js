import React from 'react';
import { getAPIImage } from '@api';
import { dateToLocale } from "@general/helpers";
import './MovieReview.sass';

function MovieReview({ review }) {

    const authorAvatar = () => {
        const avatar_path = review?.author_details?.avatar_path;
        if(avatar_path && avatar_path.startsWith("/http")){
            return avatar_path.slice(1);
        } else {
            return getAPIImage(avatar_path, "original", "avatar");
        } 
    }
 
    return (
        <div className="movie__review">
            <div className="review__left">
                <img src={authorAvatar()} style={{width: "120px"}} alt={"User Avatar"} />
                <div className="review__namedata">
                    <span><strong>Author: </strong>{review.author}</span>
                    <span><strong>Posted on: </strong>{dateToLocale(review.created_at)}</span>
                </div>
            </div>
            <div className="review__right">
                <div className="review__content" dangerouslySetInnerHTML={{__html: review.content}}/>
            </div>
        </div>
    )
}

export default MovieReview
