import React from 'react';
import './Masonry.css';

const Masonry = ({ items }) => {
  return (
    <div className="masonry-wrapper">
      <div className="masonry-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className="masonry-item"
            style={{
              height: `${item.height}px`,
              gridRowEnd: `span ${Math.ceil(item.height / 10 + 5)}`
            }}
          >
            <img 
              src={item.img} 
              alt="" 
              className="masonry-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Masonry;