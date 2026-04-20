import { useState, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/tasks')
      const data = await response.json()
      setTasks(data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  const addTask = async (e) => {
    e.preventDefault()
    if (!newTitle.trim()) return
    try {
      await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle, completed: false })
      })
      setNewTitle('')
      fetchTasks()
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <form onSubmit={addTask}>
        <input 
          type="text" 
          value={newTitle} 
          onChange={(e) => setNewTitle(e.target.value)} 
          placeholder="Enter a new task..."
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
