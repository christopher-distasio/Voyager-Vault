import React, { useState } from 'react';
import CountryCard from './CountryCard';
import axios from 'axios'; // Import axios for making HTTP requests

function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${query}`);
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleClear = () => {
        setQuery('');
        setResults([]);
    };

    const handleAddToWishlist = async (country) => {
        try {
            // Add to wishlist logic
            console.log('Added to wishlist:', country.name.common);
        } catch (error) {
            console.error('Error adding to wishlist:', error);
        }
    };

    const handleAddToDestinations = async (country) => {
        try {
            // Add to destinations logic
            console.log('Added to destinations:', country.name.common);
        } catch (error) {
            console.error('Error adding to destinations:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" value={query} onChange={handleChange} className="form-control" placeholder="Search for a country..." />
                    <button type="submit" className="btn btn-primary">Search</button>
                    {query && <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear</button>}
                </div>
            </form>
            <div className="row">
                {results.map(country => (
                    <div className="col-md-4" key={country.name.common}>
                        <CountryCard 
                            country={country} 
                            handleAddToWishlist={handleAddToWishlist}
                            handleAddToDestinations={handleAddToDestinations}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;