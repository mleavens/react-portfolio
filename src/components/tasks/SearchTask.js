import React from 'react'
import Card from '../shared/Card'
 
export default function ({ search, setSearch }) {
    return (
        <Card>
            <h2>Search task</h2>
            <form className = "search-form" onSubmit = {(e) => e.preventDefault()}>
                <label htmlFor = "search">Search</label>
                <input 
                id = "search"
                type = "text"
                role = "searchbox"
                placeholder = "Search task"
                onChange = {(e) => setSearch(e.target.value)}
                />
            </form>
        </Card>
    )
}
