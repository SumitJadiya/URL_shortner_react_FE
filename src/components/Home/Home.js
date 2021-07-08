import { useState } from 'react';
import "./Home.css";
import { IconButton } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { APP_URL } from "../../config/constants"
import instance from '../../config/axios';

const Home = () => {
    const [longUrl, setLongUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')

    const handleLongUrl = async e => {
        e.preventDefault();

        const { data } = await instance.post(`/`, {
            longString: longUrl
        });
        console.log(longUrl, " -> ", data[0].shortUrl)
        setShortUrl(APP_URL.concat('/', data[0].shortUrl))
    }

    return (
        <div>
            <div className="home__center">
                <h1>URL Shortener</h1>
            </div>
            <form>
                <div className="home__inputContainer">
                    <input
                        className="home__input"
                        type="text"
                        value={longUrl}
                        onChange={(e) => setLongUrl(e.target.value)}
                        placeholder="Enter the URL here..."
                    />
                    <IconButton type="submit" onClick={handleLongUrl}>
                        <Send />
                    </IconButton>
                </div>
            </form>
            <div className="home__center mt-50">

                {shortUrl ? <>Shortened URL is <span style={{ color: 'red' }}>{shortUrl} 🎉</span></> : ``}

            </div>
        </div>
    );
}

export default Home;


