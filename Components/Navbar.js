import Image from 'next/image';
import logo from '@/public/assets/navbar/logo.svg';
import search from '@/public/assets/navbar/search.svg';
import create from '@/public/assets/navbar/create.svg'
import bell from '@/public/assets/navbar/bell.svg'
import msg from '@/public/assets/navbar/msg.svg'
import wishlist from '@/public/assets/navbar/wishlist.svg'
import cart from '@/public/assets/navbar/cart.svg'
import balance from '@/public/assets/navbar/balance.svg'
import menu from '@/public/assets/navbar/menu.png'

const Navbar = () => {
  return (
    <nav>
        <div className='m-5 flex justify-between'>
            <div>
                <Image src={logo}></Image>
            </div>
            <div className=''>
                <ul className='flex gap-2 items-center'>
                    <li><Image src={search}></Image></li>
                    <li><Image src={create}></Image></li>
                    <li><Image src={bell}></Image></li>
                    <li><Image src={msg}></Image></li>
                    <li><Image src={wishlist}></Image></li>
                    <li><Image src={cart}></Image></li>
                    <li><Image src={balance}></Image></li>
                    <li><Image src={menu}></Image></li>

                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar