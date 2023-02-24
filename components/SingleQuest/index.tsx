import React from 'react'
import Link from 'next/link';
import { useTheme } from 'styled-components'
import { 
  MainContainer, 
  QuestCardWrapper, 
  TitleWrapper,
  QuestCardContent,
  QuestCardTextWrapper, 
  InnerCardContent, 
  SwordIconWrapper,
  DescriptionText,
  FooterTitleText,
  FooterWrapper } from './styles'
import { SwordIconUp, SwordIconDown, RightBar, LeftBar } from '../SvgIcons'
import { Button } from '../Shared';

export default function SingleQuest() {
    const theme = useTheme()

    const quest = { 
      id : 1, 
      skillTree: 'Solidity', 
      skill: 'Data Structures & Algorithms', 
      title: 'DELLEGATE CALL DETECTION', 
      difficulty: 2, 
      experience: 1200, 
      gold: 6, 
      type: 'build', 
      cover: '/image/cover.png', 
      description: 'Trading of cryptoassets in DeFi relies on new and unique matching mechanisms. One widely used mechanism in traditional finance is the centralised limit order book, which entails keeping electronic records of all outstanding orders. Likewise, Trading of cryptoassets in DeFi relies on new and unique matching mechanisms.', 
      reward: { 
        experience: 1200, 
        gold: 6
      } 
    }
      

    return (
      <MainContainer>
        <QuestCardWrapper>
            <img src="/image/single-quest.png" alt='cover' />
            <TitleWrapper>
              <LeftBar />
              <h1>{quest.title}</h1>
              <RightBar />
            </TitleWrapper>
            
            <QuestCardContent>
              <QuestCardTextWrapper>
                <InnerCardContent>
                  <div>
                    <h2>Skill tree</h2>
                    <h2>Skill</h2>
                  </div>
                  <div>
                    <p>{quest.skillTree}</p>
                    <p>{quest.skill}</p>
                  </div>
                </InnerCardContent>

                <InnerCardContent>
                  <div>
                    <h2>Difficulty</h2>
                    <h2>Quest type</h2>
                  </div>
                  <div>
                    <SwordIconWrapper>
                        <SwordIconUp size={13} />
                        <SwordIconUp size={13} />
                        <SwordIconDown size={13} />
                        <SwordIconDown size={13} />
                        <SwordIconDown size={13} />
                    </SwordIconWrapper>
                    <p>{quest.type}</p>
                  </div>
                </InnerCardContent>
              </QuestCardTextWrapper>

              <DescriptionText>
                <p>{quest.description}</p>
              </DescriptionText>

              <FooterTitleText>QUEST REWARDS</FooterTitleText>

              <FooterWrapper>
                <div>
                  <img src='/image/footer-mark.png' alt="footer-mark" />
                </div>
                <div>
                  <Button>GO BACK</Button>
                </div>
              </FooterWrapper>
            </QuestCardContent>
        </QuestCardWrapper>
      </MainContainer>
    )
}