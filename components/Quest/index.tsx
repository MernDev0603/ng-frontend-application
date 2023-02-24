import React from 'react'
import QuestCard from '@/components/QuestCard';
import { MainContainer, InnerContainer } from './styles'

interface PropsType {
    quests?: any
}

export default function Quest(props: PropsType) {
    const { quests } = props

    return (
       <MainContainer>
            <InnerContainer>
                {quests?.map((quest: any, index: any) => (
                    <div key={index}>
                        <QuestCard quest={quest} />
                    </div>
                ))}
            </InnerContainer>
       </MainContainer>
    )
}