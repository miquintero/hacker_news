import React, { useState, useEffect }from 'react';
import axios from 'axios';
import uniqueId from 'uniqid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import './ArticleList.scss';

const url = 'http://localhost:3003';

function ArticleList () {

  const [articles, setArticles] = useState('');

  const getArticles = async () => {
    return axios.get(
      `${url}/articles`, {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
          const articles = response.data.hits.filter(article => article.title || article.story_title);
          setArticles(articles);
      })
      .catch(error => console.log('Error:', error));
    };

  const getDate = (timeStamp) => { 
    const stringDate = Date.parse(timeStamp); 
    const formattedDate = new Date(stringDate * 1000); 
    const utcTime = formattedDate.toUTCString()
    const time = utcTime.slice(18, 23);
    const day = utcTime.slice(0, 2);
    const timeArray = time.split(":");
    const currentDay = new Date().toString().slice(0, 2);
    let twelveHour = 'am';
    if (timeArray[0] >= 12) twelveHour = 'pm';
    if (timeArray[0] > 12) timeArray[0] = timeArray[0] - 12;
    if (day === currentDay) {
      return `${timeArray[0]}:${timeArray[1]} ${twelveHour}`
    } else {
      return 'Yesterday';
    }
  }; 

  const handleDelete = objectID => {
    const filtered = articles.filter(article => article.objectID !== objectID);
    setArticles(filtered);
  };

  const articleList = 
    articles
    ? articles
    .map(article => (
    <div button key={uniqueId.time()}>  
      <div className='item'>
        <ListItem className='content'>
          <a href={article.story_url ? article.story_url : 'No URL available'} target="_blank">
            <h1>{article.story_title || article.title}</h1>
            <ListItemText>{article.author}</ListItemText>
            <ListItemText>{getDate(article.created_at)}</ListItemText>
          </a>
          <div className='button'>
            <div button className='delete' onClick={() => handleDelete(article.objectID)}>
              🗑
            </div>
          </div>
        </ListItem>
        <Divider />
      </div>
    </div>  
    ))
    : <div>Loading</div>;
        
    useEffect(() => {
      const filtered = localStorage.getItem('article-list');
      if(filtered) setArticles(JSON.parse(filtered));
    }, []);

    useEffect(() => {
      localStorage.setItem('article-list', JSON.stringify(articles));
    });

  return (
    <div>
      <List component="nav" aria-label="main mailbox" >
        {articleList}
      </List>
    </div>
  )
};

export default ArticleList;