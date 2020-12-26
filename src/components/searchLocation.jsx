import React from 'react'
import '../index.css';

export default function SearchLocation(props) {
    
    return (
        <div className="">
            <div className="col-md-6">
                <form className="region" onSubmit={(e) => { props.changeLocation(e) }}>
                    <input type="text" className="regioninput" placeholder="Select your region" onChange={(e) => { props.changeRegion(e.target.value) }} />
                    <button type="submit" className="paddingBotttom">Search</button>
                </form>
            </div>

        </div>
    )
}