// import { useState } from 'react';
// import anika from './assets/anika.jpg';
// import background from './assets/background.jpg';
// import front from './assets/Front.webp';

// function App() {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
//     <div className="w-full max-w-7xl m-auto p-10  ">
//       <div className=" ">
//         {open ? (
//           <div className="relative h-full">
//             <img src={background} className="w-full h-full" alt="" />
//             <div className="lg:flex block justify-between absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-items-center w-full max-w-4xl">
//               <div className="w-[400px] ">
//                 <img
//                   src={anika}
//                   className="h-[400px] w-[600px] p-2 rounded-full border-4 shadow-md border-white"
//                   alt=""
//                 />
//               </div>
//               <div className=" bg-slate-100 w-[450px] p-4 rounded shadow-2xl">
//                 <div className="">
//                   <h1 className="text-3xl text-justify text-gray-600">
//                     May Allah bless you with happiness, peace, and prosperity
//                     throughout the life.
//                   </h1>
//                 </div>
//                 <h1 className="flex text-3xl my-10 font-bold text-gray-700 justify-end">
//                   Happy birthday Anika
//                 </h1>
//               </div>
//             </div>
//             <div className=" flex -my-20 justify-center">
//               <button
//                 onClick={handleClose}
//                 className=" bg-white text-gray-600 py-2 px-4 rounded shadow flex justify-center text-center"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="m-auto w-[500px] h-[600px] relative shadow-md p-6 rounded-md">
//             <img
//               src={front}
//               className="m-auto h-full w-full rounded-md"
//               alt=""
//             />
//             <div className="  absolute  top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center">
//               <h1 className="text-3xl my-7 font-bold ml-24 text-violet-900 shadow-inner">
//                 Anika
//               </h1>
//               <button
//                 onClick={handleOpen}
//                 className=" font-bold ml-24 bg-violet-900 text-white px-3 py-2 rounded"
//               >
//                 Open it
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import anika from './assets/anika.jpg';
import background from './assets/background.jpg';
import front from './assets/Front.webp';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-10">
      {open ? (
        <div className=" background ">
          <div className=" inset-0 flex flex-col lg:flex-row justify-center items-center p-4 space-y-4 lg:space-y-0 lg:space-x-4">
            <img
              src={anika}
              className="max-w-xs lg:max-w-none h-auto lg:h-[400px] w-full lg:w-[600px] rounded-full border-4 border-white shadow-md"
              alt="Anika"
            />
            <div className="bg-slate-100 p-4 rounded shadow-2xl flex flex-col items-center text-center max-w-sm lg:max-w-none">
              <h1 className="text-xl lg:text-3xl text-gray-600">
                May Allah bless you with happiness, peace, and prosperity
                throughout your life.
              </h1>
              <h2 className="text-2xl lg:text-3xl my-4 lg:my-10 font-bold text-gray-700">
                Happy birthday Anika
              </h2>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleClose}
              className="bg-white text-gray-600 py-2 px-4 rounded shadow"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="m-auto w-full max-w-xl lg:max-w-md h-[500px] relative shadow-md p-6 rounded-md">
          <img
            src={front}
            className="m-auto h-full w-full rounded-md"
            alt="Front of Card"
          />
          <div className="absolute inset-x-0 bottom-24 left-20 text-center">
            <h1 className="text-2xl lg:text-3xl font-bold text-violet-900">
              Anika
            </h1>
            <button
              onClick={handleOpen}
              className="mt-4 bg-violet-900 text-white px-3 py-2 rounded text-lg font-bold"
            >
              Open it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
