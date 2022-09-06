import LoginForm from "./components/loginform";

const Home = () => {
   
   const handleClick = () => {
    console.log('hello cyclists');
   }
   
    return ( 
        <div className="home">
            <h2>Homepage</h2>
        <LoginForm/>

        </div>
     );
}
 
export default Home;