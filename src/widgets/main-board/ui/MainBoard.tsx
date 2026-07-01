import style from './MainBoard.module.css'
import { useWorkspace } from '@/app/hooks'
import { StoryHeader } from '@/entities/story'
import clsx from 'clsx'
import {
    ReactFlow,
    Background,
    Controls,
    type Node,
    type Edge,
    applyEdgeChanges,
    applyNodeChanges,
    type NodeChange,
    type EdgeChange,
    type Connection,
    addEdge,
    Panel,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useCallback, useState, type ChangeEvent } from 'react'

const initNode: Node[] = [
    {
        id: 'node_1',
        data: {
            foo: 'bar',
            label: 'node_1',
        },
        type: 'textUpdater',
        position: { x: 0, y: 0 },
    },
    {
        id: 'node_2',
        data: {
            foo: 'pong',
            label: 'node_2',
        },
        position: { x: 100, y: 100 },
    },
]

const initEdge: Edge[] = [
    // {
    //     id: 'edge_1',
    //     source: 'node_1',
    //     target: 'node_2',
    //     type: 'smoothstep',
    //     label: 'Edge Label label',
    // },
]

function MainBoard() {
    const { story } = useWorkspace()

    const [nodes, setNodes] = useState<Node[]>(initNode)
    const [edges, setEdges] = useState<Edge[]>(initEdge)

    const onNodeChange = useCallback((changes: NodeChange<Node>[]) => {
        // console.log(changes) // -> 바뀐 노드가 출력됨 Ctrl 등으로 여러개 이동 하면 여러개 이동됌
        setNodes((prev) => applyNodeChanges(changes, prev))
    }, [])

    // 언재 동작 하는지 확인 필요 // 없이도 잘 돌아감
    const onEdgeChange = useCallback((changes: EdgeChange<Edge>[]) => {
        console.log('on edge change : ', changes)
        setEdges((prev) => applyEdgeChanges(changes, prev))
    }, [])

    const onConnect = useCallback((connection: Connection) => {
        console.log('connection : ', connection)
        setEdges((prev) => addEdge(connection, prev))
    }, [])

    if (!story) {
        return <main className={clsx(style.main_board, 'no-item')}>시나리오를 선택 해주세요</main>
    }

    const TextUpdaterNode = () => {
        const onChange = useCallback((evt: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
            console.log(evt.target.value)
        }, [])

        return (
            <div className="text-updater-node">
                <div>
                    <label htmlFor="text">Text:</label>
                    <input id="text" name="text" onChange={onChange} className="nodrag" />
                </div>
            </div>
        )
    }
    const nodeTypes = {
        textUpdater: TextUpdaterNode,
    }

    return (
        <main className={style.main_board}>
            <StoryHeader className={style.top} {...story} />
            <div style={{ flex: 1 }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    onNodesChange={onNodeChange}
                    onEdgesChange={onEdgeChange}
                    onConnect={onConnect}
                >
                    <Background />
                    <Controls />
                    <Panel position="bottom-right">
                        <h1>Panel test</h1>
                    </Panel>
                </ReactFlow>
            </div>
        </main>
    )
}
export default MainBoard
