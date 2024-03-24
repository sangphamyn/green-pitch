import React, { useState } from 'react';
import Input from '../../components/InputComponet/InputComponent'
import AvatarImage from '../../assets/images/avatar.svg'
import RegisterGif from '../../assets/images/signup.gif'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to server)
        console.log(formData);
    };

    return (
        <div className="container mx-auto mt-16 max-w-[1170px] grid grid-cols-2 items-center">
            <img src={RegisterGif} />
            <form onSubmit={handleSubmit} className="w-full mx-auto px-10 pl-16">
                <img src={AvatarImage} className="w-24 mx-auto mb-4"/>
                <h1 className="text-2xl font-semibold mb-4 text-center">ĐĂNG NHẬP</h1>
                <p className='text-center mb-6'>Chưa có tài khoản? <a href="/register" className='sang-underline relative'>Đăng ký</a> ngay</p>
                <Input
                    label="Email / Số điện thoại"
                    type="text"
                    name="username"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Input
                    label="Mật khẩu"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <div className="flex items-center justify-between mt-8">
                    <ButtonComponent
                        label="Đăng nhập"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-3 text-center w-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    />
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
