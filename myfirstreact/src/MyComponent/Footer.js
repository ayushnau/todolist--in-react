import React from 'react'

export const Footer = () => {
    let footerstyle={
        position: "relative",
        top: "91vh",
        width: "100%"
    }
    return (
       
        <footer className="bg-dark text-light" style={footerstyle}>
            <p className="text-center my-4 " >
            Copywright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
