import React, { useState } from 'react';
import './ColorSwitcher.css';
import BlindCo from '../../assets/BlindCo.svg';

interface ColorBlindnessType {
  type: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  filter: string;
}

const colorBlindnessTypes: ColorBlindnessType[] = [
  { type: 'normal', filter: '' },
  { type: 'protanopia', filter: 'grayscale(0.5) sepia(0.5)' },
  { type: 'deuteranopia', filter: 'grayscale(0.3) contrast(1.2)' },
  { type: 'tritanopia', filter: 'grayscale(0.7) hue-rotate(120deg)' },
];

const ColorSwitcher: React.FC = () => {
  const [colorBlindnessType, setColorBlindnessType] = useState<ColorBlindnessType>(colorBlindnessTypes[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleColorBlindnessChange = (type: ColorBlindnessType['type']) => {
    const selectedType = colorBlindnessTypes.find((t) => t.type === type);
    if (selectedType) {
      setColorBlindnessType(selectedType);
      document.body.style.filter = selectedType.filter;
    }
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="color-switcher">
      <button className="color-blindness-button" onClick={toggleDropdown}>
        {colorBlindnessType.type}<img src={BlindCo} alt='icon-BlindCo'/>
      </button>
      
      {isOpen && (
        <>
          <div className="overlay" onClick={() => setIsOpen(false)} />
          <ul className="dropdown">
          <div className='dropdownText'>
          <h1>BlindCo</h1>
          <p>Esse é o BlindCo o projeto que ajuda você no seu cotidiano!<br></br><br></br> Escolha abaixo a opção que se encaixa na sua dificulade.</p>
          </div>
            {colorBlindnessTypes.map((type) => (
            <>
            
                <li key={type.type}>
                <div className='optionButton'>
                    <button
                        className={`color-blindness-button ${colorBlindnessType.type === type.type ? 'active' : ''}`}
                        onClick={() => handleColorBlindnessChange(type.type)}
                    >
                        {type.type}
                    </button>
                </div>
                </li>
            </>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ColorSwitcher;