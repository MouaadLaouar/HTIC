import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase/firebase.confing'


export const SendMessage = async (FirstName: string, LastName: string, Email: string, Phone: string, Message:string) => {

        await addDoc(collection(db, "Contact_Form"), {
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Phone: Phone,
            Message: Message
        });
}