import React, { memo } from 'react';
import MyCarousel from "./component/carousel"
import HotRecommend from "./component/hotRecommend"

// import "./index.less"

function MyRecommend(props) {
  return (
    <div className='recommend'>
      <MyCarousel />
      <HotRecommend />
    </div>
  );
};

export default memo(MyRecommend)

// function MyRecommend(props) {
//   const { getBanners, banners } = props

//   useEffect(() => {
//     getBanners()
//   }, [])

//   return (
//     <div className='recommend'>
//       MyRecommend {banners.length}
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   banners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners() {
//     dispatch(getRecommendBannersAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(MyRecommend))


