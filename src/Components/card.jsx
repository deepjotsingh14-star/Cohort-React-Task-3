import React from 'react'

const card = ({user}) => {
  return (
    <div className='text-black '>
      <div
        className="
      h-140   bg-cover bg-center bg-no-repeat border-6 rounded-4xl border-white flex  overflow-hidden  items-end"
       style={{ backgroundImage: `url(${user.image})` }}
      >
        <div className="flex flex-col w-full bg-linear-to-t from-gray-300/50 via-gray-300/25 to-transparent gap-4 backdrop-blur-md p-4">
  <div>
    <h1 className="text-black text-2xl font-bold">{user.name}<i class="ri-verified-badge-fill"></i></h1>
  <p className="text-white ">{user.title}</p>
  </div>
  <div className='flex justify-between '>
    <p className='text-white'><i className="ri-user-heart-fill"></i>200</p>
    <p className='text-white'
    > <i class="ri-bard-fill"></i></p>
      <h3>{user.isfollow ? "Follow" : "followed"}</h3>

  </div>
</div>

      </div>

    </div>
  )
}

export default card
