import { useState } from "react"


function NormalForm() {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setData({
            ...data,        // Copy existing state { name: "", email: "" }
            [name]: value  //name: "John" Update the `name` field
        })
    }

    return (
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
        }}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email"
                    onChange={handleOnChange}
                    name="email"
                    value={data.email}

                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password"
                    name="password"
                    onChange={handleOnChange}
                    value={data.password}
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default NormalForm

"ritik Branch"