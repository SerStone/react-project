import {Link} from "react-router-dom";


const NotFoundPage = () => {
    return (
        <div>
            <span>404</span>
            <span >Not Found</span>
            <div>
                <p>
                    Please be calm because the resource you requested could not be found on this server:(
                </p>
            </div>
            <Link to={'/'}>Back to the Main</Link>
        </div>
    );
};

export {NotFoundPage};