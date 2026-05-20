import { MainBoard } from '../widgets/main-board'
import { SideBar } from '../widgets/side-bar'

import './styles/reset.css'
import './styles/root.css'
import './styles/app.css'

function App() {
    return (
        <div className="app">
            <SideBar />
            <MainBoard />
        </div>
    )
}

export default App
