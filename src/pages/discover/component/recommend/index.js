import React, { memo } from 'react';
import MyCarousel from "./component/carousel"

// import "./index.less"

function MyRecommend(props) {
  return (
    <div className='recommend'>
      <MyCarousel />
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


