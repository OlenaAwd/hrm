import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import API from '../../utils/api';
import { setSortDirection, selectFilter, setBedroomType, setBathroomType, setStyleType, setConditionType, setResultArr, setIsListingFree, setMinPrice, setMaxPrice} from '../../slices/filter';
import filterIcon from '../../assets/filterIcon.svg';
import { filteredBathroomData, filteredBedroomData, filteredConditionData, filteredOptionsData, filteredPriceData, filteredStyleData } from '../SearchComponent/filteredOptions';
import styles from "./FilterModal.module.scss";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 720,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius:"10px",
    boxShadow: 24,
    p:"5px",
    "@media(max-width:860px)":{
      width: 358,
    }
  };

const FilterModal = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
    const {isListingFree, sortDirection, bedroomType, bathroomType, conditionType, styleType, minPrice, maxPrice} = useSelector(selectFilter);
    

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

     const getFilteredData = () => {
      const axiosConfig = {
        url: process.env.REACT_APP_HOUSES_API,
        method: 'GET',
         params: { 
          IsListingFree:isListingFree, 
          SortDirection: sortDirection, 
          BedroomType: bedroomType, 
          BathroomType: bathroomType, 
          ConditionTypes:conditionType, 
          StyleTypes:styleType,
          MinPrice:minPrice,
          MaxPrice:maxPrice
         },
      };
    
      API(axiosConfig)
        .then(response => {
          if (response?.err) {
            return;
          }
           dispatch(setResultArr({resultArr: response.response.data.value }));
           navigate("/marketplace")
    
        })
        .catch(error => {
          console.log('error :>> ', error);
        });
    };

    const handleSave=()=>{
        getFilteredData()
        setOpen(false);

        dispatch(setSortDirection({ sortDirection: null } ));
        dispatch(setBedroomType({bedroomType: null}));
        dispatch(setBathroomType({bathroomType: null}));
        dispatch(setConditionType({conditionType: null}));
        dispatch(setStyleType({styleType: null}));
        dispatch(setResultArr({resultArr: []}));
        dispatch(setIsListingFree({isListingFree: null}));
        dispatch(setMaxPrice({maxPrice:null}));
        dispatch(setMinPrice({minPrice:null}))
    }
    const handleClear=()=>{
        dispatch(setSortDirection({ sortDirection: null } ));
        dispatch(setBedroomType({bedroomType: null}));
        dispatch(setBathroomType({bathroomType: null}));
        dispatch(setConditionType({conditionType: null}));
        dispatch(setStyleType({styleType: null}));
        dispatch(setResultArr({resultArr: []}));
        dispatch(setIsListingFree({isListingFree: null}));
        dispatch(setMaxPrice({maxPrice:null}));
        dispatch(setMinPrice({minPrice:null}))
        // setOpen(false);
    }
    const [checkedOrderItems, setCheckedOrderItems] = useState({});
    const [checkedBedroomItems, setCheckedBedroomItems] = useState({});
    const [checkedBathroomItems, setCheckedBathroomItems] = useState({});
    const [checkedStyleItems, setCheckedStyleItems] = useState({});
    const [checkedConditionItems, setCheckedConditionItems] = useState({});
    const [checkedPriceItems, setCheckedPriceItems] = useState({});
    const [minPriceVal, setMinPriceVal] = useState("");
    const [maxPriceVal, setMaxPriceVal] = useState("");
 
  const handleSortChange = (itemValue) => {
    setCheckedOrderItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemValue]: !prevCheckedItems[itemValue], // Toggle the checked status
    }));
    dispatch(setSortDirection({ sortDirection: itemValue } ));
  };
  const handleBedroomsChange = (itemValue) => {
    setCheckedBedroomItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemValue]: !prevCheckedItems[itemValue], // Toggle the checked status
    }));
    dispatch(setBedroomType({bedroomType: itemValue}))
  };

  const handleBathroomChange= (itemValue) => {
    setCheckedBathroomItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemValue]: !prevCheckedItems[itemValue],
    }));
    dispatch(setBedroomType({bathroomType:itemValue}))
  };
  const handleStyleChange= (itemValue) => {
    setCheckedStyleItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemValue]: !prevCheckedItems[itemValue], // Toggle the checked status
    }));
    dispatch(setStyleType({styleType: itemValue}))
  };

  const handleConditionChange= (itemValue) => {
    setCheckedConditionItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemValue]: !prevCheckedItems[itemValue], // Toggle the checked status
    }));
    dispatch(setConditionType({styleType: itemValue}))
  };
  const handlePriceChange= (itemValue) => {
    setCheckedPriceItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemValue]: !prevCheckedItems[itemValue],
    }));
     dispatch(setIsListingFree({isListingFree: itemValue}))
  };

  const handleChangeMinPrice=(val)=>{
    const value = val.target.value || '';
    if (/^[0-9]*$/.test(value)) {
      setMinPriceVal(value);
      dispatch(setMinPrice({minPrice:value}))
    }
  }
  const handleChangeMaxPrice=(val)=>{
    const value = val.target.value || '';
    if (/^[0-9]*$/.test(value)) {
      setMaxPriceVal(value);
      dispatch(setMaxPrice({maxPrice:value}))
    }
  }

  return (
<div>
<button type="button" className={styles.filterBtn} onClick={handleOpen}>
        <img src={filterIcon} alt="filter"/>Filters            
    </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div style={{ height:680,overflow:"auto", padding: "16px",}}>
            <AppBar sx={{background:"#fff", color:"black", display:"flex", justifyContent:"center", padding:"10px", borderTopRightRadius:"10px", borderTopLeftRadius:"10px",}}>
        <h4 className={styles.modalTitle}>Filters</h4>

      </AppBar>
                 <div className={styles.modalBody}>
                 <p className={styles.modalSectionTitle}>Sort direction</p>
            <div className={styles.checkboxWrapperColumn}>
               {filteredOptionsData.map((item, index) => (
         <div key={index} className={styles.checkbox}>
         <label>
           <input
             type="checkbox"
             checked={checkedOrderItems[item.value] || false}
             onChange={() => handleSortChange(item.value)}
             className={`${sortDirection !== null && styles.checkedInput}`}
           />
           {item.title}
         </label>
       </div>
      ))}
            </div>
            <p className={styles.modalSectionTitle}>Bedrooms</p>
            <div className={styles.checkboxWrapperColumn}>
               {filteredBedroomData.map((item) => (
         <div key={item.id} className={styles.checkbox}>
         <label>
           <input
             type="checkbox"
             checked={checkedBedroomItems[item.value] || false}
             onChange={() => handleBedroomsChange(item.value)}
           />
           {item.title}
         </label>
       </div>
      ))}
            </div>
            <p className={styles.modalSectionTitle}>Bathrooms</p>
            <div className={styles.checkboxWrapperColumn}>
               {filteredBathroomData.map((item) => (
         <div key={item.id} className={styles.checkbox}>
         <label>
           <input
             type="checkbox"
             checked={checkedBathroomItems[item.value] || false}
             onChange={() => handleBathroomChange(item.value)}
           />
           {item.title}
         </label>
       </div>
      ))}
            </div>
            <p className={styles.modalSectionTitle}>Price</p>
            <div className={styles.checkboxWrapperPrice}>
               {filteredPriceData.map((item) => (
         <div key={item.id} className={styles.checkbox}>
         <label>
           <input
             type="checkbox"
             checked={checkedPriceItems[item.value] || false}
             onChange={() => handlePriceChange(item.value)}
           />
           {item.title}
         </label>
       </div>
      ))}
      <input placeholder='Min' className={styles.priceInput} value={minPriceVal} onChange={handleChangeMinPrice}/>
      <input placeholder='Max' className={styles.priceInput} value={maxPriceVal} onChange={handleChangeMaxPrice}/>
      </div>
            <p className={styles.modalSectionTitle}>House Style</p>
            <div className={styles.checkboxWrapperColumn}>
               {filteredStyleData.map((item) => (
         <div key={item.id} className={styles.checkbox}>
         <label>
           <input
             type="checkbox"
             checked={checkedStyleItems[item.value] || false}
             onChange={() => handleStyleChange(item.value)}
           />
           {item.title}
         </label>
       </div>
      ))}
            </div>
            <p className={styles.modalSectionTitle}>House Condition</p>
            <div className={styles.checkboxWrapper}>
               {filteredConditionData.map((item) => (
         <div key={item.id} className={styles.checkbox}>
         <label>
           <input
             type="checkbox"
             checked={checkedConditionItems[item.value] || false}
             onChange={() => handleConditionChange(item.value)}
           />
           {item.title}
         </label>
       </div>
      ))}
            </div>
         
          {/* <SelectComponent header="Sort direction" arr={filteredOptionsData} onChange={handleOrder} value={sort} /> */}
          {/* <SelectComponent header="Bedroom Type" arr={filteredBedroomData} onChange={handleBedroomType} value={bedroomType} /> */}
          {/* <SelectComponent header="Bathroom Type" arr={filteredBathroomData} onChange={handleBathroomType} value={bathroomType} /> */}
          {/* <SelectComponent header="Condition Type" arr={filteredConditionData} onChange={handleConditionType} value={conditionType} /> */}
          {/* <SelectComponent header="Style Type" arr={filteredStyleData} onChange={handleStyleType} value={styleType} /> */}

          <div className={styles.btnWrapper}>
            <button className={styles.btnClear} onClick={handleClear}>Clear filters</button>
            <button className={styles.btnSave} onClick={handleSave}>Search</button>
          </div>
      </div>
          
    </div>
         

     
          </Box>
        </Fade>
      </Modal>
    </div>
 
  )
}

export default FilterModal