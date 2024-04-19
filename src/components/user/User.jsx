import {useParams} from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
<div className='text-center bg-orange-300'>User: {userid}</div>
  )
}

export default User