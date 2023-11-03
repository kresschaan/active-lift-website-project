import { FaStar } from "react-icons/fa";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Reviews({ review }) {
    const reviews = getRandomInt(5);
    const unreviewed = 5 - reviews;

    const rated = [...Array(reviews)].map((data, index) => {
        return (
            <FaStar
                key={"unrated" + index}
                className="text-yellow-300"
                size={30}
            ></FaStar>
        );
    });

    const unrated = [...Array(unreviewed)].map((data, index) => {
        return <FaStar key={"unrated" + index} size={30}></FaStar>;
    });

    return (
        <div className="flex flex-row items-center justify-center p-2">
            {rated}
            {unrated}
            <p className="pl-2 pt-1 text-xl">{review}</p>
        </div>
    );
}

export default Reviews;
