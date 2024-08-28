import { Button, Result } from "antd";
import { Link, useRouteError } from "react-router-dom";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (

        <Result
            status="404"
            title="404"
            subTitle={error.statusText || error.message}
            extra={<Button Button type="primary" >
                <Link className="action" to="/">Go Home</Link>
            </Button >}
        />
    );
}
