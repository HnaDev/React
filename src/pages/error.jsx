import { NavLink, useRouteError } from "react-router-dom";
import '../styles/error.css'
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error__container">
            <div className="error__code">
                <p>4</p>
                <p>0</p>
                <p>4</p>
            </div>
            <div className="error__title">Page Not Found</div>
            <div className="error__description">
                We can't seem to find that page. It might have been removed or doesn't
                exist anymore.
            </div>
            <NavLink className="action" to="/">Go Home</NavLink>
            {/* <p>
                <i>{error.statusText || error.message}</i>
            </p> */}
        </div>
    );
}
