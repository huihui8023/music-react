import React, { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Carousel } from 'antd';

import { getRecommendBannersAction } from "../../store/actionCreators"

import "./index.less"

export default memo(function MyCarousel() {
  const [bgImage, setBgImage] = useState("")

  const { banners } = useSelector(state => ({
    banners: state.recommend.topBanners
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecommendBannersAction())
  }, [dispatch])

  const carouselRef = useRef()

  const beforeChange = (from, to) => {
    const res = banners[from] ? banners[to].imageUrl + "?imageView&blur=40x20" : banners[0].imageUrl + "?imageView&blur=40x20"
    setBgImage(res)
  }

  return (
    <div className='carousel-wrap' style={{ background: `url(${bgImage}) center center/6000px` }}>
      <div className="center wrap-v2">
        <Carousel ref={carouselRef} effect="fade" className='carousel ' autoplay='true' beforeChange={beforeChange}>
          {
            banners.map((item, index) => (
              <div key={item.imageUrl} className='wrap-v2'>
                <img src={item.imageUrl} alt={item.typeTitle} />
              </div>
            ))
          }
        </Carousel>
        <div className='download'></div>
        <div className="control">
          <button className="btn left" onClick={e => carouselRef.current.next()}></button>
          <button className="btn right" onClick={e => carouselRef.current.next()}></button>
        </div>
      </div>

    </div>
  );
});
