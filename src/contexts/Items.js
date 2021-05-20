import  React,{Component}  from 'react';
      
class Items extends  Component{

  constructor(props){
    super(props);
 
    let mehsullar_arr = JSON.parse(localStorage.getItem("mehsullar_siyahisi")) || [];

    this.state = {
       mehsulllar:mehsullar_arr
    }
 
  }

  
  render(){
   
    return (
      <div className="center">
          <ul>
                {
                    this.state.mehsulllar.map((item,index)=>{
                        return (
                            <li key={index}>
                                {item}
                            </li>
                        );
                    })
                }
          </ul>
      </div>
    );
  }

} 
		
export default Items;



   