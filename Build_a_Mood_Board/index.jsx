// index.jsx

export function MoodBoardItem({ color, image, description }) {
    console.log(typeof (color), typeof (image), typeof (description));
    return (
        <div className="mood-board-item" style={{ backgroundColor: color }}>
            <img src={image} className="mood-board-image" />
            <h3 className="mood-board-text">{description}</h3>
        </div>
    );
}

export function MoodBoard() {
    return (
        <div>
            <h1 className="mood-board-heading">Destination Mood Board</h1>
            <div className="mood-board">
                <MoodBoardItem color="deeppink" image="https://Big-Mike-Edahow.github.io/images/Sunrise.jpg" description="A beautiful sunrise." />
                <MoodBoardItem color="green" image="https://Big-Mike-Edahow.github.io/images/Park.jpg" description="A walk in a park." />
                <MoodBoardItem color="lightseagreen" image="https://Big-Mike-Edahow.github.io/images/Massage.jpg" description="A relaxing massage." />

                <MoodBoardItem color="brown" image="https://Big-Mike-Edahow.github.io/images/Lunch.jpg" description="A delicious lunch." />
                <MoodBoardItem color="orange" image="https://Big-Mike-Edahow.github.io/images/Shopping.jpg" description="An afternoon shopping." />
                <MoodBoardItem color="dodgerblue" image="https://Big-Mike-Edahow.github.io/images/Travel.jpg" description="A weekend getaway." />
            </div>
        </div>
    );
}
