import React from 'react';
import './mdr.css';

const Mdr = ({ Sdata=[] }) => {
  return (
        <table className='tableContent2'>
          <thead>
            <tr><th colSpan={3}>Match Day_Results</th></tr>
          </thead>
          <tbody>
            {
              Sdata.length ? 
              Sdata.map ((item, i) => {
                return(
    
                  <tr key={i}>
                    <td>{item?.ht} {item?.hs}  - {item?.as} {item?.at}</td>
                  </tr>
                  
                  )
                })
            :null}
          </tbody>
        </table>    
  );
}

console.log(Mdr);

export default Mdr;
