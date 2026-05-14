import { MainBoard } from '../widgets/main-board'
import { SideBar } from '../widgets/side-bar'

import './styles/app.css'
import './styles/reset.css'

function App() {
    return (
        <div className="app">
            <SideBar />
            <MainBoard />
        </div>
    )
}

export default App
