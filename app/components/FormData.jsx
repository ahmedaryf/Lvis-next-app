"use client"
import React, { useEffect, useState } from 'react'

const PRICE = 5;

export default function FormData() {
    const [quantity, setQuantity] = useState(1)
    const totalPrice = PRICE * quantity;

    const [formInfo, setFormInfo] = useState({
        fullName: '',
        email: '',
        phone: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()

    }
    const handleChange = (e) => {
        setFormInfo(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
        console.log(formInfo.fullName, formInfo.email)
    }


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        getData();
    }, []);
    
   
  return (
    <>
        <div className='flex flex-col items-center'>
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit} className='block'>
                <div className='my-2'>
                    <input onChange={handleChange} value={formInfo.name} type='text' placeholder='Enter Name' name='fullName' />
                </div>
                <div className='my-2'>
                    <input onChange={handleChange} value={formInfo.name} type='text' placeholder='Enter Email' name='email' />
                </div>
                <div className='my-2'>
                    <input onChange={handleChange} value={formInfo.name} type='text' placeholder='Enter Phone' name='phone' />
                </div>
                    <button type='submit'>Submit</button>
            </form>
        </div>
        <div className='mt-9 flex flex-col items-center'>
            <h1 className='text-3xl mb-4'>Total: {totalPrice}</h1>
            <h1 className='text-3xl mb-4'>Quantity: {quantity}</h1>
            <button onClick={() => setQuantity((prev) => prev + 1)} className='bg-slate-400 p-2'>Add</button>
        </div>
    </>
  )
}
