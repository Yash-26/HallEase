import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { generateDate, months } from '../util/generateDate';
import { GrPrevious, GrNext  } from "react-icons/gr";
import { useHall } from '../context/HallContext';
// import 'react-datepicker/dist/react-datepicker.css';

function Calendar({selectDate,setSelectDate,setIsDateSelected}) {

    const {selectedHall} = useHall();

    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const currentDate = dayjs();
    const [today,setToday] = useState(currentDate);
    const bookedDates = selectedHall?.bookedDates;

    console.log(selectedHall?.bookedDates);
    console.log(selectDate.toDate().toDateString())

  return (
    <div className='bg-white rounded-lg shadow-lg leading-relaxed lg:w-[1000px] h-[400px] md:h-[650px] mx-auto md:ml-44 md:mt-5 p-5'>
        <div className='flex justify-between'>
            <h1 className='font-semibold'>{months[today.month()]}, {today.year()}</h1>
            <div className='flex items-center gap-7'>
                <GrPrevious className='w-5 h-5 cursor-pointer' onClick={()=> setToday(today.month(today.month()-1))}/>
                <h1 className='cursor-pointer' onClick={()=>{
                    setToday(currentDate);
                    setSelectDate(currentDate);
                    setIsDateSelected(false)}

                }>Today</h1>
                <GrNext className='w-5 h-5 cursor-pointer' onClick={()=> setToday(today.month(today.month()+1))} />
            </div>
        </div>

        <div className='w-full grid grid-cols-7'>
            {
                days.map((day,index)=>(
                    <h1 key={index} className='h-14 grid place-content-center text-gray-600 font-semibold'>{day}</h1>
                ))
            }
        </div>

        <div className='w-full grid grid-cols-7'>
        {
            generateDate(today.month(),today.year()).map(({date,currentMonth,today},index)=>{
                const isBooked = bookedDates?.includes(date.toDate().toDateString());
                const isPast = date.isBefore(currentDate,'day');
                return(
                <div key={index}  className='text-xs h-10 md:h-20 font-bold grid place-content-center border border-purple-200 m-1 rounded-md'>
                    <h1 className={`${currentMonth?'':'text-gray-400 text-xs md:text-sm'}${today?'bg-red-500 text-white ':''}
                    ${selectDate.toDate().toDateString()==date.toDate().toDateString()? 'bg-black text-white': ''}
                    ${isPast ? 'hover:cursor-not-allowed' : ''}
                     h-6 w-6 md:h-10 md:w-10 rounded-full  grid place-content-center hover:text-white hover:bg-black cursor-pointer
                     ${isBooked? 'hover:cursor-not-allowed bg-gray-400 text-white': ''}`
                    }
                     onClick={()=> {
                            if(!isBooked && !isPast){
                                setSelectDate(date) 
                                setIsDateSelected(true)
                            }
                        }
                     }
                    >
                        {date.date()}
                    </h1>
                </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default Calendar