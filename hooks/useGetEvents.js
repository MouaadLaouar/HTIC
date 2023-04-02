import React from 'react'
import { useEffect, useState } from 'react'
import { getDocs, collection, doc } from 'firebase/firestore'
import { db } from '@/firebase/firebase.confing'

export default function useGetEvents() {

    const [EventsData, setEventsData] = useState([]);

    useEffect(() => {
        const getdata = async () => {
            const colRef = collection(db, 'Events');

            const snapshots = await getDocs(colRef);

            const docs = snapshots.docs.map((doc) => {
                const data = doc.data();

                data.id = doc.id;
                return data;
            })
            setEventsData(docs);
        }
        getdata();
    },[])


  return [EventsData];
}
