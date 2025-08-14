import { Link } from 'react-router-dom'
import path from 'src/constants/path'

export default function Product() {
  return (
    <Link to={path.home}>
      <div className='bg-white shadow rounded-sm hover:translate-y-[-0.0625rem] hover:shadow-md duration-100 transition-transform'>
        <div className='w-full pt-[100%] relative'>
          <img
            src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lupvwpc810cyf9_tn'
            alt=''
            className='absolute top-0 left-0 bg-white w-full h-full object-cover'
          />
        </div>
        <div className='p-2 overflow-hiden'>
          <div className='min-h-[1.75rem] line-clamp-2 text-sm'>
            Thắt Lưng Nam Khóa Tự Động Cao Cấp Mặt Xoay Chính Hãng , Dây Nịt Nam Phong Cách Hàn Quốc
          </div>
          <div className='flex items-center mt-3'>
            <div className='line-through max-w-[50%] text-gray-500 truncate'>
              <span className='text-xs'>₫</span>
              <span>5.000</span>
            </div>
            <div className='text-orange truncate'>
              <span className='text-xs'>₫</span>
              <span>5.000</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
