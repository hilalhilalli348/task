import  React,{Component}  from 'react';
import AddBar from './contexts/AddBar';
import Items from './contexts/Items';

        
class App extends  Component{

  constructor(props){
    super(props);
     
     
  }
 
  render(){
   
    return (
      <div>

          <AddBar />
          
          <Items  />
      
      </div>
    );
  }

} 
		
export default App;



   