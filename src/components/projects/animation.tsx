"use client"
import styles from "./animation.module.css";

const ColorPalette = () => {
  return (
    <div className={styles.paletteContainer}>
      <div className={styles.colorTrack}>
        {/* Double the colors for seamless looping */}
        {[...colorSet, ...colorSet].map((color, index) => (
          <div 
            key={index} 
            className={styles.colorBlock}
            style={{ 
              backgroundColor: color,
              borderBottom: index % colorSet.length === 0 ? 'none' : '1px  #000'
            }}
          />
        ))}
      </div>
    </div>
  );
};

const colorSet = [
  '#ff0000', // Red
  '#ff4500', // OrangeRed
  '#ffa500', // Orange
  '#ffff00', // Yellow
  '#adff2f', // GreenYellow
  '#00ff00', // Green
  '#00ffff', // Cyan
  '#0000ff', // Blue
  '#8a2be2', // BlueViolet
  '#ff00ff', // Magenta
  '#ffc0cb'  // Pink
];

export default ColorPalette;