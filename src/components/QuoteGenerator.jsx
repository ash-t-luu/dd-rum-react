import React, { useState } from "react";

const QuoteGenerator = () => {
    const [quote, setQuote] = useState("");
    const [error, setError] = useState("");

    const fetchQuote = async () => {
        try {
            setError("");
            const response = await fetch("http://localhost:5173/api/quotes");
            if (!response.ok) {
                throw new Error("Failed to fetch quote");
            }
            const data = await response.json();
            setQuote(data.quote);
        } catch (error) {
            setError(`Failed to fetch quote: ${error.message}`);
        }
    };

    return (
        <div>
            <h1>📓 Quote Generator 📓</h1>
            {quote && <p>{quote}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button onClick={fetchQuote}>What inspiration will you catch today?</button>
        </div>
    );
}

export default QuoteGenerator;