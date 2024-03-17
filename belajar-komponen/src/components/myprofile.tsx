import { getImageUrlV2 } from '@/utils/utils';

function MyAvatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function MyProfile() {
  return (
    <MyAvatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}

// import { getImageUrl } from '@/utils/utils';

// type ProfileProps = {
//   name: string;
//   imageUrl: string;
//   profession: string;
//   awards: string[];
//   discovery: string;
// };

// export default function MyProfile({ name, imageUrl, profession, awards, discovery }: ProfileProps) {
//   return (
//     <section className="profile">
//       <h2>{name}</h2>
//       <img
//         className="avatar"
//         src={getImageUrl(imageUrl)}
//         alt={name}
//         width={70}
//         height={70}
//       />
//       <ul>
//         <li>
//           <b>Profesi: </b> 
//           {profession}
//         </li>
//         <li>
//           <b>Penghargaan: {awards.length} </b> 
//           ({awards.join(', ')})
//         </li>
//         <li>
//           <b>Telah Menemukan: </b>
//           {discovery}
//         </li>
//       </ul>
//     </section>
//   );
// }