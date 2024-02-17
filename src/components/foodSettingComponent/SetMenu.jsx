import Spinner from 'react-bootstrap/Spinner';
import FoodMenu from './foodMenu';
import EditFood from './editFood';
import { useState, useEffect } from 'react';

export default function SetMenu() {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [editModalShow, setEditModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    fetchData();
  }, [forceUpdate]); 

  const fetchData = async () => {
    try {
      const response = await fetch('https://swifdropp.onrender.com/api/v1/category/all');
      const data = await response.json();
      setMenuData(data);
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDataUpdate = (updatedData) => {
    setMenuData(updatedData);
    setForceUpdate(!forceUpdate); 
  };
  
  const handleEditClick = (item) => {
    setSelectedItem(item);
    setEditModalShow(true);
  };

  return (
    <>
      {loading ? ( 
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          {menuData.length > 0 && (
            <FoodMenu menuData={menuData} onDataUpdate={handleDataUpdate} onEditClick={handleEditClick} />
          )}
          <EditFood show={editModalShow} handleClose={() => setEditModalShow(false)} selectedItem={selectedItem} onSaveChanges={handleDataUpdate} />
        </>
      )}
    </>
  );
}