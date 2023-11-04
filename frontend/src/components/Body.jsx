import { useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem'

import { FaUsers } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';

import 'bootstrap/dist/css/bootstrap.min.css';

const Body = () => {
	const { users } = useSelector(state => state.content);

    const [rows, setRows] = useState(5);
    const [search, setSearch] = useState("");
    const [heading, setHeading] = useState("List of Users");
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(new Array(Math.ceil(Number(users.length/rows))).fill(0));
    
    const handleRows = (e) => {
        setRows(Number(e.target.value));
        setPages(new Array(Math.ceil(Number((users.length)/e.target.value))).fill(0));
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handlePage = (e) => {
        e.preventDefault();
        console.log(e.target.innerText);
        setPage(Number(e.target.innerText));
    }

    return (
        <>
            <div className="content-body">
                <div className="content-body-container">
                    <div className='controls'>
                        <div className='row-box'>
                            <select onChange={handleRows} defaultValue={rows.toString()}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="500">500</option>
                                <option value="1000">1000</option>
                            </select>
                            <span>records per page</span>
                        </div>
                        <div className='search-box'>
                            <BsSearch />
                            <input type='text' name='search' value={search} onChange={handleSearch} placeholder='Search...' />
                            <MdClear onClick={() => setSearch("")}/>
                        </div>
                    </div>  
                    <div className='filters'>

                    </div>
                    <div className='values'>
                        <p className='values-header'>{heading}</p>
                        <div className='values-body'>
                            <Table bordered responsive>
                            <thead >
                                <tr>
                                    <th>ID</th>
                                    <th>Full Name</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                { users.map((user, index) => {
                                    if(index >= rows * (page - 1) && index < (rows * page)) {
                                        return (
                                            <tr>
                                                <td>{user.data[0].$value}</td>
                                                <td>{user.data[1].$value}</td>
                                                <td>{user.data[2].$value}</td>
                                                <td>*********</td>
                                                <td>{user.data[4].$value.toUpperCase()}</td>
                                            </tr>
                                           
                                        );
                                    }
                                 })

                                }
                            </tbody>
                            </Table>
                        </div>
                        <div className='values-footer'>
                            <span>Showing {rows * (page - 1) + 1} to {rows * page} of {users.length} users</span>
                            <div className="values-footer-pages">
                                <Pagination>
                                    <Pagination.First />
                                    <Pagination.Prev disabled={page === 1} />
                                    { pages.map((value, index) => (
                                        <PageItem 
                                            key={index}
                                            className={index.toString()}
                                            value={index}
                                            onClick={handlePage}
                                            active={page === (index + 1)}
                                        >
                                            {index + 1}
                                        </PageItem>
                                    ))}
                                    
                                    {/* <Pagination.Ellipsis />

                                    <Pagination.Item>{10}</Pagination.Item>
                                    <Pagination.Item>{11}</Pagination.Item>
                                    <Pagination.Item active>{12}</Pagination.Item>
                                    <Pagination.Item>{13}</Pagination.Item>
                                    <Pagination.Item disabled>{14}</Pagination.Item>

                                    <Pagination.Ellipsis /> */}
                                    {/* <Pagination.Item>{20}</Pagination.Item> */}
                                    <Pagination.Next disabled={page === (Math.ceil(users.length /rows))}/>
                                    <Pagination.Last />
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body;