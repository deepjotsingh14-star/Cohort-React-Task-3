import React from 'react'
import Card from "./Components/card.jsx";
const App = () => {
  const profiles = [
    {
      image: "https://i.pinimg.com/1200x/0e/55/57/0e5557564da39f6bdbe422d964c55fd9.jpg",
      name: "Sophie Bennett",
      title: "Product Designer",
      isfollow:true
    },
    {
      image: "https://i.pinimg.com/1200x/93/b3/0b/93b30bf280cbb674034a10a77fa6cdbf.jpg",
      name: "Arjun Mehta",
      title: "Frontend Developer",
      isfollow:true
    },
    {
      image: "https://i.pinimg.com/736x/4f/ea/06/4fea064f1a9c49f7aa6ecc40fb2787c1.jpg",
      name: "Neha Sharma",
      title: "UI/UX Designer",
      isfollow:false
    },
    {
      image: "https://i.pinimg.com/736x/cb/50/f1/cb50f140bdae63b19fbba92e25cea615.jpg",
      name: "Rahul Verma",
      title: "Full Stack Engineer",
      isfollow:true
    }
  ];




  return (
    <div className='bg-black w-screen h-screen grid  grid-cols-1 lg:grid-cols-4 gap-4 lg:p-8'>
      {profiles.map((elem) => (
        <Card user={elem} />
      ))}
    </div>
  );



}



export default App
