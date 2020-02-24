import React from 'react';
import Title from './components/Title'
import './App.css';
import Feed from './components/Feed'

const dish = [{
  dishName:"salad",
  dishPicture:"img",
  ingredients:"salad with bulghur",
  like: true,
  comment:"looks nice"
}]

function App() {
  return (
    
    <div>
      <title>Lunchfeed</title>
  <Title />
  <Feed />

    </div>


    )}


export default App;
