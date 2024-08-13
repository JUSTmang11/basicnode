import { initializeApp ,cert} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from 'fs'
import path from "path";
const __dirname = path.resolve();
const serviceAccount = JSON.parse(fs.readFileSync( __dirname+"/configer.json",'utf8'))

initializeApp({
  credential:cert(serviceAccount)
})
const db = getFirestore()
// let db =1
export default db