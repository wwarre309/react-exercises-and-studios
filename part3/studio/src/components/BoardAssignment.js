import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label:"Cultural Food",
         value:"Caribbean"
      }, 

      {
         label:"Cook Time",
         value:"3+ hours"
      },

      {
         label:"Meal",
         value:"Dinner"
      }

      // <option value={appropriate value}>{appropriate label}</option>

   ];

   const mappedBoards = boards.map({label, value})
      
      <select>
         <option value={boards.value}> {boards.label}</option>
      </select>

   const handleChange = (event) => {
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      {/* <select value={boardName} onChange={handleChange}>
      </select> */}

      {/* <p>Saved to {boardName}!</p> */}
      </div>
   );
}