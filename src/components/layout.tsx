import * as React from "react"

import "./layout.css"

interface LayoutProps {
  children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <>
      <div className='layout'>
          <main className="layout-flex">{children}</main>
      </div>
    </>
  )
}

export default Layout
