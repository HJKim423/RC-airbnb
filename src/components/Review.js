import { useState } from "react";
import More from "./more";
import { ReactComponent as Star } from '../svg/star.svg';


function Review(){
    const [details, setDetails] = useState([
        {
            text: '청결도',
            value: '4.8'
        },
        {
            text: '정확성',
            value: '4.8'
        },
        {
            text: '의사소통',
            value: '4.8'
        },
        {
            text: '위치',
            value: '4.8'
        },
        {
            text: '체크인',
            value: '4.8'
        },
        {
            text: '가격 대비 만족도',
            value: '4.5'
        }
    ])

    const [reviews, setReviews] = useState([
        {
            img:'./img/reviewer/reviewer1.webp',
            name : 'Dane',
            date : '2022년 3월',
            content : 'A beautiful castle for a nights stay.'
        },
        {
            img:'./img/reviewer/reviewer2.webp',
            name : 'Thorsten',
            date : '2022년 3월',
            content : `Absolut perfekt! War alles genauso wie ich’s mir vorgestellt 
            hatte! Die perfekte Geburtstagsüberraschung, auch das 
            Frühstück war perfekt 👌 und echt lecker! Wir kommen...`
        },
        {
            img:'./img/reviewer/reviewer3.webp',
            name : 'Lauren',
            date : '2022년 3월',
            content : `We really enjoyed the experience of staying in a castle. It’s  
            and beautiful scenery. The rooms are very big and we really...`
        },
        {
            img:'./img/reviewer/reviewer4.png',
            name : 'Tobias',
            date : '2022년 3월',
            content : 'Absolut zu empfehlen'
        },
        {
            img:'./img/reviewer/reviewer5.webp',
            name : 'Marijn',
            date : '2022년 3월',
            content : `It was awesome to stay in this castle amclassNamest vineyards. We had
            a lovely day and a half here to explore the region, drink some
            lovely wine and enjoy the sun. Benedikt was nice,... `
        },
        {
            img:'./img/reviewer/reviewer6.webp',
            name : 'Vivian',
            date : '2022년 3월',
            content : `Sehr schönes Schloss mit besonderen Zimmern. Die zwei
            Schlosskätzchen waren absolutes Highlight 😁`
        }
    ])
    return (
        <section className="reviewSection">
        <div className="review__title">
            <Star />
            <span>4.81 · 후기 48개</span>
        </div>
        <div className="review__detail">
            {details.map((detail,index) => (
                <div key={index} className="detail__item">
                <div className="detail__item__text">{detail.text}</div>
                <div className="detail__item__num">
                    <progress value={detail.value} max="5"></progress>
                    <span>{detail.value}</span>
                </div>
        </div>
            ))}
        </div>
            
        <div className="review__reviews">
                {reviews.map((review,index) =>(
                    <div key={index} className="reviews__item">
                    <div className="reviews__item__reviewer">
                        <div className="reviewer__img">
                            <img src={review.img}></img>
                        </div>
                        <div className="reviewer__text">
                            <div className="reviewer__text__name">{review.name}</div>
                            <div className="reviewer__text__date">{review.date}</div>
                        </div>
                    </div>
                    <div className="reviews__item__content">{review.content}</div>
                </div>
                ))}
        </div>
        <button className="convenience__btn">후기 48개 모두 보기</button>
    </section>
    )
}

export default Review;