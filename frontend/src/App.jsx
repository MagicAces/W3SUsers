import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useGetUsersQuery } from './slices/userApiSlice'
import { ToastContainer, toast } from 'react-toastify';
import { setUsers } from './slices/contentSlice';

import Content from './components/Content';

import './App.css'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const dispatch = useDispatch();
	const { data: users, isLoading: usersLoading, error: usersError, isFetching: usersFetching } = useGetUsersQuery();

	useEffect(() => {
		if(usersError) 
			toast.error(usersError?.data?.message || "Network Error")

		if(!usersError && !usersLoading)
			dispatch(setUsers(users?.users));
	}, [usersError, usersLoading, dispatch])

	return (
		<>
			<ToastContainer 
				limit={2}
			/>
			<Content error={usersError} loading={usersLoading} />
		</>
	);
}

export default App
