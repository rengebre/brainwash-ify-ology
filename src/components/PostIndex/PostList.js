import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import PostListItem from './PostListItem';
import BasicTabs from './PostListTabs';

import './PostList.scss'
import './PostIndex.scss'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MultiSelect } from 'react-multi-select-component';
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';

export default function PostList(props) {
  const { posts, users, interests, likeCounts, thumbnails, interestsFilter, setInterestsFilter, setLikesFilter, setReload, dbUser, likes, setPosts } = props;

  const { isAuthenticated } = useAuth0();
  const [ searchInput, setSearchInput ] = useState("");
  const [ filteredResults, setFilteredResults ] = useState([]);

  // SEARCH LOGIC // 
  const searchItems = function(searchValue) {
    setSearchInput(searchValue)
    if (searchInput !== '') {
    const filteredData = posts.filter((item) => {
      // Filtering posts according to the search term
      return (item.title).toLowerCase().includes(searchInput.toLowerCase())
    })
      setFilteredResults(filteredData);
    }
    else {
      setFilteredResults(posts)
    }
  }

  // INTERESTS FILTERING LOGIC //
  const interestNames = interests.map((interestObj) => {
    return {label: interestObj.name, value: interestObj.id}
  })

  return(
    <section className="post-index-container">
      <div className="search-filter-new-post">
        <div className="search-filter">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '35ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField 
              size="small"
              id="outlined-search" 
              label="Search Titles" 
              type="search"
              onChange={(e) => searchItems(e.target.value)}
            />
          </Box>
          <MultiSelect 
            options={interestNames}
            value={interestsFilter}
            onChange={setInterestsFilter}
            labelledBy="Select"
            overrideStrings={{"selectSomeItems": "Filter Interests", "allItemsAreSelected": "All interests selected",}}
          />
        </div>
        <span className="new-post-container">
          {isAuthenticated && <Link id="new-post-link" to={'/posts/new'}><Button variant="contained" id="new-post-btn"><b>+</b>&nbsp;&nbsp;New Post</Button></Link>}
        </span>
      </div>
      <BasicTabs setLikesFilter={setLikesFilter} dbUser={dbUser} />
      <div className="post-list">
        {searchInput.length >= 1 ? (
          filteredResults.map((post) => {
            return (
              <PostListItem 
                key={post.id} 
                {...post}
                interests={interests}
                users={users}
                likeCounts={likeCounts} 
                thumbnails={thumbnails}
                setReload={setReload}
                dbUser={dbUser}
                likes={likes}
              />
            )
          })
        ) : (
          posts.map((post) => {
            return (
              <PostListItem 
                key={post.id} 
                {...post}
                interests={interests}
                users={users}
                likeCounts={likeCounts} 
                thumbnails={thumbnails}
                setReload={setReload}
                dbUser={dbUser}
                likes={likes}
              />
            )
          })
        )}
      </div>
      <Outlet/>
    </section>
  );
}