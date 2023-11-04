
import { FaUsers } from "react-icons/fa";

const Empty = ({ children }) => {
    return (
        <>
            <div className="empty">
                <h1 className="empty-header"><FaUsers /></h1>
                <p className="empty-caption">{children}</p>  
            </div>
        </>
    )
}

export default Empty