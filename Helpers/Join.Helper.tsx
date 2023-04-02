import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase/firebase.confing'


export const addMember = async ( FirstName: string, LastName: string, Email: string, Phone: string, Education:string ) => {
        await addDoc(collection(db, "Members"), {
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Phone: Phone,
            Education: Education,
            Role: "Members",
            Confirmed: false,
        });
}