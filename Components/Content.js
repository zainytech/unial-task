import Image from 'next/image';

import details from '@/public/assets/content/section1/details.svg';
import comments from '@/public/assets/content/section1/comments.svg';
import reactions from '@/public/assets/content/section1/reactions.svg';
import share from '@/public/assets/content/section1/share.svg';
import ratings from '@/public/assets/content/section1/ratings.svg';

const Content = () => {
  return (
    <>
        <div className='m-5'>
            <div className=''>
                <ul className='flex gap-10 justify-center text-center text-gray-700 text-sm'>
                    <li><Image className="m-auto inline-flex mr-2" src={details}></Image>Details</li>
                    <li><Image className="m-auto inline-flex mr-2" src={comments}></Image>Comments</li>
                    <li><Image className="m-auto inline-flex mr-2" src={reactions}></Image>Reactions</li>
                    <li><Image className="m-auto inline-flex mr-2" src={share}></Image>Share</li>
                    <li><Image className="m-auto inline-flex mr-2" src={ratings}></Image>Ratings</li>
                </ul>
            </div>
        </div>
        {/* second section starts*/}
        <section>
            <div className='m-5 grid grid-cols-4'>
                <div className='p-5 border-2 rounded-lg col-span-3 mr-5'>
                    <span className='text-gradient text-2xl font-bold inline-flex'>Comments</span>
                    <div className='h-2 w-auto border-t border-red-700'></div>
                    
                </div>
                <div className='col-span-1 p-5 border-2 rounded-lg'>
                    Bye
                </div>
            </div>
        </section>
        {/* second section ends*/}

    </>
  )
}

export default Content