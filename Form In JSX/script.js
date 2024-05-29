
let studentDetails = []
let studName = React.createRef()
let studMarks = React.createRef()

function passDetails(event) {
    event.preventDefault()

    const individualData = {
        name: studName.current.value,
        marks: studMarks.current.value
    }

    studentDetails.push(individualData)

    studName.current.value = ""
    studMarks.current.value = ""

    rootElement.render(<App />);
    console.log(studentDetails)
}

const Form = () => {
    return (
        <>
            <form onSubmit={passDetails}>
                <input ref={studName} placeholder="Student name" type="text" />
                <input ref={studMarks} placeholder="marks" type="number" />
                <button>Submit</button>
            </form>
        </>
    )
}

const Result = () => {
    return (
        <>
            <table border="3">
                <thead>
                    <tr>
                        <th>Student's name</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {studentDetails.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.marks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}


const App = () => (
    <>
        <h1>Student's form</h1>
        <Form />
        <br /><br /><br />
        <Result />
    </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);