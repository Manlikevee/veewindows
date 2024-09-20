import React from 'react'

const Footerlinks = ({handleClick}) => {
    const images = [
        'Logo.png',
        'Group 7.png',
        'Group 6.png',
        'Group 5.png',
        'Group 3.png',
        'Microsoft_Store.png',
        'Steam_icon_logo.png'
    ];
  return (
    <div className="image-container" style={styles.container}>
    {images.map((image, index) => (
        <div className="footimg" onClick={handleClick} key={index}>
        <img
            key={index}
            src={image}
            alt={image.split('.')[0]}
            style={styles.image}
        />
        </div>

    ))}
</div>
  )
}
const styles = {
    container: {
        display: 'flex',
      
        gap: '20px'
    },
    image: {
        width: '24px', // Set your desired width
        height: '24px' // Maintain aspect ratio
        
    }
};
export default Footerlinks