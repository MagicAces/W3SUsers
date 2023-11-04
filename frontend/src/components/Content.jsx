import Body from './Body';
import Header from './Header';

import "../css/Content.css";

const Content = ({ error, loading }) => {

	return (
		<>
			<div className='content'>
				<Header />
				{ (!loading && !error) && <Body />}
			</div>
		</>
	)
}

export default Content