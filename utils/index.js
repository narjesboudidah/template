import axios from "axios";
const user = async () => {
    let token = localStorage.getItem("userToken");
    await axios.post("http://127.0.0.1:8000/api/user", this.form, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
    }).then((result) => {
        return result.data;
    }).catch(() => {
        return null;
    })
}
export { user };