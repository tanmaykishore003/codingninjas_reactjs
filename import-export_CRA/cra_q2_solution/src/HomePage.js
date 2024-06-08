import Form from "./Form";
var name = "YourName";
var email = "xyz@pqr.com";

export default function HomePage() {
  return (
    <div className="Homepage">
      <h1>HomePage</h1>
      <Form />
    </div>
  );
}

export { name, email };
