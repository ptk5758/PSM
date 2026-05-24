import { useContext } from 'react'
import { WorkspaceContext } from '../contexts/workspace/workspace-context'

export const useWorkspace = () => useContext(WorkspaceContext)