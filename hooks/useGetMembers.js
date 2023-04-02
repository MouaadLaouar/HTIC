import React from 'react'
import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '@/firebase/firebase.confing'

export default function useGetMembers() {

  const [MembersData, setMembersData] = useState([]);
  //Members
  useEffect(() => {
    const FetchData = async () => {
      const data = await getDocs(collection(db, 'Members'));

      setMembersData(data.docs.map((doc) => {
        const data = doc.data();
        data.ID = doc.id;
        return data;
      }))
    }
    FetchData();
  },[])


  return [MembersData];
}
