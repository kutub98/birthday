import { useState } from 'react';
import anika from './assets/anika.jpg';
import background from './assets/background.jpg';
import front from './assets/Front.webp';
// import Lottie from 'react-lottie';
// import animation from '../animate.json';
function App() {
  const [open, setOpen] = useState(false);

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animation,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice',
  //   },
  // };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="w-full max-w-7xl m-auto p-10  ">
      <div className=" ">
        {open ? (
          <div className="relative h-full">
            <img src={background} className="w-full h-full" alt="" />
            <div className="lg:flex block justify-between absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-items-center w-full max-w-4xl">
              <div className="w-[400px] ">
                <img
                  src={anika}
                  className="h-[400px] w-[600px] p-2 rounded-full border-4 shadow-md border-white"
                  alt=""
                />
              </div>
              <div className=" bg-slate-100 w-[450px] p-4 rounded shadow-2xl">
                <div className="">
                  <h1 className="text-3xl text-justify text-gray-600">
                    May Allah bless you with happiness, peace, and prosperity
                    throughout the life.
                  </h1>
                </div>
                <h1 className="flex text-3xl my-10 font-bold text-gray-700 justify-end">
                  Happy birthday Anika
                </h1>
              </div>
            </div>
            <div className=" flex -my-20 justify-center">
              <button
                onClick={handleClose}
                className=" bg-white text-gray-600 py-2 px-4 rounded shadow flex justify-center text-center"
              >
                Close
              </button>
            </div>
            {/* <div className="flex ">
              <Lottie
                className="justify-end"
                options={defaultOptions}
                height={400}
                width={400}
              />
            </div> */}
          </div>
        ) : (
          <div className="m-auto w-[500px] h-[600px] relative shadow-md p-6 rounded-md">
            <img
              src={front}
              className="m-auto h-full w-full rounded-md"
              alt=""
            />
            <div className="  absolute  top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center">
              <h1 className="text-3xl my-7 font-bold ml-24 text-violet-900 shadow-inner">
                Anika
              </h1>
              <button
                onClick={handleOpen}
                className=" font-bold ml-24 bg-violet-900 text-white px-3 py-2 rounded"
              >
                Open it
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
