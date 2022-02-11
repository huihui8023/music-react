import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons'

import "./index.less"

import { headerLinks } from "@/common/local-data"

export default memo(function MyHeader() {
  const showSelectItem = (item, index) => {
    var patt1 = new RegExp("/");
    if (patt1.test(item.link)) {
      return <NavLink to={item.link}>
        {item.title}
      </NavLink>
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <div className='header-wrap'>
      <div className="header-wrap-content wrap-v1">
        <div className="header-wrap-content-left">
          <a href="/#" className='sprite_01 logo'></a>
          <div className='select-list'>
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className='select-item'>
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
        </div>
        <div className="header-wrap-content-right">
          <Input className='search' placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className='center'>创作者中心</div>
        </div>
      </div>
      <div className="header-wrap-divider"></div>
    </div>
  )
})
