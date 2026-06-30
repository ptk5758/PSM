import { MainBoard } from '../widgets/main-board'
import { SideBar } from '../widgets/side-bar'

import './styles/reset.css'
import './styles/root.css'
import './styles/app.css'
import WorkspaceProvider from './providers/story/WorkspaceProvider'

function App() {
    return (
        <WorkspaceProvider>
            <div className="app">
                <SideBar />
                <MainBoard />
            </div>
        </WorkspaceProvider>
    )
}

export default App
