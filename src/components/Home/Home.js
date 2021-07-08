import { useState } from 'react';
import "./Home.css";
import { IconButton } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { APP_URL } from "../../config/constants"
import instance from '../../config/axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [longUrl, setLongUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [error, setError] = useState('')

    const notify = () => {
        setError("Please enter a valid URL")
    };

    const handleLongUrl = async e => {
        e.preventDefault();

        if (!longUrl) notify()
        else {
            const { data } = await instance.post(`/`, {
                longString: longUrl
            });
            console.log(longUrl, " -> ", data[0].shortUrl)
            setShortUrl(APP_URL.concat('/', data[0].shortUrl))
        }
    }

    const RedirectToMainPage = e => {
        e.preventDefault();
        window.open(shortUrl, '_blank').focus();
        //window.location.replace(shortUrl);
    }

    return (
        <div>
            <div className="home__center">
                <h1>URL Shortener</h1>
            </div>
            <div className="home__center">
                <h5 style={{ "color": "red" }}>{error ? error : ``}</h5>
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

                {shortUrl ?
                    <>Shortened URL is <Link to='/' onClick={RedirectToMainPage} style={{ color: 'blue' }}>{shortUrl}</Link> 🎉 </>
                    :
                    ``}

            </div>
        </div>
    );
}

export default Home;


