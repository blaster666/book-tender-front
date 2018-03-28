import React from 'react'
import styled from 'styled-components';

const CardSideBar = (props) => {
  return (
    <BoxDetail>
      <div className="detail-time">20h:40m:20s</div>
      <div className="detail-title">Lorem, ipsum.</div>
      <div className="detail-desc">Lorem, ipsum.</div>
      <div className="detail-picture">Lorem, ipsum.</div>
      <div className="detail-comment">Lorem, ipsum.</div>
    </BoxDetail>
  )
}

const BoxDetail = styled.div`
  background: rgb(248, 246, 246);
  position: fixed;
  border-radius: 3px;
  height: 500px;
  width: 25%;
  float: left;
`

export default CardSideBar