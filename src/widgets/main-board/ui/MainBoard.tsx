import style from './MainBoard.module.css'
import { useWorkspace } from '@/app/hooks'
import { StoryHeader } from '@/entities/story'
import clsx from 'clsx'
import { ReactFlow, Background, Controls, type Node, type Edge } from '@xyflow/react'
import '@xyflow/react/dist/style.css'

const initNode: Node[] = [
    {
        id: 'node_1',
        data: {
            foo: 'bar',
            label: 'node_1'
        },
        position: { x: 0, y: 0 },
    },
    {
        id: 'node_2',
        data: {
            foo: 'pong',
            label: 'node_2'
        },
        position: { x: 100, y: 100 },
    },
]

const initEdge: Edge[] = [
    {
        id: 'edge_1',
        source: 'node_1',
        target: 'node_2',
        type: 'smoothstep',
        label: "Edge Label label"
    }
]

function MainBoard() {
    const { story } = useWorkspace()

    if (!story) {
        return <main className={clsx(style.main_board, 'no-item')}>시나리오를 선택 해주세요</main>
    }

    return (
        <main className={style.main_board}>
            <StoryHeader className={style.top} {...story} />
            <div style={{ flex: 1 }}>
                <ReactFlow nodes={initNode} edges={initEdge}>
                    <Background />
                    <Controls />
                </ReactFlow>
            </div>
        </main>
    )
}
export default MainBoard
