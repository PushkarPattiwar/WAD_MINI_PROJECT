// import React, { useState, useEffect } from 'react';
// import './MarksEntry.css'; // Import CSS file for styling

// const MarksEntry = () => {
//   const [marks, setMarks] = useState({
//     projectId: '',
//     innovativeIdeas: 0,
//     approachToExploitIdeas: 0,
//     approachToImplementSystem: 0,
//     implementingEngineeringPrinciples: 0,
//     presentationAndQnA: 0,
//   });

//   const [allocatedProjectIds, setAllocatedProjectIds] = useState([]);

//   useEffect(() => {
   
//     fetch('API_URL/allocated-project-ids')
//       .then(response => response.json())
//       .then(data => setAllocatedProjectIds(data))
//       .catch(error => console.error('Error fetching allocated project IDs:', error));
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     const sanitizedValue = Math.min(parseInt(value), 10);
//     setMarks({ ...marks, [name]: sanitizedValue });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//   };

//   return (
//     <div className="marks-entry-container">
//       <div className="moving-text">
//       <p>Please assign marks to each category. The maximum marks for each category is 10.</p>
//       </div>
//       <h2 className="entry-heading" style={{ color:'#FFD700'}}>Marks Entry</h2>
//       <form onSubmit={handleSubmit}>
//         <table className="marks-table">
//           <tbody>
//             <tr>
//               <th>Project ID:</th>
//               <td>
//                 <select name="projectId" value={marks.projectId} onChange={handleInputChange}>
//                   <option value="">Select Project ID</option>
//                   {allocatedProjectIds.map(id => (
//                     <option key={id} value={id}>{id}</option>
//                   ))}
//                 </select>
//               </td>
//             </tr>
//             <tr>
//               <th>Innovative Ideas Involved (10):</th>
//               <td><input type="number" name="innovativeIdeas" value={marks.innovativeIdeas} min="0" max="10" onChange={handleInputChange} /></td>
//             </tr>
//             <tr>
//               <th>Approach to Exploit Ideas (10):</th>
//               <td><input type="number" name="approachToExploitIdeas" value={marks.approachToExploitIdeas} min="0" max="10" onChange={handleInputChange} /></td>
//             </tr>
//             <tr>
//               <th>Approach towards implementing the system (10):</th>
//               <td><input type="number" name="approachToImplementSystem" value={marks.approachToImplementSystem} min="0" max="10" onChange={handleInputChange} /></td>
//             </tr>
//             <tr>
//               <th>Implementing on engineering principles (10):</th>
//               <td><input type="number" name="implementingEngineeringPrinciples" value={marks.implementingEngineeringPrinciples} min="0" max="10" onChange={handleInputChange} /></td>
//             </tr>
//             <tr>
//               <th>Presentation and QnA (10):</th>
//               <td><input type="number" name="presentationAndQnA" value={marks.presentationAndQnA} min="0" max="10" onChange={handleInputChange} /></td>
//             </tr>
//           </tbody>
//         </table>
//         <button type="submit" style={{ backgroundColor:'skyblue'}}>Submit Marks</button>
//       </form>
//     </div>
//   );
// }

// export default MarksEntry;
