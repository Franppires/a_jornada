import './App.css'

const users = [
  {
    name: 'Carlos',
    address: 'Rua X',
    age: 28,
    isAdmin: false,
  },
  {
    name: 'Maria',
    address: 'Rua XX',
    age: 31,
    isAdmin: true,
  },
  {
    name: 'Matheus',
    address: 'Rua XI',
    age: 22,
    isAdmin: false,
  }
]

function App() {

  return (
    <div className="App">
        <p>{users.map((user => 
          <div>{user.name}, {user.age}, {user.address}</div>
          ))}</p>

    </div>
  )
}

export default App
