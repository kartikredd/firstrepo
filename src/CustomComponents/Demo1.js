import { Link } from "react-router-dom";
import { Button } from "antd/es/radio";

const Layout = () => {
    return (
        <>
            <Link to='/login'>
                <Button type='primary'> Login </Button>
            </Link>
        </>
    )
}
export default Layout;
