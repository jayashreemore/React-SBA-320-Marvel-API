import { useState } from "react";
import md5 from "md5";


export default function Search() {
    const [characterName, setCharacterName] = useState("");
    const [characterData, setCharacterData] = useState("null");
    const [comicData, setComicData] = useState("null");

    const PUBLIC_API_KEY = import.meta.env.VITE_PUBLIC_API_KEY;
    const PRIVATE_API_KEY= import.meta.env.VITE_PRIVATE_API_KEY;


    const handleSubmit = (event) => {
        event.preventDefault();
        getCharacterData();
    };

    const generateHash = (timeStamp) => {
        return md5(timeStamp  + PUBLIC_API_KEY + PRIVATE_API_KEY);

    };

    const getCharacterData = () => {
        setCharacterData(null);
        setComicData(null);

        const timeStamp = new Date().getTime();
        const hash = generateHash(timeStamp);

        //const url = `https://gateway.marvel./v1/public/characters?apikey=${publicKey}&hash=${hash}&ts=${timeStamp}&nameStartsWith=${characterName}&limit=100`;
        const url = `https://gateway.marvel.com/v1/public/characters/?apikey=${PUBLIC_API_KEY}&ts=${timeStamp}&hash=${hash}`;
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setCharacterData(result.data);
                console.log(result.data);
            })

            .catch(() => {
                console.log('error while getting Character Data');

            });
        
    }

    const handleChange = (event) => {
        setCharacterName(event.target.value);
    };

    const handleReset = () => {
        // ll use later 
    };

    return (
        <>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Character Name"
                    onChange={handleChange}
                />
                <div className="buttons">
                    <button type="submit">Get Chracter Data</button>
                    <button type="reset" className="reset" onClick={handleChange}>
                        Reset
                    </button>
                </div>
            </form>
        </>
    );
}
// buttons to search characters name and reset it
// 
