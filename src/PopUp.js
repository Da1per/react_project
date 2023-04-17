import './css/PopUp.css';
const PopUp =({active,but})=> {
        return (active)?(
            <div className="pop_up" onClick={but}>
                <div className='pop_up_body' onClick={e=>e.stopPropagation()}>
                    <button className='pop_up_x' onClick={but} >x</button>
                    <form className='pop_up_form'>
                        <label className='pop_up_input_label' for="login">Login</label>
                        <input className='pop_up_input_text' placeholder="lol" type="" name='login'></input>
                        <label className='pop_up_input_label' for="login">Password</label>
                        <input className='pop_up_input_text' placeholder="123456" type="" name='password'></input>
                        <input className='pop_up_input_button' type="button" value='login'></input>
                    </form>
                </div>
            </div>
        ):null
         
    }

  export default PopUp;
