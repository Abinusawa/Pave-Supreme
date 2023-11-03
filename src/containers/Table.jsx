import React from 'react';
import './table.css';


const Table = ({ data =[]}) => {
  return (
    <table className='tableContent'>
      <thead>
        <tr><th colSpan={10}>Standings | Seasons---</th></tr>
        <tr>
          <th>P</th>
          <th>Team</th>
          <th >P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        {
          data.length ? 
          data.map ((item, i) => {
            return(

              <tr key={i}>
                <td>{i+1}</td>
                <td>{item?.team}</td>
                <td>{item?.P}</td>
                <td>{item?.W}</td>
                <td>{item?.D}</td>
                <td>{item?.L}</td>
                <td>{item?.GF}</td>
                <td>{item?.GA}</td>
                <td>{item?.GD}</td>
                <td>{item?.Pts}</td>
              </tr>
              
              )
            })
        :null}
      </tbody>
    </table>    
  );
}

export default Table;
