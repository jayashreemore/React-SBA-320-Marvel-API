
export default function Search() {
    const handleSubmit = () => {
        // ll use later 
    };

    const handleChange = () => {
        // ll use later 
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

