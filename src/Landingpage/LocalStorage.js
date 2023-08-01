import LoginDetail from "./LoginDetails";
const LocalStorage = () => {
    const handle = () => {
        localStorage.setItem("name", name)
        localStorage.setItem("number", number)
        localStorage.setItem("password", pswd)
    }
    return (
        <div>
            <Button onClick={handle} type="primary" >Click Me</Button>
            <div>
                {localStorage.getItem("name")}
                <div />
                {localStorage.getItem("number")}
                <div />
                {localStorage.getItem("password")}
            </div>
        </div>
    )
}
export default LocalStorage;