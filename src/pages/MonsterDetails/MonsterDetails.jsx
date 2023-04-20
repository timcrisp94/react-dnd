import { useState, useEffect } from 'react';
import { getDetails } from '../../services/api-calls'
import { useLocation } from 'react-router-dom'


const MonsterDetails = (props) => {
  const [monsterDetails, setMonsterDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getDetails(location.state.monster.url)
    .then(monsterDetails => setMonsterDetails(monsterDetails))
  }, [])
  return (
    <>
      <h3>Monster Deets</h3>
      <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
      <h2>{monsterDetails.name}</h2>
      <h4>Size: {monsterDetails.size}</h4>
      <h4>Type: {typeof monsterDetails.type === 'string' ? monsterDetails.type : ''}</h4>
      <h4>Actions:</h4>
      {monsterDetails.actions ?
      <>
        {monsterDetails.actions.map(action => 
          <div key={action.name}>
            <h4 >{action.name}</h4>
            <h5>{action.desc}</h5>
          </div>
        )}
      </>
      :
      <p>This poor monster has no actions. Womp womp.</p>
      }
    </>
  );
}
 
export default MonsterDetails;
