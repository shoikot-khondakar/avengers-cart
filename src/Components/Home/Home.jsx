/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    const [allActors,setAllActors]=useState([])
    const [selectedActor,setSelectedActor]=useState([])
    const [totalRemaining,setTotalRemaining]=useState(0)
    const [totalCost,setTotalCost]=useState(0)
    useEffect(()=>{
        fetch("./data.json")
        .then(res=>res.json())
        .then(data=>setAllActors(data))
    },[])
    
    const handleSelector=(actor)=>{
        const isExit=selectedActor.find(item=>item.id==actor.id)
        let cost = actor.salary
        if(isExit){
           return alert('already booked')
        }else{
            selectedActor.forEach(item=>{
                 cost = cost + item.salary
            })

            const totalRemaining = 30000-cost;
            if(cost>30000){
              return  alert('no money')
            }else{
                setTotalCost(cost);
            
                setTotalRemaining(totalRemaining);
    
                setSelectedActor([...selectedActor,actor])
            }

        }
       
    }
   

    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">
               {
                allActors.map(actor=>(
                    <div key={actor.id} className="card">
                    <div className="card-img">
                        <img className='photo' src={actor.image} alt="" />
                    </div>
                    <h2>{actor.name}</h2>
                    <p>
                        <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, amet?</small>
                    </p>
                    <div className="info">
                        <p>salary:{actor.salary} $</p>
                        <p>{actor.role}</p>
                    </div>
                    <button onClick={()=>handleSelector(actor)} className='card-btn'>Select</button>
                </div>
                ))
               }
                </div>
                <div className="cart">
                    <Cart selectedActor={selectedActor}
                    totalRemaining={totalRemaining}
                    totalCost={totalCost}></Cart>
                </div>
            </div>
            
        </div>
    );
};

export default Home;