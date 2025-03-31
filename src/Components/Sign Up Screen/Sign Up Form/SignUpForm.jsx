const SignUpForm=()=>{
    return(
        <div className='sign-up-form' style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 9999
        }}>
            <h4>Register with</h4>
            <div className='icons'></div>
            <h4>or</h4>
            <div><input form={'name'}/></div>
            <div><input form={'email'}/></div>
            <div><input form='password'/></div>
            <button type='submit'>Sign Up</button>
            <h5>Already have an account? Sign in</h5>


        </div>
    )
}
export default SignUpForm;