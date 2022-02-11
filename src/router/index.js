import React from "react"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

import MyDiscover from "@/pages/discover"
import MyRecommend from "@/pages/discover/component/recommend"
import MyRadio from "@/pages/discover/component/radio"
import MyRanking from "@/pages/discover/component/ranking"
import MySinger from "@/pages/discover/component/singer"
import MySongs from "@/pages/discover/component/songs"
import MyAlbum from "@/pages/discover/component/album"
import MyFriend from "../pages/friend"
import MyMine from "../pages/mine"

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: MyDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: MyRecommend
      },
      {
        path: "/discover/radio",
        component: MyRadio
      },
      {
        path: "/discover/ranking",
        component: MyRanking
      },
      {
        path: "/discover/songs",
        component: MySinger
      },
      {
        path: "/discover/singer",
        component: MySongs
      },
      {
        path: "/discover/album",
        component: MyAlbum
      }
    ]
  },
  {
    path: "/mine",
    component: MyMine
  },
  {
    path: "/friend",
    component: MyFriend
  },
]

export default routes;