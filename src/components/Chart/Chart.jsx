import { useEffect, useState } from 'react'
import data from './data.json'
import nft from '../../assets/nft.jpg'
import { Link } from 'react-router-dom'

//console.log('prime: ', data)

const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const {
          COLLECTION,
          FLOOR_PRICE,
          oneD_CHANGE,
          sevenD_CHANGE,
          oneD_VOLUME,
          sevenD_VOLUME,
          OWNERS,
          SUPPLY,
        } = curUser;
        const red = oneD_CHANGE < 0;
        return (
          <tr key={curUser.address} className="hover:bg-gray-800 text-center">
            <td className="p-2 ">
              <Link to={`/collection/${curUser.address}`} className="flex space-x-2">
                <img src={nft} className="w-8 rounded-full" alt="NFT" />
                <span>{COLLECTION}</span>
              </Link>
            </td>
            <td className="">{FLOOR_PRICE}</td>
            <td className={` ${red ? 'text-orange-700' : 'text-white'}`}>{oneD_CHANGE}</td>
            <td className="">{sevenD_CHANGE}</td>
            <td className="">{oneD_VOLUME}</td>
            <td className="">{sevenD_VOLUME}</td>
            <td className="">{OWNERS}</td>
            <td className="">{SUPPLY}</td>
          </tr>
        );
      })}
    </>
  );
};

const Chart = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    try {
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
    <div className=' flex justify-center mt-20'>
      <table className="text-sm w-[80%]">
        <thead>
          <tr>
            <th className="p-4">COLLECTION</th>
            <th className="">FLOOR PRICE</th>
            <th className="">1D CHANGE</th>
            <th className="">7D CHANGE</th>
            <th className="">1D VOLUME</th>
            <th className="">7D VOLUME</th>
            <th className="">OWNERS</th>
            <th className="">SUPPLY</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Chart;
