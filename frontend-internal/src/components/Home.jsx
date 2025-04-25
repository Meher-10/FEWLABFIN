function Home(props){
    return(
        <>
        <h1>Welcome {props.name}</h1>
        <h1>Welcome {props.age}</h1>
        <h1>Welcome {props.valid?"Yes":"nO"}</h1>
        </>
        
    )

}
export default Home;