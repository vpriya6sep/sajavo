import React from 'react';

const AlternatingGrid = () => {
  const alternatingItems = [
    { 
      text: "From playful pastels to statement sarees rent your pre-wedding magic", 
      image: "/src/assets/card-1.png",
      type: "image-top"
    },
    { 
      text: "Experience couture without commitment. Because moments deserve more than a price tag", 
      image: "/src/assets/card-2.png",
      type: "text-top"
    },
    { 
      text: "Shine brighter this Diwali rent your festive glow.", 
      image: "/src/assets/card-3.png",
      type: "image-top"
    },
    { 
      text: "Dress up for memories that matter.", 
      image: "/src/assets/card-4.png",
      type: "text-top"
    }
  ];

  return (
    <>
      <section className="alternating-grid container section-padding">
        {alternatingItems.map((item, index) => (
          <div key={index} className={`alt-card ${item.type}`}>
            {item.type === 'image-top' ? (
              <>
                <div className="alt-image">
                  <img src={item.image} alt="Fashion" />
                </div>
                <p className="alt-text">{item.text}</p>
              </>
            ) : (
              <>
                <p className="alt-text">{item.text}</p>
                <div className="alt-image">
                  <img src={item.image} alt="Fashion" />
                </div>
              </>
            )}
          </div>
        ))}
      </section>
      {/* Spacer for visual separation */}
      <div style={{ height: '8rem' }}></div>
    </>
  );
};

export default AlternatingGrid;
