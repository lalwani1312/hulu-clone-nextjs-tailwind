import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import { BASE_IMAGE_URL } from '../utils/requests'

function Thumnail({ result }) {
    return (
        <div className="p-2 group cursor-pointer 
            transition duration-200 ease-in transform sm:hover:scale-110 hover:z-105">
            <Image
                layout="responsive"
                src={`${BASE_IMAGE_URL}${result.backdrop_path || result.poster_path}`}
                height={1080} width={1920} />
            
            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p>

                <h2 className="mt-1 text-2xl text-white transition-all
                    duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>

                <p className="flex items-center opacity-100 group-hover:opacity-100 transition">
                    {result.media_type && `${result.media_type} |`}{" "}
                    {result.release_date || result.first_air_date} |{" "}
                    <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumnail