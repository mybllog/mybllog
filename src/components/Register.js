import React, { useState } from 'react'


const  Register = () => {
  const [showModal, setShowModal] = useState(false)
    return (
      <ul>
        <div>
            <button className="" type="Register" onClick={()=>setShowModal(false)}/>
        </div>
        <></>
        { showModal ? (
            <div>
                <span>close</span>
            </div>
            ) : null}
      </ul>
    )
  }


export default Register