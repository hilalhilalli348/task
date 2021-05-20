import  React,{Component}  from 'react';
      
class AddBar extends  Component{

  constructor(props){
    super(props);
    this.state = {
       mehsul_adi:""
    }
 
  }


  addItem=()=>{

    if(!localStorage.getItem("mehsullar_siyahisi")){
        let mehsullar_siyahisi = [this.state.mehsul_adi];
        localStorage.setItem('mehsullar_siyahisi', JSON.stringify(mehsullar_siyahisi));
    }else{
        let mehsullar_siyahisi = JSON.parse(localStorage.getItem("mehsullar_siyahisi"));
        mehsullar_siyahisi.push(this.state.mehsul_adi);

        localStorage.setItem('mehsullar_siyahisi', JSON.stringify(mehsullar_siyahisi));
    }
 
  }
   

  render(){
   
    return (
      <div className="center">

        <input type="text" onChange={e => this.setState({mehsul_adi:e.target.value})} placeholder="Məhsulun adı" />
        <button onClick={this.addItem}>Əlavə et</button>
        
      </div>
    );
  }

} 
		
export default AddBar;



   