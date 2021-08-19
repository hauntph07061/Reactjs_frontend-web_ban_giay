import React from 'react'
import Header from '../admin/header';
import Nav from '../admin/nav';
const Adminlayout = (props) => {
    return (
        <>
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <Nav />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </div >
        </>
    )
}

export default Adminlayout
