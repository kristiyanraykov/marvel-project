import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='text-2xl text-center m-6'>
        Which Marvel Character is the best?
      </div>
      <div className='border rounded p-8 flex justify-between max-w-2xl items-center'>
        <div className='w-16 h-16 bg-red-200'></div>
        <div className='p-8'>vs</div>
        <div className='w-16 h-16 bg-red-200'></div>
      </div>
    </div>
  );
};

export default Home;
