import axios from "axios";

export default async function page1() {
  const data = await axios.post('localhost:8080/api/v1/auth/register', {param: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",

  }} )
}