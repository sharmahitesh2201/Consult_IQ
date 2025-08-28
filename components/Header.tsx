import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      <div className="flex items-center space-x-3">
        {/* Placeholder for notifications or other actions */}
        {/* <button className="p-2 rounded-full hover:bg-gray-100">
          <BellIcon className="w-6 h-6 text-gray-500" />
        </button> */}
        <img
          src="https://picsum.photos/seed/useravatar/40/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-red-500"
        />
      </div>
    </header>
  );
};

// Placeholder BellIcon if needed
// const BellIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
//   </svg>
// );


export default Header;