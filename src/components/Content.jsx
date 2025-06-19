import PlaceholderImage from '../assets/Placeholder-image.png';

export default function Content({hasNewsData, newsData}) {
    return (
        <div className="content">
            {hasNewsData && newsData ? (
                <>
                    <h2>{newsData.title}</h2>
                    <img src={newsData.image} alt={newsData.title} />
                    <p>{newsData.description}</p>
                    <a href={newsData.url} target="_blank" rel="noopener noreferrer">Read More</a>
                </>
            ) : (
                <>
                    <h2>Welcome to PH Esports News Scraper!</h2>
                    <p>
                        This web app helps you find the latest esports news in the Philippines. <br />
                        Click the <b>Scrape</b> button to fetch the most recent articles and updates from top esports sources.
                    </p>
                </>
            )}
        </div>
    )
}