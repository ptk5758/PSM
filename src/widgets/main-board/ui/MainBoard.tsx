import { useWorkspace } from "@/app/hooks"

function MainBoard() {
    const { storyId } = useWorkspace()
    return <main>{storyId ?? "시나리오를 선택 해주세요"}</main>
}
export default MainBoard
