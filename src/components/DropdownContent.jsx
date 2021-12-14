import React from 'react'

export default function DropdownContent() {

  return (
    <div className="dropdown-content">

      <div className="dropdown-content--user">
        <div>
          <span className="user user-2" />
          <p>Hugo</p>
        </div>
        <div>
          <span className="user user-3" />
          <p>Luis</p>
        </div>
        <div>
          <span className="user user-4" />
          <p>Leonel</p>
        </div>
        <p>Manage Profiles</p>
      </div>


      <div className="dropdown-content--options">
        <p>Account</p>
        <p>Help Center</p>
        <p>Sign out of Netflix</p>
      </div>
    </div>

  )
}
