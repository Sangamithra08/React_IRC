import '../Assests/Css/Home.css'
import { useState } from 'react';

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleTouchStart = (index) => {
    setHoveredIndex(index === hoveredIndex ? null : index);
  };

  const cardsData = [
    {
      frontImage: 'https://www.decoraid.com/wp-content/uploads/2018/07/Luxurious-interior-design-living-room-and-fireplace-in-a-beautiful-house-scaled.jpeg',
      title: 'Modern Interior Design Style',
      description: 'The home should be the treasure chest of living',
    },
    {
      frontImage: 'https://www.decoraid.com/wp-content/uploads/2021/05/transitional-interior-design-styles-2500x1666.jpg',
      title: 'Contemporary Interior Design Style',
      description: 'The home should be the treasure chest of living',
    },
    {
      frontImage: 'https://i.pinimg.com/originals/4f/04/35/4f0435e16129b1468ee3a95deea7af33.jpg',
      title: 'Art Moderne Interior Design Style',
      description: 'The home should be the treasure chest of living',
    },
    {
      frontImage: 'https://thedestinyformula.com/wp-content/uploads/2018/07/interior-paint-color-ideas.jpg',
      title: 'Mid-Century Interior Design Style',
      description: 'The home should be the treasure chest of living',
    },
    {
      frontImage: 'https://i.pinimg.com/originals/82/a5/f4/82a5f49b254c118f90702d53a8fe9f3c.jpg',
      title: 'Minimalist Interior Design Style',
      description: 'The home should be the treasure chest of living',
    },
    {
      frontImage: 'https://cdn.decorilla.com/online-decorating/wp-content/uploads/2019/06/contemporary-interior-design-style.jpg',
      title: 'Scandinavian Interior Design Style',
      description: 'The home should be the treasure chest of living',
    },
    {
      frontImage: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2018/10/modern-interior-designer-nyc.jpg',
      title: 'Shabby Chic Interior Design Style',
      description: 'The home should be the treasure chest of living',
    },
    {
      frontImage: 'http://thewowstyle.com/wp-content/uploads/2015/01/InteriorWallpapers-38.jpg',
      title: 'Farmhouse Interior Design Style',
      description: 'The home should be the treasure chest of living',
    },
  ];
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='contain'>
        <div className='text-home'>
          <h2>Elevate Your Home, Inspire Living</h2>
          <p className='inner-text'>Transform your space with our personalized interior design services, blending modern elegance and individual style. From residential makeovers to commercial transformations, we specialize in crafting timeless and sophisticated environments. Elevate your surroundings with us.</p>
        </div>
        <div className='img'>
          <img
            src="https://i0.wp.com/www.shedblog.co.uk/wp-content/uploads/2014/10/FAIL_blc.gif?resize=500%2C384"
            alt="no img"
          />
        </div>
      </div>
      <h1>Our achievements...</h1>

      <div className="main-content">
      
        <div className="achievement-container">
          <img className="dash-img" src="http://clipart-library.com/image_gallery/n751255.png" alt="Achievement Image" ></img>
          <p>With an unwavering commitment to excellence, our company has successfully completed over 500 distinctive home interior projects, showcasing our dedication to quality and innovation.</p>
        </div>
        <div className="achievement-container">
          <img className="dash-img" src="https://covers.magazinecloner.com/covers/212097/mid/0000.jpg" alt="Achievement Image" />
          <p>Our company's magazines showcase the latest trends and innovations in home interior design, providing inspiration for creating personalized and stylish living spaces.</p>

        </div>
        <div className="achievement-container">
          <img className="dash-img" src="https://pngimg.com/uploads/award/award_PNG58.png" alt="Achievement Image" />
          <p>Acknowledged as the "Best Interior Design Company" in 2022, our commitment to creating aesthetically pleasing and functional spaces has been recognized by industry experts.</p>
        </div>
      </div>
      
    </>
  )
}
export default Home;