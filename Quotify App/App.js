const quotes = [];
let nameRef = React.createRef()
let quoteRef = React.createRef()

const clearInputs = () => {
    nameRef.current.value = "";
    quoteRef.current.value = "";
};

// create handleQuote function here
const handleQuote = (event) => {
    if(event.key === "Enter") {
        const individualQuote = {
            name: nameRef.current.value,
            quote: quoteRef.current.value
        }
        quotes.push(individualQuote)
    
        clearInputs()
        rootElement.render(<App />);
    }
    
}

const App = () => (
    <div className="App">
        <h2>Quotify</h2>
        <input ref = {nameRef} onKeyPress={handleQuote} placeholder="Name" />
        <br />
        <input ref = {quoteRef} onKeyPress={handleQuote} placeholder="Quote" />
        <div className="quotes">
            {quotes.map((q, i) => (
                <div key={i}>
                    <i>"{q.quote}"</i>
                    <b>~ {q.name}</b>
                </div>
            ))}
        </div>
    </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);