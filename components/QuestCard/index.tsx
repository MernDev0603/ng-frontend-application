import React from 'react'
import Link from 'next/link';
import { useTheme } from 'styled-components'
import { QuestCardWrapper, QuestCardContent, InnerCardContent, SwordIconWrapper } from './styles'
import { SwordIconUp, SwordIconDown } from '../SvgIcons'

export default function QuestCard(props: any) {
    const { quest } = props
    const theme = useTheme()

    return (
      // <Link href={`/quest/${quest.id}`}>
        <QuestCardWrapper>
            <img src={quest.cover} alt='cover' />
            <h1>{quest.title}</h1>
            <QuestCardContent>
              <InnerCardContent>
                <div>
                  <h2>Skill tree</h2>
                  <h2>Skill</h2>
                  <h2>Type</h2>
                </div>
                <div>
                  <p>{quest.skillTree}</p>
                  <p>{quest.skill}</p>
                  <p>{quest.type}</p>
                </div>
              </InnerCardContent>

              <InnerCardContent>
                <div>
                  <h2>Difficulty</h2>
                  <h2>Experience</h2>
                  <h2>Gold</h2>
                </div>
                <div>
                  <SwordIconWrapper>
                      <SwordIconUp size={11} />
                      <SwordIconUp size={11} />
                      <SwordIconDown size={11} />
                      <SwordIconDown size={11} />
                      <SwordIconDown size={11} />
                  </SwordIconWrapper>
                  <p>{quest.experience}</p>
                  <p>{quest.gold}</p>
                </div>
              </InnerCardContent>
            </QuestCardContent>
        </QuestCardWrapper>
      // </Link>
    )
}