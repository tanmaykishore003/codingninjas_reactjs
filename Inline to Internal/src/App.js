import "./styles.css";
//create a object to store all the styles.
export default function App() {
    return (
        <div className="App">
            {/* Refactor the inline style to use the internal style. */}
            <form style={styles.form} >
                {/* Refactor the inline style to use the internal style. */}
                <h3 style={styles.h3Heading}>Sign Up</h3>
                <input style={styles.input} placeholder="Username" />
                <input style={styles.input} placeholder="Email" />
                <input style={styles.input} placeholder="Password" />
                {/* Refactor the inline style to use the internal style. */}
                <div style={styles.btnContainer} >
                    {/* Refactor the inline style to use the internal style. */}
                    <button style={styles.btn} >
                        Cancel
                    </button>
                    {/* Refactor the inline style to use the internal style. */}
                    <button style={styles.btn} >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}


const styles = {
    form: {
        width: "60%",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        gap: 20
    },

    h3Heading: {
        fontSize: "2rem",
        letterSpacing: 2
    },

    input: { 
        padding: 10 
    },

    btnContainer: {
        display: "flex",
        justifyContent: "center",
        gap: 20
    },

    btn: {
            outline: "none",
            paddingBlock: 5,
            width: 100,
            backgroundColor: "red",
            color: "white",
            cursor: "pointer"
        }
}