import React, { useState } from 'react';
import { CiGrid42 } from "react-icons/ci";
import { FaList } from "react-icons/fa";
import ListView from './ListView';
import GridView from './GridView';

function ToggleButton() {
  const [activeButton, setActiveButton] = useState('list'); // Default to 'list'

  return (
    <div>
      {/* Toggle Buttons */}
      <div className='flex ml-4 mt-4 items-center justify-between'>
        <div>
          <button
            className={`border-2 px-3 py-2 rounded-l-lg text-2xl ${
              activeButton === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700'
            }`}
            onClick={() => setActiveButton('list')}
          >
            <FaList />
          </button>

          <button
            className={`border-2 px-3 py-2 rounded-r-lg text-2xl ${
              activeButton === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700'
            }`}
            onClick={() => setActiveButton('grid')}
          >
            <CiGrid42 />
          </button>
        </div>
        <div>
          <button className='border rounded-2xl px-3 py-2 mr-4 flex bg-blue-600 text-white'>
            +Add Lead
          </button>
        </div>
      </div>

      {/* Conditional Rendering */}
      <div className="mt-4">
        {activeButton === 'list' && <ListView />}
        {activeButton === 'grid' && <GridView />}
      </div>
    </div>
  );
}

export default ToggleButton;
