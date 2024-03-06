import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import menu from '../../Asset/menu-6.svg';
import EditFood from './editFood'
import { useEffect, useState } from 'react';
import '../../components/profileComponent/style/App.css';
import { Pencil, Trash2Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

      export default function FoodMenu({ menuData, onDataUpdate }) {
        const [editModalShow, setEditModalShow] = useState(false);
        const [selectedItem, setSelectedItem] = useState(null);
        const navigate = useNavigate()

        const [tableHeight, setTableHeight] = useState(330.5);
        
  useEffect(() => {
    const table = document.getElementById('your-table-id');
    if (table) {
      const newHeight = table.offsetHeight;
      setTableHeight(newHeight);
    }
  }, [menuData]);
      
        const handleEditClick = (item) => {
          setSelectedItem(item);
          setEditModalShow(true);
        };
      
        const handleDeleteClick = async (itemId) => {
          try {
            if (!itemId || itemId.trim() === '') {
              console.error('Invalid itemId:', itemId);
              return;
            }
      
            const response = await fetch(`https://swifdropp.onrender.com/api/v1/category/${itemId}`, {
              method: 'DELETE',
            });
      
            if (response.ok) {
              console.log('Data deleted successfully');
              const updatedData = menuData.filter((item) => item._id !== itemId);
              onDataUpdate(updatedData);
            } else {
              console.error('Error deleting data:', response.statusText);
            }
          } catch (error) {
            console.error('Error deleting data:', error);
          }
        };
      
        const handleToggleAvailability = async (itemId, isAvailable) => {
          try {
            if (!itemId || itemId.trim() === '') {
              console.error('Invalid itemId:', itemId);
              return;
            }
        
            const updatedAvailability = !isAvailable;
        
            const response = await fetch(`https://swifdropp.onrender.com/api/v1/category/availability/${itemId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                isAvailable: updatedAvailability,
              }),
            });
        
            if (response.ok) {
              const responseData = await response.json();
              console.log('Response data:', responseData);
        
              // Update the local state with the new availability
              const updatedMenuData = menuData.map(item => {
                if (item._id === itemId) {
                  return { ...item, isAvailable: updatedAvailability };
                }
                return item;
              });
              onDataUpdate(updatedMenuData); // Notify parent component of the update
            } else {
              console.error('Error updating availability:', response.statusText);
            }
          } catch (error) {
            console.error('Error updating availability:', error);
          }
        };

      
        const handleEditModalClose = () => {
          setEditModalShow(false);
        };
      
        const handleSaveChanges = (updatedData) => {
          onDataUpdate(updatedData);
        };
      
        return (
          <>
            <div style={{
              width: '800px',
              height: `${tableHeight + 140}px`,
              border: '1px solid #ccc',
              padding: '10px',
              backgroundColor: 'white',
              marginTop: '5px',
              }}>
               <h5 style={{ display: 'flex', alignItems: 'center' }}>
        <span>Show</span> 
        <Form.Select aria-label="Default select example" style={{ width: '70px', height: '40px' }}>
            <option>10</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </Form.Select>
        Entries
        <input style={{  marginLeft: 'auto' }}/>
    </h5>
      
               <Table  id="your-table-id"
            style={{
              width: '780px',
              height: '330.5px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              backgroundColor: 'white',
            }} responsive="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>N.O.I</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {menuData &&
                    menuData.map((item, index) => (
                      <tr key={item._id} className={!item.isAvailable ? 'unavailableRow' : ''}>
                        <td>{index + 1}</td>
                        <td>
                          <img src={item.image} alt="" style={{ width: '48px', height: '45px', borderRadius: '20px' }} />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.numberOfItems}</td>
                        <td>
                          <Form.Check
                            type="switch"
                            id={`custom-switch-${index}`}
                            defaultChecked={item.isAvailable}
                            onChange={() => handleToggleAvailability(item._id, item.isAvailable)}
                            label={item.isAvailable ? 'Available' : 'Unavailable'}
                          />
                        </td>
                        <td style={{ display: 'flex' }}>
                          <p style={{ cursor: 'pointer', marginTop:'10px' }} onClick={() => handleEditClick(item)}>
                            Edit <Pencil size={15}/>
                          </p>
                          <p style={{ cursor: 'pointer', marginTop:'10px' }} onClick={() => handleDeleteClick(item._id)}>
                            Delete <Trash2Icon size={15}/>
                          </p>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
              <p style={{ width: '213px', height: '60px', border: '1px groove', backgroundColor:'darkBlue', fontWeight:'440px', lineHeight:'30px', textAlign:'center', color:'white', cursor:'pointer', borderRadius:'10px', top: '-30px', right: '20px', fontSize:'21.9px' }} onClick={()=>{
               navigate('/food-setting/AddEdit');
            }}>+Add A New Category</p>
            </div>
            {/*</div>*/}

      {/* Render the EditFood modal */}
      <EditFood
        show={editModalShow}
        handleClose={handleEditModalClose}
        selectedItem={selectedItem}
        onSaveChanges={handleSaveChanges}
      />
    </>
  );
}


