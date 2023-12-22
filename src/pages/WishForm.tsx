import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import "../scss/WishForm.scss"
import clipboardCopy from 'clipboard-copy';

import toast from "react-hot-toast"
import GitHub from '../components/GitHub';
const WishForm: React.FC = () => {
    const [formData, setFormData] = useState({
        receiver: '',
        sender: '',
        language: 'en',
        customText: '',
    });


    // console.log(formData.customText);

    const [link, setLink] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const location = `https://happy-new-year-2024-two.vercel.app`
    const newSender = formData.sender.trim().replace(" ", "_");
    const newReceiver = formData.receiver.trim().replace(" ", "_");
    const lk = `${location}/wish/?sender=${newSender}&receiver=${newReceiver}&lang=${formData.language}${formData.customText && "&customText=" + formData.customText}`

    // console.log(newReceiver, newSender);
    const handleGenerateLink = (link: any) => {
        setLink(link)
    }
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    const handleCopyToClipBoard = (lk: any) => {
        clipboardCopy(lk)
            .then(() => {
                toast.success("Copied sucessfully!")
            })
            .catch(() => {
                toast.error('Failed to copy');
            });
    }
    return (
        <div className='wishform'>
            <NavBar />
            <div className='form-container'>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-container">
                        <label htmlFor="receiver">Name of the receiver</label>
                        <input
                            type="text"
                            name="receiver"
                            value={formData.receiver}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="input-container">
                        <label htmlFor="sender">Name of the sender</label>
                        <input
                            type="text"
                            name="sender"
                            value={formData.sender}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="input-container" style={{ position: "relative", marginBottom: "10px" }}>
                        <label htmlFor="sender" style={{ color: "#555" }}>Custom text (optional)</label>
                        <input
                            style={{ border: "1px solid #555" }}
                            type="text"
                            name="customText"
                            value={formData.customText}
                            onChange={handleInputChange}
                        />
                        <p
                            style={{
                                position: "absolute",
                                fontSize: "11px",
                                bottom: "5px",
                                color: "#ccc"
                            }}
                        >
                            PS: if not filled, uses default template</p>
                    </div>

                    <div className="input-container">
                        <label htmlFor="language">Language</label>
                        <select
                            name="language"
                            value={formData.language}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="en">English</option>
                            <option value="fr">French</option>
                        </select>
                    </div>

                    <button onClick={() => { handleGenerateLink(lk) }} className='generate-link'>
                        Generate link
                    </button>
                </form>

                {formData.receiver && formData.sender && (
                    <div className="results">
                        <Link to={`/wish/?sender=${newSender}&receiver=${newReceiver}&lang=${formData.language}${formData.customText && "&customText=" + formData.customText}`}>{link}</Link>
                        <button onClick={() => { handleCopyToClipBoard(lk) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
            <GitHub />
        </div>
    );
};

export default WishForm;