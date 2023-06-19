import React, { useEffect, useState , useRef} from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/products/HVCLogo.jpeg"
import img4 from "../images/products/4.jpg"
import img5 from "../images/products/5.jpg"
import img6 from "../images/products/6.jpg"
import avatar2 from "../images/team/avatar2.jpg"
import avatar4 from "../images/team/avatar4.jpg"
import avatar5 from "../images/team/avatar5.jpg"
function HomePage() {
    
    return (
        <>
            <div className="container pt-4 pt-xl-5">
                <nav id="mainNav" className="navbar navbar-light navbar-expand-md sticky-top navbar-shrink py-3">
                    <div className="container">
                        <a className="navbar-brand d-flex align-items-center" href="/">
                            <img style={{ width: '50px', margin: '10px' }} src={logo} alt="Logo" />
                            <span>HEALTHMATIC VIRTUAL CLINIC</span>
                        </a>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1">
                            <span className="visually-hidden">Toggle navigation</span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="navcol-1" className="collapse navbar-collapse">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <a className="btn btn-primary shadow" role="button" href="Bookappointment.html">
                                        Book Appointment
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="projects.html"></a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-primary shadow" role="button" href="/login">Sign in Or Sign up</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <div className="row pt-5">
                    <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
                        <div className="text-center">
                            <p className="fw-bold text-success mb-2">
                                We are scaling up our impact to bring on-demand virtual
                                <br />
                                healthcare to millions of Canadians every day.
                            </p>
                            <h1 className="fw-bold">
                                <span style={{ color: 'rgb(68, 114, 196)' }}>Creating Healthier</span>
                                <br />
                                <span style={{ color: 'rgb(68, 114, 196)' }}>Families</span>
                            </h1>
                        </div>
                    </div>
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="position-relative" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                            <div style={{ position: 'relative', flex: '0 0 45%', transform: 'translate3d(-15%, 35%, 0)' }}>
                                <img className="img-fluid" data-bss-parallax="" data-bss-parallax-speed="0.8" src={img4} alt="Image 1" />
                            </div>
                            <div style={{ position: 'relative', flex: '0 0 45%', transform: 'translate3d(-5%, 20%, 0)' }}>
                                <img className="img-fluid" data-bss-parallax="" data-bss-parallax-speed="0.4" src={img5} alt="Image 2" />
                            </div>
                            <div style={{ position: 'relative', flex: '0 0 60%', transform: 'translate3d(0, 0%, 0)' }}>
                                <img className="img-fluid" data-bss-parallax="" data-bss-parallax-speed="0.25" src={img6} alt="Image 3" />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="py-5"></section>
                <section>
                    <div className="container bg-primary-gradient py-5">
                        <div className="row">
                            <div className="col-md-8 col-xl-6 text-center mx-auto">
                                <p className="fw-bold text-success mb-2">Our Services</p>
                                <h3 className="fw-bold">What we can do for you</h3>
                            </div>
                        </div>
                        <div className="py-5 p-lg-5">
                            <div className="row row-cols-1 row-cols-md-2 mx-auto" style={{ maxWidth: '900px' }}>
                                <div className="col mb-5">
                                    <div className="card shadow-sm">
                                        <div className="card-body px-4 py-5 px-md-5">
                                            <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon" style={{ top: '1rem', right: '1rem', position: 'absolute' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bell">
                                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                                </svg>
                                            </div>
                                            <h5 className="fw-bold card-title">Together, We Can Achieve Even More</h5>
                                            <p className="text-muted card-text mb-4">
                                                <span style={{ color: 'rgb(68, 114, 196)' }}>When you partner with the Virtual Health Clinic, you</span><br />
                                                <span style={{ color: 'rgb(68, 114, 196)' }}>are:</span><br />
                                                <span style={{ color: 'rgb(68, 114, 196)' }}>Healthmatic Virtual Clinic Shaping the future of healthcare delivery.</span><br />
                                                <span style={{ color: 'rgb(68, 114, 196)' }}>Healthmatic Virtual Clinic Helping build a stronger healthcare system.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card shadow-sm">
                                        <div className="card-body px-4 py-5 px-md-5">
                                            <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon" style={{ top: '1rem', right: '1rem', position: 'absolute' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bezier">
                                                    <path fillRule="evenodd" d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                                                    <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z" />
                                                </svg>
                                            </div>
                                            <h5 className="fw-bold card-title">You Are in Good Hands</h5>
                                            <p className="text-muted card-text mb-4">
                                                <span style={{ color: 'rgb(68, 114, 196)' }}>The Virtual Health Clinic is honored to work with some of Canada’s</span><br />
                                                <span style={{ color: 'rgb(68, 114, 196)' }}>leading organizations in communities across Ontario.</span><br />
                                                <span style={{ color: 'rgb(68, 114, 196)' }}>We work together with non-profits, and corporate partners to name a</span><br />
                                                <span style={{ color: 'rgb(68, 114, 196)' }}>few to improve lives across Canada.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card shadow-sm">
                                        <div className="card-body px-4 py-5 px-md-5">
                                            <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon" style={{ top: '1rem', right: '1rem', position: 'absolute' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-pin-angle">
                                                    <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z"></path>
                                                </svg>
                                            </div>
                                            <h5 className="fw-bold card-title">
                                                <strong>
                                                    <span style={{ color: 'rgb(116, 116, 116)' }}>Book an Appointment</span>
                                                </strong>
                                            </h5>
                                            <p className="text-muted card-text mb-4">
                                                <span style={{ color: 'rgb(119, 119, 119)' }}>Book an appointment online at</span><br />
                                                <a href="https://www.virtualhealthclinic.com/">
                                                    <em>
                                                        <span style={{ color: 'rgb(83, 59, 126)', backgroundColor: 'transparent' }}>www.healthmaticvirtaulclinic.com</span>
                                                    </em>
                                                </a><br />
                                                <span style={{ color: 'rgb(119, 119, 119)' }}>or you may request an appointment</span><br />
                                                <span style={{ color: 'rgb(119, 119, 119)' }}>by calling or texting 844-222-7200&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>
                                            </p>
                                            <button className="btn btn-primary shadow" type="button">Learn more</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card shadow-sm">
                                        <div className="card-body px-4 py-5 px-md-5">
                                            <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon" style={{ top: '1rem', right: '1rem', position: 'absolute' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-chat-quote">
                                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"></path>
                                                    <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"></path>
                                                </svg>
                                            </div>
                                            <h5 className="fw-bold card-title">
                                                <strong>
                                                    <span style={{ color: 'rgb(116, 116, 116)' }}>Diagnoses &amp; Prescription</span>
                                                </strong>
                                            </h5>
                                            <p className="text-muted card-text mb-4">
                                                <span style={{ color: 'rgb(68, 114, 196)' }}>During your consultation, our healthcare providers can diagnose your condition and write any required prescriptions to be sent to your preferred pharmacy</span>
                                                <span style={{ color: 'rgb(119, 119, 119)' }}>.</span>
                                            </p>
                                            <button className="btn btn-primary shadow" type="button">Learn more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container py-5">
                        <div className="mx-auto" style={{ maxWidth: '900px' }}>
                            <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center">
                                <div className="col mb-4">
                                    <div className="card bg-primary-light">
                                        <div className="card-body text-center px-4 py-5 px-md-5">
                                            <p className="fw-bold text-primary card-text mb-2">Hours of Operation</p>
                                            <h5 className="fw-bold card-title mb-3">Open 7-Days a Week<br />&nbsp; &nbsp; &nbsp; &nbsp;
                                                &nbsp; 8:00am to 9:00pm (EST)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card bg-secondary-light">
                                        <div className="card-body text-center px-4 py-5 px-md-5">
                                            <p className="fw-bold text-secondary card-text mb-2">PLEASE CALL&nbsp; 9 1 1</p>
                                            <h5 className="fw-bold card-title mb-3">IF YOU ARE EXPERIENCING CHEST PAIN, SHORTNESS OF
                                                BREATH OR&nbsp;LIFE-THREATENING EMERGENCY</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card bg-info-light"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5 mt-5">
                    <div className="container py-5">
                        <div className="row mb-5">
                            <div className="col-md-8 col-xl-6 text-center mx-auto">
                                <p className="fw-bold text-success mb-2"></p>
                                <h2 className="fw-bold">Our<br /> Healthcare Providers<br />Can Assist You With:</h2>
                                <p className="text-muted">No matter the health issue, our team can handle it.&nbsp;</p>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
                            <div className="col mb-4">
                                <div className="d-flex flex-column align-items-center align-items-sm-start">
                                    <p className="bg-light border rounded border-light p-4">
                                        <span style={{ color: 'rgb(68, 114, 196)' }}>Anxiety Counselling</span><br />
                                        <span style={{ color: 'rgb(68, 114, 196)' }}>Cardiology</span><br />
                                        <span style={{ color: 'rgb(68, 114, 196)' }}>COVID-19 Counselling</span><br />
                                        <span style={{ color: 'rgb(68, 114, 196)' }}>Dermatology Referrals</span><br />
                                        <span style={{ color: 'rgb(68, 114, 196)' }}>Diabetes Management</span><br />
                                        <span style={{ color: 'rgb(68, 114, 196)' }}>Gynecology</span><br /><br />
                                    </p>
                                    <div className="d-flex">
                                        <img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src={avatar2} />
                                        <div>
                                            <p className="fw-bold text-primary mb-0">John Smith</p>
                                            <p className="text-muted mb-0">Erat netus</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="d-flex flex-column align-items-center align-items-sm-start">
                                    <p className="bg-light border rounded border-light p-4">
                                        <span style={{ color: 'rgb(68, 114, 196)' }}>Lab Results &amp; Requisitions</span><br />
                                        <span style={{ color: 'rgb(68, 114, 196)' }}>Medical Advice &amp; Assessments</span><br />
                                        <span style={{ color: 'rgb(68, 114, 196)' }}>Medication Delivery&nbsp;</span><br />
                                        <span style={{ color: 'rgb(68, 114, 196)' }}>Medication Prescriptions &amp; Refills</span><br />
                                        <span style={{ color: 'rgb(68, 114, 196)' }}>Mental Health Support &amp; Counseling&nbsp;</span>
                                    </p>
                                    <div className="d-flex">
                                        <img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src={avatar4} />
                                        <div>
                                            <p className="fw-bold text-primary mb-0">John Smith</p>
                                            <p className="text-muted mb-0">Erat netus</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="d-flex flex-column align-items-center align-items-sm-start">
                                    <p className="bg-light border rounded border-light p-4">
                                        <span style={{ color: 'rgb(68, 114, 196)' }}>Quality Telehealth Consultations</span><br />
                                        <span style={{ color: 'rgb(68, 114, 196)' }}>Work &amp; School Medical Notes</span><br />
                                        <span style={{ color: 'rgb(68, 114, 196)' }}>Weight Loss Management</span><br />
                                        <span style={{ color: 'rgb(68, 114, 196)' }}>X-Ray/Ultrasound Results &amp; Requisitions</span><br /><br /><br />
                                    </p>
                                    <div className="d-flex">
                                        <img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src={avatar5} />
                                        <div>
                                            <p className="fw-bold text-primary mb-0">John Smith</p>
                                            <p className="text-muted mb-0">Erat netus</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-8 col-xl-6 text-center mx-auto">
                                <p className="fw-bold text-success mb-2">Contacts</p>
                                <h2 className="fw-bold">How you can reach us</h2>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6 col-xl-4">
                                <div>
                                    <form 
                                        ref={form}
                                        onSubmit={sendEmail}
                                        className="p-3 p-xl-4 d-flex flex-column gap-15"
                                    >
                                        <div>
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                placeholder="Name"
                                                name="name"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                className="form-control mb-3"
                                                placeholder="Email"
                                                name="email"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                name="message"
                                                className="w-100 form-control mb-3"
                                                id="message-1"
                                                cols="30"
                                                rows="4"
                                                placeholder="Comments"
                                            ></textarea>
                                        </div>
                                        <div>
                                            <input
                                                type="submit"
                                                value="Send"
                                                className="button border-0 btn btn-primary shadow d-block w-100"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4 col-xl-4 d-flex justify-content-center justify-content-xl-start">
                                <div className="d-flex flex-wrap flex-md-column justify-content-md-start align-items-md-start h-100">
                                    <div className="d-flex align-items-center p-3">
                                        <div className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-telephone">
                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                            </svg>
                                        </div>
                                        <div className="px-2">
                                            <h6 className="fw-bold mb-0">Phone</h6>
                                            <p className="text-muted mb-0">+123456789</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center p-3">
                                        <div className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-envelope">
                                                <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                            </svg>
                                        </div>
                                        <div className="px-2">
                                            <h6 className="fw-bold mb-0">Email</h6>
                                            <p className="text-muted mb-0">healthmaticvirtaulclinic@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center p-3">
                                        <div className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-pin">
                                                <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z" />
                                            </svg>
                                        </div>
                                        <div className="px-2">
                                            <h6 className="fw-bold mb-0">Location</h6>
                                            <p className="text-muted mb-0">12 Example Street</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container">
                        <div className="border rounded border-white d-flex flex-column justify-content-between align-items-center flex-lg-row bg-primary-gradient p-4 p-lg-5">
                            <div className="text-center text-lg-start py-3 py-lg-1">
                                <h2 className="fw-bold mb-2">Subscribe to our newsletter</h2>
                                <p className="mb-0">Healthmatic clinic&nbsp;</p>
                            </div>
                            <form className="d-flex justify-content-center flex-wrap flex-lg-nowrap" method="post">
                                <div className="my-2">
                                    <input className="border rounded-pill shadow-sm form-control" type="email" name="email" placeholder="Your Email" />
                                </div>
                                <div className="my-2">
                                    <button className="btn btn-primary shadow ms-2" type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <footer className="bg-primary-gradient">
                <div className="container py-4 py-lg-5">
                    <div className="row justify-content-center">
                        <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
                            <h3 className="fs-6 fw-bold"></h3>
                            <ul className="list-unstyled">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="text-muted d-flex justify-content-between align-items-center pt-3">
                        <p className="mb-0">Copyright © 2023 Brand</p>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                </svg>
                            </li>
                            <li className="list-inline-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-twitter">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                </svg>
                            </li>
                            <li className="list-inline-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-instagram">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer >
        </>

    );

}
export default HomePage;