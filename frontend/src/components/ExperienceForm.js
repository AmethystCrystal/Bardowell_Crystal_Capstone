import { useState } from "react"

const ExperienceForm = () => {
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name || !title || !body) {
            setError("Please fill in all fields");
            return;
          }

        const experience = {name, title, body}
        const response = await fetch('/api/TravelExperiences', {
        method: 'POST',
        body: JSON.stringify(experience),
        headers: {
            "Content-Type": "application/json"
        }
     })
     const json = await response.json()

    
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

            {error && <p style={{ color: 'red' }}>{error}</p>}

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
            <textarea
                rows="5"
                onChange={(e) => setBody(e.target.value)}
                value={body}
            />
            <button>Add Travel Log</button>
        </form>
    )
}

export default ExperienceForm