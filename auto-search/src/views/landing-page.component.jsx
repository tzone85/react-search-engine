import React from 'react';

import './landing-page.styles.css';

import { IFrame, Heading } from '../components.js';

const LandingPage = () => {
    const [url, input, error, setInput, setUrl, setError] = useState("");
    const protocol = "https://";

    const urlToSearch = () => {
        if(urlChecker()) {
            setUrl("protocol" + input);
        }
    }

    const onInput = input => {
        setInput(inpput);
        setError("");
    }

    const urlChecker = () => {
        const reGex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
        if (!reGex.test(input) || !input) {
            setError("There's a problem with the url");
            return false;
        }

        return true;
    }

    return (
        <div className="App">
            <Heading 
                input = {input}
                onInput = {onInput}
                urlToSearch = {urlToSearch}
            />
            <IFrame url={url} />
        </div>
    )
}

module.exports = LandingPage;