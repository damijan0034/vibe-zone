import { UserButton } from '@clerk/nextjs';
import { Add, Person, Search } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react'

const TopBar = () => {
  return (
    <div className="flex justify-between items-center mt-6">
    <div className="relative">
      <input
        type="text"
        className="search-bar"
        placeholder="Search posts, people, ..."
        
      />
      <Search
        className="search-icon"
        
      />
    </div>

    <button
      className="create-post-btn"
     
    >
      <Add /> <p>Create A Post</p>
    </button>

    <div className="flex gap-4 md:hidden">
      <Link href="#">
        <Person sx={{ fontSize: "35px", color: "white" }} />
      </Link>

      <UserButton  afterSignOutUrl="/sign-in" />
    </div>
  </div>
);
  
}

export default TopBar