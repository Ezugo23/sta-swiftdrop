import axios from 'axios'
import React, { useState } from 'react'
// import { FaSearch } from "react-icons/fa"

const Search = () => {
    const [input, setInput] = useState('')
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async (value) => {
        try {
            setLoading(true);
            const response = await axios.get('https://swifdropp.onrender.com/api/v1/admin/');
            const data = response.data.admins;
            const filteredResults = data.filter((user) => 
                user && user.username && user.username.toLowerCase().includes(input.toLowerCase())
            );
            console.log(filteredResults);
            setResults(filteredResults);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (value) => {
        setInput(value);
        getData();
    }

    return (
        <div>
            <div className="d-lg-flex align-items-center ">
                <div className='d-flex align-items-center gap-1 bg-secondary p-1 rounded '>
                    {/* <FaSearch className='text-white' /> */}
                    <input
                        type="text"
                        placeholder='Type to search....'
                        className='border border-white fs-5 p-1 rounded'
                        value={input}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </div>
            </div>

            

            <div>
                
                <ul>
                    {results.map((user) => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Search;