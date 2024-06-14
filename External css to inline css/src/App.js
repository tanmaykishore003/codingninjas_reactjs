import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        margin: 'auto',
        width: 250,
        height: 225,
        padding: '2rem',
      }}>
        <h1>Register Form</h1>
        <input style={{
            width: '100%',
            paddingBlock: '0.5rem',
            border: '1px solid black',
            borderRadius: 5,
        }} type="text" placeholder="Name"  />
        <input style={{
            width: '100%',
            paddingBlock: '0.5rem',
            border: '1px solid black',
            borderRadius: 5,
        }} type="email" placeholder="Email" />
        <input style={{
            width: '100%',
            paddingBlock: '0.5rem',
            border: '1px solid black',
            borderRadius: 5,
        }} type="password" placeholder="Password" className="form-input" />
        <button style={{
            width: '100%',
            backgroundColor: 'black',
            color: 'white',
            paddingBlock: '0.5rem',
            fontSize: '1.035rem',
        }} >Submit</button>
      </form>
    </div>
  );
}
