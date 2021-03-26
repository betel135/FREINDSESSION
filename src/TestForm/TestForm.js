import react from 'react'
class TestForm extends react.Component{
    state={
        name:"Betty",
        email:"Betty@yahoo.com",
        address:"1111 Tyson corner",
        city:"Viana",
        gender:"F"

        
    }
    updateName = (event)=>{
        this.setState({name:event.target.value})
    }
    updateEmail=(event)=> {
        this.setState({email:event.target.value})
    }
    updatePassword=(event) => {
        this.setState({password:event.target.value})
    }
    updateGender=(event) => {
        this.setState({gender:event.target.value})
    }
    updateAddres = (event) =>{
        this.setState({address:event.target.value})


    }
    updateCity =(event) =>{
        this.setState({city:event.target.value})
    }

    getData=() => {
       
        console.log(this.state)
        localStorage.setItem("FrindData",JSON.stringify(this.state))
    }
    render(){
        return(
            <div>
                
                <lable>Name</lable><input type="text" onChange = {this.updateName}/>
               <label>Email</label> <input type="text" onChange = { this.updateEmail}/>
               <label> Gender</label> <input type="text" onChange = { this.updateGender}/>
               <label>Address</label><input type="text" onChange = {this.updateAddres}/>
               <label>City</label><input type="text" onChange = {this.updateCity}/>
                < button onClick = {this.getData}>getData</button>
            
               
                    </div>
        )
    }
}
export default TestForm