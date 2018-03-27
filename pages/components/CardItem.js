import React from 'react'

const BoxItem = (props) => {
  return (
    <div className="box-item">
      <div className="time-box">20h:40m:20s</div>
      <div className="title-box mgt5">
        <span className="title-box-name">Onepiece</span>
        <span className="title-box-price">- 2000฿฿</span>
      </div>
      <div className="owner-box mgt5">
        <div className="owner-picture"><img className="owner-picture" src="http://media.ufc.tv/fighter_images/1USMAN_KAMARU.png" alt="" /></div>
        <div className="owner-profile">
          <div className="owner-name">Kukiat Wangtaphan</div>
          <div className="owner-credit">credit : 900</div>
        </div>
      </div>
      <hr className="hr-c" />
      <div className="picture-box mgt5">
        <img className="picture-item" src="http://cd.lnwfile.com/u3y477.jpg" alt="" />>
      </div>
    </div>
  )
}