import Information from "../Components/Information/information";
import Receipt from "../Components/Receipt/Receipt";
import SearchUser from "../Components/SearchUser/searchUser";

import './addTime.css'

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