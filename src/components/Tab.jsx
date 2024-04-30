import { useState } from 'react';

export default function Tabs({ data }) {
  const [active, setActive] = useState(data[0].value);

  return (
    <div className='p-4'>
      <div className='flex justify-center mb-3 gap-2'>
        {data.map(({ label, value }) => {
          return (
            <button
              key={value}
              className={`btn ${
                active === value ? 'btn-primary text-[#fff]' : ''
              }`}
              onClick={() => setActive(value)}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className='p-4 text-center'>
        <p>{data.find((item) => item.value === active).content}</p>
      </div>
    </div>
  );
}
