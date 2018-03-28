import React from 'react'
import styled from 'styled-components';

const CardItem = (props) => {
  return (
    <Box>
      <TimeBox>20h:40m:20s</TimeBox>
      <TitleBox>
        <TitleBoxName>Onepiece</TitleBoxName>
        <TitleBoxPrice> - 2000฿฿</TitleBoxPrice>
      </TitleBox>
      <OwnerBox>
        <OwnerPicture src="http://media.ufc.tv/fighter_images/1USMAN_KAMARU.png" alt="" />
        <OwnerProfile>
          <div className="owner-name">Kukiat Wangtaphan</div>
          <div className="owner-credit">credit : 900</div>
        </OwnerProfile>
      </OwnerBox>
      <Hr/>
      <PictureBox>
        <img className="picture-item" src="http://cd.lnwfile.com/u3y477.jpg" alt="" />
      </PictureBox>
    </Box>
  )
}

const Box = styled.div`
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  background: rgb(248, 246, 246);
  height: 19em;
  cursor: pointer;
  border-radius: 3px; 
  padding: 12px;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.16), 0 1px 6px 0 rgba(0,0,0,.23);
  }
`

const Hr = styled.hr`
  margin:10px 0px 10px 0px;
  border-top: 1px solid #eee;
`

const TimeBox = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #131212;
`

const TitleBox = styled.div`
  text-align: center;
  margin-top: 5px;
`

const TitleBoxName = styled.span`
  font-size: 18px;
  color: #35569b;
  font-weight: 600;
`

const TitleBoxPrice = styled.span`
  color: #e98819;
  font-size: 16px;
  font-weight: 600;
`

const OwnerBox = styled.div`
  display: flex;
  margin-top: 5px;
`

const OwnerPicture = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`

const OwnerProfile = styled.div`
  margin-left: 10px;
  .owner-name {
    font-size: 14px;
    color: #131212;
    font-weight: 400;
  }
  .owner-credit {
    color: #9e9e9e;
    font-size: 12px;
    font-weight: 200;
  }
`
const PictureBox = styled.div`
  text-align: center;
  margin-top: 5px;
  .picture-item {
    width: 100%;
    height: auto;
    border-radius: 3px;
  }
`
export default CardItem