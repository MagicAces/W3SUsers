import { useSelector } from 'react-redux';

import { FaUsers } from 'react-icons/fa';

const Header = () => {
	const { users } = useSelector(state => state.content);

    return (
        <>
            <div className='content-header'>
                <h1><FaUsers />W3S Users ({users.length})</h1>
            </div>
        </>
    )
}

export default Header