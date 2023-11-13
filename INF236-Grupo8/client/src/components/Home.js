import Navigation from './Navigation'
import './Home.css'

export function Home({ user, setUser }) {

    const handleLogout = () => {
        setUser([])
    }

    return (
        <div>
            <Navigation user={user} setUser={setUser}/>        
        </div>
    )
}