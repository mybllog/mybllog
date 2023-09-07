import React,{useState} from 'react'
import { DropdownModal } from '../components/Service'

export const Services = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div>
        <div>
            <button type='text' onClick={toggleDropdown} />
            {setShowDropdown&&<DropdownModal/>}
        </div>
    </div>
  )
}
