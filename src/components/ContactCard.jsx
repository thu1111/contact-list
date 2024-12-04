const ContactCard = ({contact, setSelectedContactId}) => {
    return ( 
        <div className="card">
            <p><b>Name:</b> {contact.name}</p>
            <p><b>Email:</b> {contact.email}</p>
            <p><b>Phone:</b> {contact.phone}</p> 
            <br />
            <h3>Address</h3>
            <p><b>Street:</b> {contact.address.street}</p>
            <p><b>City/Zip:</b> {contact.address.city} {contact.address.zipcode}</p>
            <br />
            <p><b>Company:</b> {contact.company.name}</p>
            <br />
            <button onClick={()=>setSelectedContactId(null)}>Back</button>             
        </div>
     );
}
 
export default ContactCard;