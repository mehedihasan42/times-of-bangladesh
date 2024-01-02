import image from '@/assets/tree-from-dhaka.jpg'
import Categories from '@/components/HomePage/categories'
import Image from 'next/image'
import ProductPage from './products/page'
import PopularProduct from '@/components/HomePage/popularProduct'
import { Suspense } from 'react'

/*export const revalidate = false*/  //data will be load staticaly [revalidation is false]
/*export const revalidate = 0*/      //server side render [dynamic generation]

export default function Home() {
  return (
    <main className='font-semiBold'>
      {/* <Image width={500} height={340} src='/tree-from-dhaka.jpg' placeholder='blur' 
       alt=''/> */}
      {/* <Image width={500} height={340} src={image} placeholder='blur' alt=''/> */}
      Home
      
      <Categories></Categories>    
      <Suspense fallback={
          <h2 className="text-center font-semibold text-3xl">Loading.....</h2>
      }>
      <PopularProduct/>
      </Suspense>
    </main>
  )
}
