let carCount = 0
let bikeCount = 0
let scootyCount = 0
let bicycleCount = 0

const increaseCount = (item) => {
    if(item == 'car') {
        carCount += 1
    }

    else if(item == 'bike') {
        bikeCount += 1
    }

    else if(item == 'scooty') {
        scootyCount += 1
    }

    else if(item == 'bicycle') {
        bicycleCount += 1
    }
    

    rootElement.render(<App />);
}

const decreaseCount = (item) => {
    if(item == 'car' && carCount > 0) {
        carCount -= 1
    }

    else if(item == 'bike' && bikeCount > 0) {
        bikeCount -= 1
    }

    else if(item == 'scooty' && scootyCount > 0) {
        scootyCount -= 1
    }

    else if(item == 'bicycle' && bicycleCount > 0) {
        bicycleCount -= 1
    }

    rootElement.render(<App />);
}


const App = () => (
    <>
      <p>List of all the vehicles count in the parking.</p>
      <ol>
        <li>
          <p>
            <b>Car: {carCount}</b> &emsp;
            {/* Add increase and decrease count buttons here */}
            <button onClick={() => increaseCount('car')}>Increase</button>&emsp;
            <button onClick = {() => decreaseCount('car')}>Decrease</button>
          </p>
        </li>
        <li>
          <p>
            <b>Bike: {bikeCount}</b> &emsp;
            {/* Add increase and decrease count buttons here */}
            <button onClick = {() => increaseCount('bike')}>Increase</button>&emsp;
            <button onClick = {() => decreaseCount('bike')}>Decrease</button>
          </p>
        </li>
        <li>
          <p>
            <b>Scooty: {scootyCount}</b> &emsp;
            {/* Add increase and decrease count buttons here */}
            <button onClick = {() => increaseCount('scooty')}>Increase</button>&emsp;
            <button onClick = {() => decreaseCount('scooty')}>Decrease</button>
          </p>
        </li>
        <li>
          <p>
            <b>Bicycle: {bicycleCount}</b> &emsp;
            {/* Add increase and decrease count buttons here */}
            <button onClick = {() => increaseCount('bicycle')}>Increase</button>&emsp;
            <button onClick = {() => decreaseCount('bicycle')}>Decrease</button>
          </p>
        </li>
      </ol>
    </>
  );

  const rootElement = ReactDOM.createRoot(document.getElementById("root"));
  rootElement.render(<App />);