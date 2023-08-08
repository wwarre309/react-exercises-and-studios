import './styles.css';

function Button() {
   function onLearnMore() {
      alert("Hawaiian Roller Coaster Ride!");
   };
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;