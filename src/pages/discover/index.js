import React, { memo } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { renderRoutes } from 'react-router-config'

import { dicoverMenu } from "@/common/local-data"

import "./index.less"

export default memo(function MyDiscover(props) {
  const { route } = props
  return (
    <div className='discover-wrap'>
      <div className="discover-wrap-menu ">
        {
          dicoverMenu.map((item, index) => (
            <div className='discover-wrap-menu-item' key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          ))
        }
      </div>

      {renderRoutes(route.routes)}
    </div>
  )
})
