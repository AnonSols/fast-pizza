
import { ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LinkButton = ({children, to}:{children:ReactNode, to:string}) => {
const className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
const navigate = useNavigate();
    if(to === "-1") return   <button className={className} onClick={() => navigate(-1)}>&larr; Go back</button>
  return (
    <Link to={to} className={className}>{children}</Link>
  )
}

export default LinkButton