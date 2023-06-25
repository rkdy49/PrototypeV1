// import React from 'react'
// import { AiOutlineArrowRight } from 'react-icons/ai'

// export default function Discover() {
//   return (
//     <div className='my-20'>
//       <div className='grid grid-cols-5 m-2 text-white'>
//         {nftDataArr.map((nft) => {
//           return (
//             <div className='flex flex-col m-2 mt-8 w-56 h-72 border-2 border-indigo-300'>
//               {console.log(
//                 `nft image is : https://ipfs.io/ipfs/${
//                   nft.metadata.imageURI.split('//')[1]
//                 }`
//               )}
//               <img
//                 src={`https://ipfs.io/ipfs/${
//                   nft.metadata.imageURI.split('//')[1]
//                 }`}
//                 alt=''
//                 className='w-64 h-48'
//               />
//               <div className='flex flex-col mt-0 p-4'>
//                 <div className='font-bold mb-2 flex items-center justify-between'>
//                   <div>{nft.metadata.name}</div>
//                   <div>
//                     <AiOutlineArrowRight className='mr-4' />
//                   </div>
//                 </div>
//                 <div className='flex'>
//                   <div className='w-24 text-sm'>
//                     FLOOR PRICE:
//                     <br />
//                     {nft.price}
//                   </div>
//                   <div className='ml-4 w-20 text-sm'>
//                     LAST SALE:
//                     <br />
//                     {nft.lastSale}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
