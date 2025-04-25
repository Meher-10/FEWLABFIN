import React,{useState} from 'react';
function Login(){
    const [data,setData]=useState({
        username:'',
        password:'',

    })
    const {username,password}=data;
    function changeHandler(e){
        setData({...data,[e.target.name]:e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        if(username.length<=5){
            alert("eneter big ");
        }
        
        console.log(data);
    }
    return (
        <>
        <div>
        <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Email</label>
          <input type="text" className="form-control" id="inputEmail4" name="username" value={username} onChange={changeHandler}/>
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4" name="password" value={password} onChange={changeHandler}/>
        </div>
        
        
        
        
        
        
        <div className="col-12">
          <button type="submit" className="btn btn-primary" >Sign in</button>
        </div>
      </form>
        </div>
        </>
    )

}
export default Login;