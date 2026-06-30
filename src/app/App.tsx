import { MainBoard } from '../widgets/main-board'
import { SideBar } from '../widgets/side-bar'

import '../assets/styles/reset.css'
import '../assets/styles/root.css'
import '../assets/styles/app.css'
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
