/**
 * 스토리 인터페이스
 */
export interface Story {
    /**
     * Primary Key
     */
    id: string

    /**
     * 제목
     */
    subject: string

    /**
     * 설명
     */
    description?: string

    /**
     * 생성일
     */
    createAt: Date

    /**
     * 수정일
     */
    updateAt: Date
}
