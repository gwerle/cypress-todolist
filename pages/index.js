import { useState } from "react"

export default function Home() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const handleSubmit = (e) => {
    e?.preventDefault()

    setTodos([...todos, todo])
  }


  return (
    <div>
      <form id={'todolist-form'} onSubmit={handleSubmit}>
        <input value={todo} onChange={(e) => setTodo(e.currentTarget.value)} />
        <button type='submit'>submit</button>
      </form>
      <div style={{ display: 'block' }}>
        {todos.map((t) => {
          return (
            <div key={t} style={{ display: 'block' }}>
              <p id={'todo-text'}>{t}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
