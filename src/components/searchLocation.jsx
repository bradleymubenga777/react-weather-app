import React from 'react'
export default function SearchLocation(props) {

    return (
        <div className="">
            <div className="col-md-6">
                <form className="region" onSubmit={(e) => { props.changeLocation(e) }}>
                    <input type="text" className="regioninput" placeholder="Select your region" onChange={(e) => { props.changeRegion(e.target.value) }} />
                </form>
            </div>

        </div>
    )
}