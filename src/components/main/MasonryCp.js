import React from 'react';
import Masonry from 'react-masonry-css';

import '../../assets/css/masonry.css';
import img1 from '../../assets/img/1-etcPf.jpg';
import img2 from '../../assets/img/2-etcPf.jpg';
import img3 from '../../assets/img/3-design.jpg';
import img4 from '../../assets/img/11-design.jpg';
import img5 from '../../assets/img/5-design.jpg';
import img6 from '../../assets/img/5-etcPf.jpg';
import img7 from '../../assets/img/6-etcPf.jpg';
import img8 from '../../assets/img/7-etcPf.jpg';
import img9 from '../../assets/img/7-design.jpg';
import img10 from '../../assets/img/8-etcPf.jpg';

const MasonryCp = () => {
  return (
    <Masonry
      breakpointCols={2}
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
      <div>
        <img src={img4} alt="img" className="w-100" />
      </div>
      <div>
        <img src={img5} alt="img" className="w-100" />
      </div>
      <div>
        <img src={img6} alt="img" className="w-100" />
      </div>
      <div>
        <img src={img7} alt="img" className="w-100" />
      </div>
      <div>
        <img src={img8} alt="img" className="w-100" />
      </div>
      <div>
        <img src={img9} alt="img" className="w-100" />
      </div>
      <div>
        <img src={img10} alt="img" className="w-100" />
      </div>
    </Masonry>
  );
};

export default MasonryCp;
