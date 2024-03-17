import MyProfile from '@/components/myprofile';

export default function MyGallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <MyProfile
        name="Maria Skłodowska-Curie"
        imageUrl="szV5sdG"
        profession="Fisikawan dan kimiawan"
        awards={['Penghargaan Nobel Fisika', 'Penghargaan Nobel Kimia', 'Medali Davy', 'Medali Matteucci']}
        discovery="polonium (unsur kimia)"
      />
      <MyProfile
        name="Katsuko Saruhashi"
        imageUrl="YfeOqp2"
        profession="Ahli Geokimia"
        awards={['Penghargaan Miyake Geokimia', 'Penghargaan Tanaka']}
        discovery="sebuah metode untuk mengukur karbon dioksida pada air laut"
      />
    </div>
  );
}