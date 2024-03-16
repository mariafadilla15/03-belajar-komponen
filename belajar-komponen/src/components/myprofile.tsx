interface ProfileProps {
    name: string;
    imageUrl: string;
    profession: string;
    awards: string[];
    discovery: string;
  }
  
  const MyProfile: React.FC<ProfileProps> = ({ name, imageUrl, profession, awards, discovery }) => {
    return (
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={imageUrl}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profesi: </b> 
            {profession}
          </li>
          <li>
            <b>Penghargaan: {awards.length} </b> 
            ({awards.join(', ')})
          </li>
          <li>
            <b>Telah Menemukan: </b>
            {discovery}
          </li>
        </ul>
      </section>
    );
  }
  
  export default MyProfile;