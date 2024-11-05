// StickyAndAbsoluteComponent.jsx
import React from 'react';

const StickyAndAbsoluteComponent = () => {
  return (
    <div className="relative h-screen">
      {/* Absolute Positioned Element */}
      <div className="absolute top-0 left-0 h-20 w-1 bg-red-400">
        Absolute Positioned
      </div>

      {/* Sticky Positioned Element */}
      <div className="sticky top-10 bg-blue-400 text-white p-4">
        Sticky Positioned
      </div>

      <div className="mt-32 p-4">
        <p>Scroll down to see the sticky behavior.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula ex vitae sem blandit, ut rhoncus felis convallis.</p>
        {/* Add more content here to enable scrolling */}
      </div>
    </div>
  );
};

export default StickyAndAbsoluteComponent;
