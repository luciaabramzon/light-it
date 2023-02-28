import { useEffect, useState } from "react"
import axios from 'axios'
import Loading from "./Loading"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './plans.css'

const URL='http://localhost:8080/'

const Plans=()=>{
    const [plans,setPlans]=useState('')

    const getPlans=async ()=>{
        const res=await axios.get(URL)
      setPlans(res.data) 
    }

    useEffect(()=>{
        getPlans()
    },[])

    
    if(plans===''){
        return <Loading/>
    } 

    return(
        <>
    <Table >
      <thead>
        <tr>
          <th className="tableTitle">Plans</th>
          <th> Basic</th>
          <th>Essential</th>
          <th>Premium</th>
        </tr>
      </thead>
      <tbody>
 <tr id="pricing">
 <td className="title">Pricing</td>
{plans.map((plan)=>(
 <td><span className="price">${plan.price}</span>/mo
 <p className="description">{plan.description}</p>
 <Button  className="button">Buy {plan.name}</Button>
 </td>
))}

</tr>
<tr><td colSpan={4} className='features'>Features</td></tr>
<tr>
 <td className="tableTitle">Molestie lobortis massa</td>
 {plans.map((plan)=>(
 <td><img src={plan.features.m} width={'15px'}/></td>
 ))}
</tr>
<tr>
 <td className="tableTitle">Urna purus felis</td>
 {plans.map((plan)=>(
 <td><img src={plan.features.u} width={'15px'}/></td>
 ))}
</tr>
<tr>
 <td className="tableTitle">Tellus pulvinar sit dictum</td>
 {plans.map((plan)=>(
 <td><img src={plan.features.t} width={'15px'}/></td>
 ))}
</tr>
<tr>
 <td className="tableTitle">Convallis</td>
 {plans.map((plan)=>(
 <td><img src={plan.features.c} width={'15px'}/></td>
 ))}
</tr>
   </tbody>
    </Table>        
        </>
    )

}

export default Plans