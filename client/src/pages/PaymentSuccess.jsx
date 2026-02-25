import React, { useEffect } from 'react'
import { FiCheckCircle } from "react-icons/fi";
import { getCurrentUser } from '../services/api';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function PaymentSuccess() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {

        getCurrentUser(dispatch)

        const t = setTimeout(() => {

            navigate("/")


        }, 5000);

        return () => clearTimeout(t)

    }, [dispatch, navigate])
    return (
        <div className='min-h-screen flex flex-col items-center justify-center p-4 gap-4 bg-green-50/50'>
            <div
                className="text-green-500 text-6xl animate-bounce-short">
                <FiCheckCircle />

            </div>

            <h1
                className="text-2xl font-bold text-green-600 animate-fade-in-up">
                Payment Successful! Credits Added

            </h1>

            <p
                className="text-gray-500 text-sm animate-fade-in">

                Redirecting to home...

            </p>

        </div>
    )
}

export default PaymentSuccess
