
import SearchUser from '@/app/Components/SearchUser/searchUser';
import './addTime.css'
import Information from '@/app/Components/Information/information';
import Receipt from '@/app/Components/Receipt/Receipt';

export default function Page() {
  return (
    <section className='containerSection'>
      <h2 className='title'> AGREGAR TIEMPO </h2>

      <SearchUser />

      <Information
        NoCuenta="idcuanta"
        Nombre="juan"
      />

      <div className="addTime">
        <Receipt />
      </div>
    </section>

  );
}
//IO