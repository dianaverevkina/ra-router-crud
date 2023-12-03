import { Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <div className="page">
      <Outlet />
    </div>
  )
}
