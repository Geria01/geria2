import { TailSpin } from 'react-loader-spinner';

const FullPageLoader = () => {
  return (
    <div className='relative items-center block max-full h-screen p-6 bg-white border border-gray-100'>
      <div role='status' className='absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2'>
        <TailSpin
          height="50"
          width="50"
          color="#7C8493"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}

export default FullPageLoader;