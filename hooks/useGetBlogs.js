import React from 'react'
import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '@/firebase/firebase.confing'

export default function useGetBlogs() {

    const [BlogsData, setBlogsData] = useState([]);

    useEffect(() => {
        const getdata = async () => {
            const data = await getDocs(collection(db, "Blogs"));
            setBlogsData(data.docs.map((e) => ({...e.data()})));
        }
        getdata();
    },[])


  return [BlogsData];
}
