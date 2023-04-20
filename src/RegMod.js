import './css/AuthMod.css';
const RegMod =({active1,but1})=> {
        return (active1)?(
            <div className="pop_up" onClick={but1}>
                <div className='pop_up_body' onClick={e=>e.stopPropagation()}>
                    <button className='pop_up_x' onClick={but1} >x</button>
                    <form className='pop_up_form'>
                        <label className='pop_up_input_label' for="login">Login</label>
                        <input className='pop_up_input_text' placeholder="lol" type="" name='login'></input>
                        <label className='pop_up_input_label' for="login">Password</label>
                        <input className='pop_up_input_text' placeholder="123456" type="" name='password'></input>
                        <label className='pop_up_input_label' for="login">Password again</label>
                        <input className='pop_up_input_text' placeholder="123456" type="" name='password'></input>
                        <input className='pop_up_input_button' type="button" value='register'></input>
                    </form>
                </div>
            </div>
        ):null 
    }

  export default RegMod;
