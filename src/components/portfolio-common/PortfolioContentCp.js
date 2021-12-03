import React from 'react';
import Masonry from 'react-masonry-css';
import styled from '../../style';

import '../../assets/css/masonry.css';
import img1 from '../../assets/img/3-design.jpg';
import img2 from '../../assets/img/3-design.jpg';
import img3 from '../../assets/img/3-design.jpg';

const Wrapper = styled.div`
  padding: 0 2.5em;
`;

const PortfolioContentCp = () => {
  return (
    <Wrapper>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div>
          <img src={img1} alt="img" className="w-100" />
        </div>
        <div>
          <img src={img2} alt="img" className="w-100" />
        </div>
        <div>
          <img src={img3} alt="img" className="w-100" />
        </div>
      </Masonry>
    </Wrapper>
  );
};

export default PortfolioContentCp;
