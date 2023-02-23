import React from 'react'
import loading from "./loading.gif";
// export default class Spinner extends Component {
const Spinner=()=>{
  
    return (
      <div className='text-center'>
        <img src={loading} alt="Loading..." />
      </div>
    )
  
}
export default Spinner;