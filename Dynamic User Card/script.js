let cardName;
let cardEmail;
let cardDesc


let nameRef = React.createRef()
let emailRef = React.createRef()
let aboutRef = React.createRef()

function passValue() {
    cardName = (nameRef.current.value)
    cardEmail = emailRef.current.value
    cardDesc = aboutRef.current.value

    rootElement.render(<App />);

}

// console.log(cardName);

const Card = () => (
    <div className="card">
        <h3>Name: {cardName}</h3>
        <p>Email: {cardEmail}</p>
        <p>About: {cardDesc}</p>
    </div>
);

const App = () => {

    return (
        <>
            <Card />
            < div className="App" >
                <div className="inputs">
                    <input ref={nameRef} placeholder="Name" onChange={passValue} />
                    <input ref={emailRef} type="email" placeholder="Email" onChange={passValue} />
                    <textarea ref={aboutRef} placeholder="About" onChange={passValue}></textarea>
                </div>
            </div >
        </>
    )
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);