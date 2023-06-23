import { useState } from 'react';

function useForm(){
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
    });
    
    function handleInputChange(event) {
        const { name, type, value, checked } = event.target;
    
        setData((prevState) => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value,
        }));
    }
    
    return [data, handleInputChange];
}

function LoginForm() {
    const [data, handleInputChange] = useForm();

    return (
        <form className='p-6 rounded-lg bg-gray-700'>
            <input onChange={handleInputChange} value={data.username} name="username" className='bg-gray-800 text-white rounded-md py-2 px-4'/>
            <input onChange={handleInputChange} value={data.password} name="password" type="password" className='bg-gray-800 text-white rounded-md py-2 px-4'/>
            <input onChange={handleInputChange} value={data.remember} name="remember" type="checkbox" />        </form>
    )
}

export default LoginForm