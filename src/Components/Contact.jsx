import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

let Contact = () => {
  let [formData, setformData] = useState({
    username: "",
    password: "",
    phone: "",
    email: "",
    cars: "",
  });

  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [errorMesage, setErrorMessage] = useState({});
  const [flag, setFlag] = useState(false);

  let validatePayload = (payload) => {
   // const { id, name, mobileno, email, password } = payload;
    let errorObj = {};

    if (!payload.id) {
        console.log("ID")
      errorObj.id = "userId is Required";
    }
    if (!payload.username) {
      errorObj.username = "username is Required";
    }
    if (!payload.phone) {

        console.log("pkda gya"+payload.mobileno)

      errorObj.phone = "mobileno is Required";
    }
    if (!payload.email) {
      errorObj.email = "email is Required";
    }
    if (!payload.password) {
      errorObj.password = "password is Required";
    }

    console.log("ranjeet"+JSON.stringify(errorObj));

    return errorObj;
  };

  let OnChangeHandeler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value);
    setformData({ ...formData, [name]: value });
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    const payload = { ...formData, id: new Date().getTime().toString() };

    setErrorMessage(validatePayload(payload));

    setFlag(true);
    console.log(errorMesage);
    setData([...data, payload]);
  };

  useEffect(() => {

console.log("error ka length h"+Object.keys(errorMesage).length);
console.log("error h "+Object.keys(errorMesage).type);
    if (Object.keys(errorMesage).length === 0 && flag) {
        console.log("useeffect chl rha h....")
        console.log("if true h")
      const payload = { ...formData, id: new Date().getTime().toString() };

      axios
        .post("http://localhost:8080/user/registration", payload)
        .then((response) => {
          setMessage(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    }
  }, [errorMesage]);

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Name : </label>
            <input
              type="text"
              value={formData.username}
              name="username"
              id="username"
              onChange={OnChangeHandeler}
            ></input>
          </div>
          <p>{errorMesage.username}</p>

          <div>
            <label htmlFor="password"> Password : </label>
            <input
              type="password"
              value={formData.password}
              name="password"
              id="password"
              onChange={OnChangeHandeler}
            ></input>
          </div>
          <p>{errorMesage.password}</p>

          <div>
            <label htmlFor="phone"> phone : </label>
            <input
              type="number"
              value={formData.phone}
              name="phone"
              id="phone"
              onChange={OnChangeHandeler}
            ></input>
          </div>
          <p>{errorMesage.phone}</p>

          <div>
            <label htmlFor="email"> Email : </label>
            <input
              type=""
              value={formData.email}
              name="email"
              id="email"
              onChange={OnChangeHandeler}
            ></input>
          </div>
          <p>{errorMesage.email}</p>

          <div>
            <label htmlFor="cars">Choose a car : </label>
            <select
              name="cars"
              value={formData.cars}
              id="cars"
              onChange={OnChangeHandeler}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <button type="submit">submit</button>
        </form>
      </section>
      <h2>{message}</h2>
    </>
  );
};
export default Contact;
