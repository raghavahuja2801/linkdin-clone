import styled from "styled-components";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { setUserLoginDetails } from "../features/user/userSlice";


const Login = (props) => {

    const dispatch = useDispatch();

    const setUserData = (user)=> {
        dispatch(
            setUserLoginDetails(
                {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }
            )
        );
        console.log(user);
    }

    const handleAuth = ()=>{
        signInWithPopup(auth,provider).then((results)=>{
            setUserData(results.user);
        }).catch((err)=>{
            alert(err.message);
        })
    }

    return(
        <Container>
            <Nav>
                <a href="/">
                    <img src='/images/login-logo.svg' alt='login-logo' />
                </a> 
                <div>
                    <Join>Join now</Join>
                    <Signin>Sign In</Signin>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src='/images/login-hero.svg' alt="login-hero" />
                </Hero>
                <Form>
                    <Google onClick={handleAuth}>
                        <img src='/images/google.svg' />
                        Sign In With Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}

const Container = styled.div`
    padding: 0px;
`;


const Nav = styled.nav`
    max-width:1128px;
    margin: auto;
    padding: 12px 0px 16px;
    display: flex;
    align-items: center;
    position:relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    &> a {
        width: 135px;
        height: 34px;

        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }

`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rbga(0,0,0,0.08);
    margin-right: 12px;
    border-radius: 4px;
    &:hover{
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.9);
        text-decoration: none;
        
    }
    
`;

const Signin = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 23px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0,0,0,0);

    &:hover{
        background-color: rgba(112,181,249,0.15); 
        color: #0a66c2;
        text-decoration: none;
    }


`;

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    margin: auto;

    @media(max-height: 768px) {
        margin: auto;
        min-height: 0px;

    }
`;

const Hero = styled.div`
    width: 100%;
    h1{
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;

        @media (max-width: 768px){
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }

    img {
        width: 750px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;

        @media (max-width: 768px) {
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`;

const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    align-items: center;
    justify-content: center;

    @media (max-width:768px) {
        margin-top: 20px;

    }

`;

const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 56px;
    width: 100% ;
    border-radius: 28px; 
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgb(0 ,0 ,0 ,0.6);

    &:hover {
        background-color: rgba(207,207,207,0.25);
        color: rgb(0 ,0 ,0 ,0.75);

    }
`;
export default Login;