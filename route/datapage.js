import express from 'express'
const route = express.Router()
import db from '../libs/firebase.js'

async function getdatabase(dbname) {
    const data_row = await db.collection(dbname).get().then((snapshot)=>{
        return snapshot.docs.map(doc=> doc.data())
    })
    return data_row
}

route.get('/',async(req,res)=>{
    try{
        const user = await getdatabase('userinfo')
    if(user){
        res.render('dbpage',{
            status:true,
            user:user
        })
        console.log(user)
    }else{
        res.redirect('/')
    }
    }catch(e){
        console.log("Error :"+ e)
    }
})

export default route