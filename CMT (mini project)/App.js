let customers = [];
const capacity = 25;
let seatsLeft = 25;
let nameRef = React.createRef()
let countRef = React.createRef()
let phoneRef = React.createRef()

// Create form submit handler here
const addGuest = (event) => {
    event.preventDefault()

    if (countRef.current.value < seatsLeft) {
        const guestDetail = {
            name: nameRef.current.value,
            count: countRef.current.value,
            phone: phoneRef.current.value,
            checkIn: new Date().toLocaleTimeString(),
            checkOut: "----"
        }
        seatsLeft -= countRef.current.value

        customers.push(guestDetail)
        rootElement.render(<App />);

        nameRef.current.value = ""
        countRef.current.value = ""
        phoneRef.current.value = ""
    }

}

const checkOut = (event) => {
    event.preventDefault()

    seatsLeft += Number(customers[0].count)
    customers[0].checkOut = new Date().toLocaleTimeString()
    rootElement.render(<App />);
}

const deleteItem = () => {

    (seatsLeft<capacity?seatsLeft += Number(customers[0].count):seatsLeft += 0)
    customers.splice(0, 1)
    rootElement.render(<App />);
}


const App = () => (
    <div className="App" style={{ textAlign: "center" }}>
        <div>
            <h2>Total Capacity: {capacity}</h2>
            <h2>Seats Left: {seatsLeft}</h2>
        </div>

        {/* Create a form here */}
        <form onSubmit={addGuest}>
            <input ref={countRef} placeholder="Number of Guest" type="number" />
            <input ref={nameRef} placeholder="Name" type="text" />
            <input ref={phoneRef} placeholder="Phone Number" type="text" />

            <button>Add Entry</button>
        </form>

        {/* Complete table to show records of customers */}
        <table border="1px" style={{ margin: "auto" }}>
            <thead>
                <tr>
                    <th>Count</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Status</th>
                    <th>Remove Entry</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((item, index) => <tr key={index}>
                    <td>{item.count}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.checkIn}</td>
                    <td>{item.checkOut}</td>
                    <td onClick={checkOut}>Click to CheckOut</td>
                    <td onClick={deleteItem}>Delete</td>
                </tr>)}
            </tbody>
        </table>
    </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);