import MainHeader from "./components/MainHeader";
import Content from "./components/Content";
import Button from "./components/Button";
import { useEffect, useState } from "react";

function App() {
  const [hasNewsData , setHasNewsData] = useState(false);
  const [newsData, setNewsData] = useState([]);

  const fetchNews = async () => {
    const apiKey = "66164ca27b709a713a134747afb58179";
    const query = "esports philippines";
    const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&country=ph&max=10&token=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setNewsData(data.articles || []);
      setHasNewsData(true);
    } catch (error) {
      alert("Error fetching news data");
      setHasNewsData(false);
    }
  }

  useEffect(() => {
    fetchNews();
  }, [])
  
  return (
    <>
      <MainHeader />

      {hasNewsData && newsData.length > 0 ? (
        newsData.map((article, idx) => (
          <Content key={idx} hasNewsData={true} newsData={article} />
        ))
      ) : (
        <Content hasNewsData={false} />
      )}
      
      <Button onClick={fetchNews} />
    </>
  )
}

export default App
