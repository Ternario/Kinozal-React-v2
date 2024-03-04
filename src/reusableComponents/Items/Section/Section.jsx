// import { useEffect, useState } from "react";

// const Section = ({ getData, title }) => {
//     const [state, setState] = useState(null);

//     useEffect(() => {
//         getData(title).then((state) => {
//             setState({
//                 state,
//             });
//         });
//     }, [getData, title]);

//     const renderItems = (arr) => {
//         return arr.state.map(({ id, poster, title, type }) => {
//             return (
//                 <div key={id} className="section">
//                     <div className="section-poster">
//                         <img src={poster} alt="section" />
//                     </div>
//                     <div className="section-name">
//                         <div className="section-name">{title}</div>
//                     </div>
//                 </div>
//             );
//         });
//     };

//     if (!state) {
//         return <div>loading...</div>;
//     }

//     const items = renderItems(state);

//     return <>{items}</>;
// };

// export default Section;
