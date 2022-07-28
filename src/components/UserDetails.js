import React from 'react'
import {useParams} from 'react-router-dom'

export const UserDetails = () => {
  // useparams untuk mengembalikan objek pasangan kunci/nilai dari params dinamis dari URL saat ini yang dicocokan dengan <Route path>. route anak mewarisi semua params dari route induknya
  const {userId} = useParams()
  return (
    <div>Detail about User {userId}</div>
  )
}
