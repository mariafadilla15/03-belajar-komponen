import { getImageUrlV2 } from '@/utils/utils';

type Person = {
    name: string;
    imageId: string;
};

type MyProfileProps = {
    person: Person;
    size: number;
};

function MyAvatar({ person, size }: MyProfileProps) {
    const imageSize = size < 90 ? 's' : 'b';
  return (
    <img
      className="avatar"
      src={getImageUrlV2(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function MyProfile() {
  return (
    <MyAvatar
      //size={95}
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