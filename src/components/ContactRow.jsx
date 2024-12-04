const ContactRow = ({contact,setSelectedContactId}) => { //reuseable component
    return ( 
    <tr className="contact-row" onClick={()=>setSelectedContactId(contact.id)}>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
    </tr>
    
    );
}
 
export default ContactRow;