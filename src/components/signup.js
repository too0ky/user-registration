import React, { Component } from "react";



export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Let's set up your account</h3>
                Already have an account? <a href="/sign-in">Sign in</a>
                <br></br><br></br>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your name" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email address" />
                </div>

                <div className="form-group">
                    <select className="form-control">
                        <option value="" selected>I would describe my type as</option>
                        <option value="funny">Funny</option>
                        <option value="goofy">Goofy</option>
                        <option value="happy">Happy</option>
                        <option value="job-type">The type that get's the job!</option>
                    </select>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                    <i class="far fa-eye" id="togglePassword"></i>
                    Minimum 8 characters
                </div>

                <button type="next" className="btn btn-primary btn-block">Next</button>
                    By clicking the "Next" button, you agree to creating a free account, and to <a href="/sign-in">Terms of Service</a> and <a href="/sign-in">Privacy Policy</a>.
                
            </form>
        );
    }
}