import React, { useState } from "react";
import { datadogRum } from "@datadog/browser-rum";

const QuoteGenerator = () => {
    const [quote, setQuote] = useState("");
    const [error, setError] = useState("");

    const fetchQuote = async () => {
        let error;
        try {
            setError("");
            const response = await fetch("http://localhost:5173/api/quotes");
            if (!response.ok) {
                error = new Error(`Failed to fetch quote: ${response.status} ${response.statusText}`);
                datadogRum.addError(error);
                throw new error;
            }
            const data = await response.json();
            setQuote(data.quote);
        } catch (error) {
            error = new Error(`Failed to fetch quote: ${error.message}`);
            datadogRum.addError(error);
            setError(error.message);
            throw new error;
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