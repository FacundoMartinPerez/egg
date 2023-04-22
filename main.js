const email = document.getElemntById("email")
const password = document.getElemntById("password")
const button = document.getElemntById("button")

button.addEventListener ("click", (e) =>) {
    e.preventDefault()
    const data = {
        email: email.value,
        password: password.value
    }
    console.log(data)
}