import React from "react"

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "hello"
        }
    }

    render() {
        return (
            <>
                <h1>Hello</h1>
            </>
        )
    }
}

export default Header