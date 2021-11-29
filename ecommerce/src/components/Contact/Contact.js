import React, {useState} from 'react'
import './Contact.scss'
import {BsPinMap, BsTelephone, BsMailbox} from "react-icons/bs";

export const Contact = () => {

    const[values, setValues] = useState({
        name:'',
        email:'',
        message:''
    })

    const handleInputChange = (event) => {
        setValues({
            ...values, 
            [event.target.name]: event.target.value
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(values)
    }

    
    return (<div className='contact-section'>
                <form onSubmit={handleSubmit} id='contactForm'>
                    <h2 className='sub-title'>Contact us</h2>
                    <label for='name'>Name</label>
                    <input 
                        id='name' 
                        onChange={handleInputChange}
                        name='name'
                        value={values.name}
                        type='text'
                        placeholder='name'
                    />
                
                    <label for='email'>Email</label>
                    <input 
                        id='email' 
                        onChange={handleInputChange}
                        name='email'
                        value={values.email}
                        type='email'
                        placeholder='email'
                    />
                    <label for='message'>Message</label>
                    <textarea 
                        id='message' 
                        onChange={handleInputChange}
                        name='message'
                        value={values.message}
                        type='text'
                        placeholder='message'
                    />
                    
                    <input 
                        className='submit-form'
                        type='submit'
                    />
                </form>
                <div className='contact-info'>
                    <h2 className='sub-title'>Contact information</h2>
                    
                    <ul className='info-list'>
                        <li className='list-element'>
                            <div className='contact-piece'>
                                <span className='circular-container'>
                                    <BsPinMap className='icon'/>                                    
                                </span>
                                Address: 
                                <p className='info-detail'>
                                     2676 Roosevelt Wilson Lane,
                                    <br/>
                                    Austin TX 77988
                                </p>
                            </div>
                        </li>
                        <li className='list-element'>
                            <div className='contact-piece'>
                                <span className='circular-container'>
                                    <BsTelephone className='icon'/>
                                </span>
                                Phone Number:
                                <p className='info-detail'>(+598) 99 999 999</p>
                            </div>
                        </li>
                        <li className='list-element'>
                            <div className='contact-piece'>
                                <span className='circular-container'>
                                    <BsMailbox className='icon'/>                                
                                </span>
                                Email:
                                <p className='info-detail'>i-97@store.com</p>
                            </div>
                        </li>
                    </ul>
                    <div class="gmap_canvas">
                        <iframe id="map" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" title='map-frame'
                            src="https://maps.google.com/maps?q=av%20uruguay%20lagomar&t=&z=17&ie=UTF8&iwloc=&output=embed">
                        </iframe>
                    </div>
                </div>
            </div>
    )
}
