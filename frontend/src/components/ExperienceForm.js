import { useState } from "react"

const ExperienceForm = () => {
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const experience = {name, title, body}
        const response = await fetch('/api/TravelExperience', {
        method: 'POST',
        body: JSON.stringify(experience),
        header: {
            "Content-Type": "application/json"
        }
     })
     const json = await response.json()

     if (!response.ok) {
        setError(error)
     }
     if (response.ok) {
        setName('')
        setTitle('')
        setBody('')
        setError(null)
        console.log('New travel log added', json)
     }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a Travel Log</h3>

            <label>Name</label>
            <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
            <label>Title</label>
            <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
            <label>Body</label>
            <input
            type="text"
            onChange={(e) => setBody(e.target.value)}
            value={body}
            />
            <button>Add Travel Log</button>
        </form>
    )
}

export default ExperienceForm