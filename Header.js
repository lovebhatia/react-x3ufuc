import React from 'react';

function Header()
{
  const firstName="love"
  const lastName="bhatia"
  const date=new Date()
  const hours=date.getHours()

  let timeOfDay
if(hours < 12)
{
  timeOfDay="morning"
} else if (hours >=12 && hours < 17)
{
  timeOfDay="afternoon"
}else
{
  timeOfDay="night"
 // styles.color="#FF8c01"
}

const styles={
  color : "#FF8c00",
  backgroundColor: "#FF2D00",
  fontSize:50
  }
  return(
    <header className="navbar">
    
    <h1 style={styles}>Hello { firstName + " "+ lastName}</h1>
    <p> Good {timeOfDay}!</p>
    </header>

  );
}

export default Header