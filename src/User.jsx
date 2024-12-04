export default function User({user}){
    const {name, email} = user;
    return(
        <div className="myClass">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}